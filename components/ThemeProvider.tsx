import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark'); // 디폴트는 다크모드
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 로컬스토리지에서 테마 설정 불러오기
    const savedTheme = localStorage.getItem('puzzle-theme') as Theme;
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // 테마가 변경될 때마다 HTML 클래스와 로컬스토리지 업데이트
      const root = document.documentElement;
      root.classList.remove('dark', 'light');
      root.classList.add(theme);
      localStorage.setItem('puzzle-theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme
  };

  // 마운트되기 전에는 기본 테마로 렌더링
  if (!mounted) {
    return (
      <ThemeContext.Provider value={value}>
        <div className="dark">{children}</div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}