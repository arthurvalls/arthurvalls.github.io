
import { useState, useEffect } from 'react';

const Toggler = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(mode);
    localStorage.setItem('mode', mode);
  }, [mode]);

  const handleToggleCommand = (event) => {
    if (event.key === 'Enter') {
      const command = event.target.value.trim();
      if (command === './toggle-dark') {
        setMode('dark');
      } else if (command === './toggle-light') {
        setMode('light');
      }
      event.target.value = '';
    }
  };
  return (
    <div>
      <input
        placeholder='./toggle-dark'
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
