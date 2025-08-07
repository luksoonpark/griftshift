import { useCallback, useRef } from 'react';

export function useLegoSound() {
  const audioContextRef = useRef<AudioContext | null>(null);

  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playLegoClickSound = useCallback(() => {
    try {
      const audioContext = initAudioContext();
      
      // 레고 클릭 소리를 시뮬레이션하는 사운드 생성
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filterNode = audioContext.createBiquadFilter();

      // 첫 번째 오실레이터 (높은 주파수 - 클릭 소리)
      oscillator1.type = 'square';
      oscillator1.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator1.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

      // 두 번째 오실레이터 (낮은 주파수 - 클릭의 깊이감)
      oscillator2.type = 'triangle';
      oscillator2.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator2.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.05);

      // 필터 설정 (고주파 제거하여 더 자연스러운 소리)
      filterNode.type = 'lowpass';
      filterNode.frequency.setValueAtTime(1000, audioContext.currentTime);

      // 게인 설정 (볼륨 제어) - 올바른 메서드 사용
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);

      // 연결
      oscillator1.connect(filterNode);
      oscillator2.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // 재생
      oscillator1.start(audioContext.currentTime);
      oscillator2.start(audioContext.currentTime);
      
      // 정리
      oscillator1.stop(audioContext.currentTime + 0.15);
      oscillator2.stop(audioContext.currentTime + 0.15);

    } catch (error) {
      console.warn('오디오 재생 실패:', error);
    }
  }, [initAudioContext]);

  const playSuccessSound = useCallback(() => {
    try {
      const audioContext = initAudioContext();
      
      // 퍼즐 완료 시 승리 사운드
      const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
      let currentTime = audioContext.currentTime;

      frequencies.forEach((freq, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, currentTime);
        
        // 올바른 메서드 사용
        gain.gain.setValueAtTime(0, currentTime);
        gain.gain.linearRampToValueAtTime(0.2, currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, currentTime + 0.3);
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.start(currentTime);
        osc.stop(currentTime + 0.3);
        
        currentTime += 0.2;
      });

    } catch (error) {
      console.warn('성공 사운드 재생 실패:', error);
    }
  }, [initAudioContext]);

  return {
    playLegoClickSound,
    playSuccessSound
  };
}