import './App.css';
import Toggler from './components/Toggler';
import { useEffect, useState } from 'react';
import Cv from './data/Cv';
import TypingEffect from './components/TypingEffect';

const App: React.FC = () => {
  const linkColor = 'dark:text-gruvbox-dark-yellow text-gruvbox-light-yellow hover:text-gruvbox-light-blue dark:hover:text-gruvbox-dark-blue';
  const linkTransitions = 'transition-colors duration-150 ease-linear';

  const [typingComplete, setTypingComplete] = useState(false);
  const [showText, setShowText] = useState(false);
  const [helpComplete, setHelpComplete] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleTypingComplete = () => {
    console.log('Typing complete');
    setTypingComplete(true);
  };

  const handleHelpComplete = () => {
    console.log('Help typing complete');
    setHelpComplete(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (typingComplete) {
      timer = setTimeout(() => setShowText(true), 250);
    }
    return () => clearTimeout(timer);
  }, [typingComplete]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (helpComplete) {
      timer = setTimeout(() => setShowHelp(true), 250);
    }
    return () => clearTimeout(timer);
  }, [helpComplete]);

  return (
    <div className='ml-10 mr-10 text-sm text-left md:text-2xl sm:mr-1 dark:text-gruvbox-dark-fg0 text-gruvbox-light-fg0 transition-colors duration-1000 ease-linear'>
      <Cv />
      <section className='mt-10'>
        <header className='mt-10'>
          <h1 className='font-bold gap-3'>
            <span className='dark:text-gruvbox-dark-red text-gruvbox-light-red transition-colors duration-1000 ease-linear'>
              arthur@welcome
            </span>
            <span className='dark:text-gruvbox-dark-fg0 text-gruvbox-light-fg0 transition-colors duration-1000 ease-linear'> ~ </span>
            <TypingEffect text="head -n 2 socials.txt" speed={75} onComplete={handleTypingComplete} />
          </h1>
        </header>
        <ul className={`mt-5 ${showText ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`}>
          <li>
            <a
              href='https://github.com/arthurvalls'
              target='_blank'
              rel='noopener noreferrer'
              className={`${linkColor} ${linkTransitions}`}>
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/arthurvalls'
              target='_blank'
              rel='noopener noreferrer'
              className={`${linkColor} ${linkTransitions}`}>
              LinkedIn
            </a>
          </li>
        </ul>
      </section>

      <section className='mt-10'>
        <header className='mt-10'>
          <h1 className='font-bold'>
            <span className='dark:text-gruvbox-dark-red text-gruvbox-light-red transition-colors duration-1000 ease-linear'>
              arthur@welcome
            </span>
            <span className='dark:text-gruvbox-dark-fg0 text-gruvbox-light-fg0 transition-colors duration-1000 ease-linear'> ~ </span>
            <TypingEffect text="cat help.txt" speed={150} onComplete={handleHelpComplete} />
          </h1>
          <p className={`mt-3 max-w-screen-md ${showHelp ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`}>
            You can change the website's color mode by typing <br /><b className='font-black'>./dark</b> or <b className='font-black'>./light</b> in the prompt below.
          </p>
        </header>
      </section>

      <header className='mt-5'>
        <h1 className='flex items-center mb-10 font-bold gap-3'>
          <span className='dark:text-gruvbox-dark-red text-gruvbox-light-red transition-colors duration-1000 ease-linear'>
            arthur@welcome
          </span>
          <span className='mr-2 dark:text-gruvbox-dark-fg0 text-gruvbox-light-fg0 transition-colors duration-1000 ease-linear'>
            ~
          </span>
          <Toggler />
        </h1>
      </header>
    </div>
  );
};

export default App;
