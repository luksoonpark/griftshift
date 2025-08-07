import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Upload, RotateCcw, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { PuzzleTile } from './PuzzleTile';
import { SettingsMenu } from './SettingsMenu';
import { useLegoSound } from './hooks/useLegoSound';
import svgPaths from '../imports/svg-9ny3eksv8p';
import imgImage11 from "figma:asset/c55427eafcb47e7911a3cf87cad1dfac30e77a7a.png";

interface TileData {
  id: number;
  correctPosition: number;
  currentPosition: number;
  imageData?: string;
}

interface PuzzleGameProps {
  onBackToLanding?: () => void;
  initialImage?: string;
  onNewImageSelected?: () => void;
}

export function PuzzleGame({ onBackToLanding, initialImage, onNewImageSelected }: PuzzleGameProps) {
  const [uploadedImage, setUploadedImage] = useState<string>(initialImage || '');
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [emptyPosition, setEmptyPosition] = useState<number>(15); // Bottom right corner
  const [isComplete, setIsComplete] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // 사운드 훅 사용
  const { playLegoClickSound, playSuccessSound } = useLegoSound();

  // Create tiles from uploaded image with square cropping
  const createTilesFromImage = useCallback((imageUrl: string) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // 정사각형 크롭을 위한 계산
      const originalWidth = img.naturalWidth;
      const originalHeight = img.naturalHeight;
      
      // 가로, 세로 중 작은 값을 정사각형의 크기로 사용
      const cropSize = Math.min(originalWidth, originalHeight);
      
      // 크롭 시작점 계산 (이미지 중앙에서 크롭)
      const cropX = (originalWidth - cropSize) / 2;
      const cropY = (originalHeight - cropSize) / 2;
      
      // 캔버스 크기를 퍼즐 크기로 설정
      const puzzleSize = 344;
      canvas.width = puzzleSize;
      canvas.height = puzzleSize;
      
      // 정사각형으로 크롭된 이미지를 캔버스에 그리기
      ctx?.drawImage(
        img,
        cropX, cropY, cropSize, cropSize, // 소스 이미지에서 크롭할 영역
        0, 0, puzzleSize, puzzleSize       // 캔버스에 그릴 영역
      );
      
      const tileSize = puzzleSize / 4; // 86px
      const newTiles: TileData[] = [];
      
      for (let i = 0; i < 15; i++) { // 15 tiles, not 16 (one empty space)
        const row = Math.floor(i / 4);
        const col = i % 4;
        const x = col * tileSize;
        const y = row * tileSize;
        
        const tileCanvas = document.createElement('canvas');
        const tileCtx = tileCanvas.getContext('2d');
        tileCanvas.width = tileSize;
        tileCanvas.height = tileSize;
        
        // 메인 캔버스에서 타일 부분을 추출
        tileCtx?.drawImage(canvas, x, y, tileSize, tileSize, 0, 0, tileSize, tileSize);
        
        newTiles.push({
          id: i,
          correctPosition: i,
          currentPosition: i,
          imageData: tileCanvas.toDataURL()
        });
      }
      
      setTiles(newTiles);
      setEmptyPosition(15);
      setIsComplete(false);
    };
    
    img.crossOrigin = 'anonymous'; // CORS 문제 방지
    img.src = imageUrl;
  }, []);

  // Handle initial image when component mounts or initialImage changes
  useEffect(() => {
    if (initialImage) {
      setUploadedImage(initialImage);
      createTilesFromImage(initialImage);
    }
  }, [initialImage, createTilesFromImage]);

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);
        createTilesFromImage(imageUrl);
        // 새 이미지가 선택되었음을 App.tsx에 알림
        if (onNewImageSelected) {
          onNewImageSelected();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Check if puzzle is solved - 수정된 함수
  const checkIfComplete = useCallback((currentTiles: TileData[], newEmptyPosition: number) => {
    // 모든 타일이 올바른 위치에 있고, 빈 공간이 마지막 위치(15)에 있는지 확인
    const tilesInCorrectPosition = currentTiles.every(tile => tile.currentPosition === tile.correctPosition);
    const emptyInCorrectPosition = newEmptyPosition === 15;
    
    console.log('Checking completion:', {
      tilesInCorrectPosition,
      emptyInCorrectPosition,
      newEmptyPosition,
      tiles: currentTiles.map(t => ({ id: t.id, correct: t.correctPosition, current: t.currentPosition }))
    });
    
    return tilesInCorrectPosition && emptyInCorrectPosition;
  }, []);

  // Get adjacent positions to empty space
  const getAdjacentPositions = (position: number): number[] => {
    const row = Math.floor(position / 4);
    const col = position % 4;
    const adjacent: number[] = [];
    
    if (row > 0) adjacent.push((row - 1) * 4 + col); // Up
    if (row < 3) adjacent.push((row + 1) * 4 + col); // Down
    if (col > 0) adjacent.push(row * 4 + (col - 1)); // Left
    if (col < 3) adjacent.push(row * 4 + (col + 1)); // Right
    
    return adjacent;
  };

  // Handle tile click
  const handleTileClick = (clickedPosition: number) => {
    if (isComplete || isShuffling) return;
    
    const adjacentPositions = getAdjacentPositions(emptyPosition);
    
    if (adjacentPositions.includes(clickedPosition)) {
      // 레고 클릭 사운드 재생
      playLegoClickSound();
      
      const newTiles = tiles.map(tile => 
        tile.currentPosition === clickedPosition 
          ? { ...tile, currentPosition: emptyPosition }
          : tile
      );
      
      const newEmptyPosition = clickedPosition;
      
      setTiles(newTiles);
      setEmptyPosition(newEmptyPosition);
      
      // Check if puzzle is complete - 새로운 값들을 직접 전달
      setTimeout(() => {
        if (checkIfComplete(newTiles, newEmptyPosition)) {
          console.log('Puzzle completed!');
          setIsComplete(true);
          // 퍼즐 완료 사운드 재생
          setTimeout(() => {
            playSuccessSound();
          }, 200); // 애니메이션이 완료된 후 재생
        }
      }, 300); // Wait for animation to complete
    }
  };

  // Fisher-Yates shuffle with solvability check
  const shuffleTiles = () => {
    if (tiles.length === 0) return;
    
    setIsShuffling(true);
    
    // Create array of positions (0-14 for tiles, 15 for empty)
    let positions = Array.from({ length: 15 }, (_, i) => i);
    
    // Shuffle until we get a solvable configuration
    let attempts = 0;
    let isSolvable = false;
    
    while (!isSolvable && attempts < 100) {
      // Fisher-Yates shuffle
      for (let i = positions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [positions[i], positions[j]] = [positions[j], positions[i]];
      }
      
      // Check if solvable (count inversions)
      let inversions = 0;
      for (let i = 0; i < positions.length - 1; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          if (positions[i] > positions[j]) {
            inversions++;
          }
        }
      }
      
      // For 4x4 grid with empty space in bottom row, solvable if inversions are even
      isSolvable = inversions % 2 === 0;
      attempts++;
    }
    
    // Apply shuffled positions
    const shuffledTiles = tiles.map((tile, index) => ({
      ...tile,
      currentPosition: positions[index]
    }));
    
    setTiles(shuffledTiles);
    setEmptyPosition(15); // Keep empty space at bottom right initially, but it will move during shuffle
    setIsComplete(false);
    
    setTimeout(() => setIsShuffling(false), 500);
  };

  // 퍼즐을 원래 상태로 리셋하는 함수 (디버깅용)
  const resetToComplete = () => {
    const resetTiles = tiles.map(tile => ({
      ...tile,
      currentPosition: tile.correctPosition
    }));
    setTiles(resetTiles);
    setEmptyPosition(15);
    setIsComplete(false);
  };

  // Logo component
  const Logo = () => (
    <div className="relative shrink-0 size-[77px]">
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        style={{ backgroundImage: `url('${imgImage11}')` }}
      />
    </div>
  );

  // Camera icon
  const CameraIcon = () => (
    <div className="overflow-clip relative shrink-0 size-[21.884px]">
      <div className="absolute bottom-[12.5%] left-[4.17%] right-[4.17%] top-[12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 17">
          <path d={svgPaths.p19483c00} fill="var(--fill-0, #636AE8)" />
        </svg>
      </div>
      <div className="absolute bottom-[29.17%] left-[33.33%] right-[33.33%] top-[37.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path d={svgPaths.p35ae9700} fill="var(--fill-0, #636AE8)" />
        </svg>
      </div>
    </div>
  );

  // Upload icon
  const UploadIcon = () => (
    <div className="absolute overflow-clip size-[14.589px] top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ left: "calc(50% - 44.68px)" }}>
      <div className="absolute bottom-[8.25%] left-[8.13%] right-[8.13%] top-[58.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 5">
          <path d={svgPaths.p21b83700} fill="var(--fill-0, white)" />
        </svg>
      </div>
      <div className="absolute bottom-[62.41%] left-[24.87%] right-[24.88%] top-[8.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
          <path d={svgPaths.p330a0f80} fill="var(--fill-0, white)" />
        </svg>
      </div>
      <div className="absolute bottom-[33.19%] left-[45.81%] right-[45.81%] top-[8.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 9">
          <path d={svgPaths.p3b9a2fc0} fill="var(--fill-0, white)" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="bg-background box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-3 relative size-full transition-colors duration-300">
      <div className="basis-0 box-border content-stretch flex flex-col gap-8 grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
        
        {/* Header with Back Button, Logo and Settings */}
        <div className="flex items-center justify-between w-full max-w-[343.761px]">
          <div className="flex items-center gap-3">
            {onBackToLanding && (
              <motion.button
                onClick={onBackToLanding}
                className="p-2 rounded-full bg-card hover:bg-accent transition-colors duration-200 border border-border shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </motion.button>
            )}
            <Logo />
          </div>
          <SettingsMenu />
        </div>
        
        {/* Main Content */}
        <div className="bg-card relative rounded-[10.942px] shrink-0 w-full shadow-sm transition-colors duration-300">
          <div className="absolute border-border border-[0.912px] border-solid inset-0 pointer-events-none rounded-[10.942px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-[23px] py-6 relative w-full">
              <div className="box-border content-stretch flex flex-col gap-[102px] items-start justify-start p-0 relative shrink-0 w-[343.761px]">
                
                {/* Header */}
                <div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0">
                    <CameraIcon />
                    <div className="font-['Archivo:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-foreground text-[21.884px] text-left text-nowrap">
                      <p className="block leading-[29.179px] whitespace-pre">
                        {isComplete ? "Puzzle Complete!" : "Complete Your Puzzle"}
                      </p>
                    </div>
                  </div>
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-muted-foreground text-[12.766px] text-left">
                    <p className="block leading-[18.237px]">
                      {isComplete ? "Congratulations! You solved the puzzle!" : "Complete a puzzle of your image!"}
                    </p>
                  </div>
                </div>

                {/* Puzzle Container */}
                <div className="bg-transparent box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative rounded-[7.295px] shrink-0 w-full">
                  <div className="absolute border-[#e8618c] border-[1.824px] border-dashed inset-0 pointer-events-none rounded-[7.295px]" />
                  
                  <AnimatePresence mode="wait">
                    {isComplete ? (
                      <motion.div
                        key="complete"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-muted box-border overflow-clip relative rounded-[11.433px] shrink-0 size-[343px]"
                      >
                        <img 
                          src={uploadedImage} 
                          alt="Complete puzzle" 
                          className="w-full h-full object-cover rounded-[11.433px]"
                          style={{
                            objectPosition: 'center'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-[11.433px]" />
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border/50"
                          >
                            <h3 className="text-lg font-semibold text-green-600">🎉 Puzzle Complete!</h3>
                            <p className="text-sm text-muted-foreground mt-1">Great job solving the puzzle!</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="puzzle"
                        className="bg-muted box-border grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(4,_minmax(0px,_1fr))] overflow-clip p-0 relative rounded-[11.433px] shrink-0 size-[343px]"
                      >
                        {tiles.map((tile) => (
                          <PuzzleTile
                            key={tile.id}
                            tile={tile}
                            isClickable={!isShuffling}
                            onClick={() => handleTileClick(tile.currentPosition)}
                          />
                        ))}
                        {/* Empty space */}
                        <div className="shrink-0 size-[85.75px] bg-muted" style={{
                          gridArea: `${Math.floor(emptyPosition / 4) + 1} / ${(emptyPosition % 4) + 1}`
                        }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 items-center">
          {!uploadedImage ? (
            <div
              className="bg-[#636ae8] h-[36.473px] relative rounded-[18.237px] shrink-0 w-[161.836px] cursor-pointer hover:bg-[#5a61d9] transition-colors duration-200"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="h-[36.473px] overflow-clip relative w-[161.836px]">
                <div
                  className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#ffffff] text-[12.766px] text-left text-nowrap"
                  style={{ top: "calc(50% - 10.03px)", left: "calc(50% - 30.091px)" }}
                >
                  <p className="block leading-[20.06px] whitespace-pre">Upload Photo</p>
                </div>
                <UploadIcon />
              </div>
            </div>
          ) : (
            <div className="flex gap-3 flex-wrap justify-center">
              <Button
                onClick={shuffleTiles}
                disabled={isShuffling || tiles.length === 0}
                className="bg-[#636ae8] hover:bg-[#5a61d9] text-white rounded-[18.237px] px-6 py-2"
              >
                {isShuffling ? "Shuffling..." : "Shuffle"}
              </Button>
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="rounded-[18.237px] px-6 py-2"
              >
                New Image
              </Button>
              {/* 디버깅용 버튼 - 개발 시에만 표시 */}
              {process.env.NODE_ENV === 'development' && (
                <Button
                  onClick={resetToComplete}
                  variant="outline"
                  className="rounded-[18.237px] px-4 py-2 text-xs"
                >
                  Reset to Win
                </Button>
              )}
              {isComplete && (
                <Button
                  onClick={() => {
                    setIsComplete(false);
                    shuffleTiles();
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-[18.237px] px-6 py-2"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Play Again
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  );
}