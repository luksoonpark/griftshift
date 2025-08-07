import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Sun, Moon, Check } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Settings Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-card hover:bg-accent transition-colors duration-200 border border-border shadow-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Settings className="w-5 h-5 text-foreground" />
      </motion.button>

      {/* Settings Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden"
            >
              <div className="p-3 border-b border-border">
                <h3 className="font-semibold text-foreground">Settings</h3>
                <p className="text-sm text-muted-foreground">Customize your experience</p>
              </div>
              
              <div className="p-2">
                <div className="mb-2">
                  <p className="text-sm font-medium text-foreground px-3 py-2">Theme</p>
                </div>
                
                {/* Dark Mode Option */}
                <motion.button
                  onClick={() => handleThemeChange('dark')}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200"
                  whileHover={{ x: 2 }}
                >
                  <Moon className="w-4 h-4 text-muted-foreground" />
                  <span className="flex-1 text-left text-foreground">Dark Mode</span>
                  {theme === 'dark' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Check className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </motion.button>
                
                {/* Light Mode Option */}
                <motion.button
                  onClick={() => handleThemeChange('light')}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200"
                  whileHover={{ x: 2 }}
                >
                  <Sun className="w-4 h-4 text-muted-foreground" />
                  <span className="flex-1 text-left text-foreground">Light Mode</span>
                  {theme === 'light' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Check className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}