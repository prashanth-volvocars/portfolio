import { useState, useEffect } from 'react';

interface SimpleTypewriterProps {
  text: string;
  delay?: number;
  className?: string;
}

export function SimpleTypewriter({ text, delay = 100, className = '' }: SimpleTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // Hide cursor after completion
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className="inline-block w-1 h-[1em] bg-foreground dark:bg-gray-100 ml-1 animate-pulse align-text-bottom"></span>
      )}
    </span>
  );
}