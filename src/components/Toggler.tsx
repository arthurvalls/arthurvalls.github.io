import { useState, useEffect, useRef } from 'react';

const Toggler = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(mode);
    localStorage.setItem('mode', mode);

    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, [mode]);

  const handleToggleCommand = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement;
      const command = target.value.trim();
      if (command === './dark') {
        setMode('dark');
      } else if (command === './light') {
        setMode('light');
      }
      target.value = '';
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onKeyDown={handleToggleCommand}
        className={`p-2 ${mode === 'dark' ? 'text-gruvbox-light-fg bg-gruvbox-dark-bg caret-gruvbox-light-fg animate-blink' : 'text-gruvbox-dark-fg bg-gruvbox-light-bg caret-gruvbox-dark-fg'}`}
        style={{
          width: 300,
          height: 40,
          border: 'none',
          background: 'transparent',
          color: 'inherit',
          outline: 'none',
        }}
      />
    </div>
  );
};
export default Toggler;
