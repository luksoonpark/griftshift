import { useRef } from 'react';
import { motion } from 'motion/react';
import { SettingsMenu } from './SettingsMenu';
import svgPaths from '../imports/svg-udrup5gasb';
import imgImage11 from "figma:asset/c55427eafcb47e7911a3cf87cad1dfac30e77a7a.png";
import imgImage from "figma:asset/46a41810e1a3c8cae1c375804c85a98b3c5166e8.png";
import imgImage1 from "figma:asset/4bc6456e82604485e611f9bc47594d6bc3d57a56.png";
import imgImage2 from "figma:asset/021daa6e109980724d6b099a645dd2ac5bd9bbc4.png";
import imgImage3 from "figma:asset/a1450f19020b63ad93583c9a1ea5048ad672013f.png";
import imgImage4 from "figma:asset/4221357f6fed182e7aebee45f63747799d3c02e3.png";
import imgImage5 from "figma:asset/7858ec86ee79c1d7d58f73a1940e96f4e302e573.png";

interface LandingPageProps {
  onUploadClick: (imageUrl?: string) => void;
}

export function LandingPage({ onUploadClick }: LandingPageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    // Upload Photo 버튼을 클릭했을 때는 이미지 없이 퍼즐 페이지로 이동
    onUploadClick();
  };

  const handleDragAndDropClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        // 이미지가 업로드되면 해당 이미지와 함께 퍼즐 페이지로 이동
        onUploadClick(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRecentPuzzleClick = (imageUrl: string) => {
    // Recent Puzzle 이미지를 클릭했을 때 해당 이미지로 퍼즐 페이지로 이동
    onUploadClick(imageUrl);
  };

  // Logo component
  const Logo = () => (
    <div className="relative shrink-0 size-[135px]">
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        style={{ backgroundImage: `url('${imgImage11}')` }}
      />
    </div>
  );

  // Camera icon
  const Camera = () => (
    <div className="overflow-clip relative shrink-0 size-[21.884px]">
      <div className="absolute bottom-[12.5%] left-[4.17%] right-[4.17%] top-[12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 17">
          <path d={svgPaths.p19483c00} fill="var(--fill-0, #0906A5)" />
        </svg>
      </div>
      <div className="absolute bottom-[29.17%] left-[33.33%] right-[33.33%] top-[37.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path d={svgPaths.p35ae9700} fill="var(--fill-0, #0906A5)" />
        </svg>
      </div>
    </div>
  );

  // Upload icon for drag&drop area
  const UploadIcon = () => (
    <div className="overflow-clip relative shrink-0 size-[36.473px]">
      <div className="absolute bottom-[8.3%] left-[8.25%] right-[8.25%] top-[58.3%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 13">
          <path d={svgPaths.p881f7b1} fill="var(--fill-0, #F709FF)" />
        </svg>
      </div>
      <div className="absolute bottom-[62.46%] left-[24.95%] right-[24.95%] top-[8.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
          <path d={svgPaths.p394bbe00} fill="var(--fill-0, #F709FF)" />
        </svg>
      </div>
      <div className="absolute bottom-[33.27%] left-[45.83%] right-[45.83%] top-[8.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 22">
          <path d={svgPaths.p13fc7500} fill="var(--fill-0, #F709FF)" />
        </svg>
      </div>
    </div>
  );

  // Upload icon for button
  const UploadButtonIcon = () => (
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-3 relative size-full transition-colors duration-300"
    >
      <div className="basis-0 box-border content-stretch flex flex-col gap-[15px] grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0 w-[389.761px]">
        
        {/* Header with Logo and Settings */}
        <div className="flex items-center justify-between w-full max-w-[343.761px]">
          <Logo />
          <SettingsMenu />
        </div>

        {/* Main Content */}
        <div className="bg-card relative rounded-[10.942px] shrink-0 w-full shadow-sm transition-colors duration-300">
          <div className="absolute border-border border-[0.912px] border-solid inset-0 pointer-events-none rounded-[10.942px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-[23px] py-6 relative w-full">
              <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-[343.761px]">
                
                {/* Header */}
                <div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0">
                    <Camera />
                    <div className="font-['Archivo:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-foreground text-[21.884px] text-left text-nowrap">
                      <p className="block leading-[29.179px] whitespace-pre">Create Your Puzzle</p>
                    </div>
                  </div>
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-muted-foreground text-[12.766px] text-left">
                    <p className="block leading-[18.237px]">
                      Upload a photo or capture a new one to turn into a puzzle!
                    </p>
                  </div>
                </div>

                {/* Upload Container */}
                <div 
                  className="bg-transparent relative rounded-[7.295px] shrink-0 w-full cursor-pointer hover:bg-accent/20 transition-colors duration-200"
                  onClick={handleDragAndDropClick}
                >
                  <div className="absolute border-[#f709ff] border-[1.824px] border-dashed inset-0 pointer-events-none rounded-[7.295px]" />
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[26px] py-[85px] relative w-full">
                      <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-start p-0 relative shrink-0 w-full">
                        <UploadIcon />
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-muted-foreground text-[16.413px] text-center">
                          <p className="block leading-[25.531px]">Drag & Drop Image or Click to Upload</p>
                        </div>
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-muted-foreground text-[12.766px] text-center">
                          <p className="block leading-[18.237px]">
                            Recommended: 600x600 pixels for best results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upload Button */}
                <motion.div
                  className="bg-[#0906a5] h-[36.473px] relative rounded-[18.237px] shrink-0 w-[161.836px] cursor-pointer mx-auto hover:bg-[#0705a0] transition-colors duration-200"
                  onClick={handleUploadButtonClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="h-[36.473px] overflow-clip relative w-[161.836px]">
                    <div
                      className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#ffffff] text-[12.766px] text-left text-nowrap"
                      style={{ top: "calc(50% - 10.03px)", left: "calc(50% - 30.091px)" }}
                    >
                      <p className="block leading-[20.06px] whitespace-pre">Upload Photo</p>
                    </div>
                    <UploadButtonIcon />
                  </div>
                </motion.div>

                {/* Recent Puzzles */}
                <div className="box-border content-stretch flex flex-col gap-[21px] items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="font-['Archivo:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-foreground text-[16.413px] text-left w-full">
                    <p className="block leading-[25.531px]">Recent Puzzles</p>
                  </div>
                  
                  {/* Recent Puzzles Container */}
                  <div className="bg-transparent h-[110.332px] relative shrink-0 w-full">
                    <div className="h-[110.332px] overflow-clip relative w-full">
                      {/* Line */}
                      <div className="absolute h-0 left-0 top-0 w-[343.761px]">
                        <div className="absolute bottom-[-0.46px] left-0 right-0 top-[-0.46px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 2">
                            <path d="M0 1H343.761" stroke="var(--stroke-0, #EBEBEA)" strokeWidth="0.911833" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Recent Puzzle Images */}
                      {[imgImage, imgImage1, imgImage2, imgImage3, imgImage4, imgImage5].map((image, index) => (
                        <motion.div
                          key={index}
                          className="absolute bg-transparent rounded-[7.295px] size-[87.536px] top-[15.5px] cursor-pointer hover:scale-105 transition-transform duration-200"
                          style={{ left: `${index * 98.48}px` }}
                          whileHover={{ y: -2 }}
                          onClick={() => handleRecentPuzzleClick(image)}
                        >
                          <div className="overflow-clip relative size-[87.536px]">
                            <div
                              className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left left-[0.91px] size-[85.712px] top-[0.91px]"
                              style={{ backgroundImage: `url('${image}')` }}
                            />
                          </div>
                          <div className="absolute border-border border-[0.912px] border-solid inset-0 pointer-events-none rounded-[7.295px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
    </motion.div>
  );
}