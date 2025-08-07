import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './components/ThemeProvider';
import { LandingPage } from './components/LandingPage';
import { PuzzleGame } from './components/PuzzleGame';

type Page = 'landing' | 'puzzle';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [uploadedImage, setUploadedImage] = useState<string>('');

  const handleUploadClick = (imageUrl?: string) => {
    if (imageUrl) {
      setUploadedImage(imageUrl);
    }
    setCurrentPage('puzzle');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    // 랜딩페이지로 돌아갈 때 이미지 상태는 유지 (선택사항)
  };

  const handleNewImageSelected = () => {
    // 새 이미지가 선택되면 기존 이미지 상태 초기화
    setUploadedImage('');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background flex items-center justify-center p-4 transition-colors duration-300">
        <div className="w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {currentPage === 'landing' ? (
              <motion.div
                key="landing"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <LandingPage onUploadClick={handleUploadClick} />
              </motion.div>
            ) : (
              <motion.div
                key="puzzle"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <PuzzleGame 
                  onBackToLanding={handleBackToLanding} 
                  initialImage={uploadedImage}
                  onNewImageSelected={handleNewImageSelected}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}