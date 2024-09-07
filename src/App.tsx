import './App.css';
import Toggler from './components/Toggler';
import React from 'react';
import Cv from './data/Cv';

const App: React.FC = () => {
  const linkColor = 'dark:text-gruvbox-dark-yellow text-gruvbox-light-yellow hover:text-gruvbox-light-blue dark:hover:text-gruvbox-dark-blue';
  const linkTransitions = ' transition-colors duration-150 ease-linear';

  return (
    <div className='ml-10 mr-10 text-sm text-left md:text-2xl sm:mr-1 dark:text-gruvbox-dark-fg0 text-gruvbox-light-fg0 transition-colors duration-1000 ease-linear '>
      <Cv />
      <section className='mt-10'>
        <header className='mt-10'>
          <h1 className='font-bold gap-3'>
            <span className='dark:text-gruvbox-dark-red text-gruvbox-light-red transition-colors duration-1000 ease-linear'>
              arthur@welcome
            </span>
            <span className='dark:text-gruvbox-dark-fg0 text-gruvbox-light-fg0 transition-colors duration-1000 ease-linear'> ~ </span>
            head -n 2 socials.txt
          </h1>
        </header>
        <ul className='mt-3 list-disc list-inside'>
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
            cat help.txt
          </h1>

          <p className='mt-3 max-w-screen-md'>
            You can change the website's color mode by typing <br></br><b className='font-black'>./dark</b> or <b className='font-black'>./light</b> in the prompt below.
          </p>
        </header>
      </section>

      <br />

      <header className='mt-5'>
        <h1 className='flex items-center mb-10 font-bold gap-3'>
          <span className='dark:text-gruvbox-dark-red text-gruvbox-light-red transition-colors duration-1000 ease-linear'>
            arthur@welcome </span>
          <span className='dark:text-gruvbox-dark-fg0 text-gruvbox-light-fg0 transition-colors duration-1000 ease-linear mr-2px'> ~ </span>
          <Toggler />
        </h1>
      </header>
    </div >
  );
};

export default App;
