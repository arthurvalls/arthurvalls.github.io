import { useState, useEffect } from 'react';
import TypingEffect from '../components/TypingEffect';

const linkColor = 'dark:text-gruvbox-dark-yellow text-gruvbox-light-yellow hover:text-gruvbox-light-blue dark:hover:text-gruvbox-dark-blue';
const linkTransitions = 'transition-colors duration-150 ease-linear';

const experience = (
  <>
    I have experience with <b>Docker</b>, <b>Python</b>, <b>C++</b>, and <b>MySQL</b>, with a focus on <b>computer vision</b> and <b>machine learning</b>. I’ve also worked with the servers team at UFRJ’s Institute of Computing and am very comfortable with <b>Linux</b> and <b>Git</b>.
  </>
);

const interests = (
  <>
    I’m always exploring new languages and technologies like <b>TypeScript</b>, <b>Java</b>, <b>Rust</b>, and <b>Julia</b>. My passion lies in <b>programming</b>, <b>automating daily tasks</b>, and diving into <b>machine learning</b>, <b>computational theory</b>, and <b>optimization</b>. Right now, I’m researching <b>non-linear optimization with metaheuristics</b>.
  </>
);

const connection = (
  <>
    Feel free to connect if you’re interested in collaborating or chatting about <b>tech</b>!
  </>
);

const Cv = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  useEffect(() => {
    if (typingComplete) {
      const timer = setTimeout(() => setShowText(true), 250);       return () => clearTimeout(timer);
    }
  }, [typingComplete]);

  return (
    <div className='text-sm text-left md:text-2xl sm:mr-1 dark:text-gruvbox-dark-fg0 text-gruvbox-light-fg0 transition-colors duration-1000 ease-linear'>
      <header className='mt-10'>
        <h1 className='font-bold'>
          <span className='dark:text-gruvbox-dark-red text-gruvbox-light-red transition-colors duration-1000 ease-linear'>
            arthur@welcome
          </span>
          <span className='dark:text-gruvbox-dark-fg0 text-gruvbox-light-fg0 transition-colors duration-1000 ease-linear'>
            {' ~ '}
          </span>
          <TypingEffect text="./hello" speed={100} onComplete={handleTypingComplete} />
        </h1>
      </header>

      <section className={`mt-5 max-w-screen-md ${showText ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`}>
        <p>
          Hey there! I’m a developer from <b>Rio de Janeiro</b>, currently working at{' '}
          <a
            href='https://www.linkedin.com/company/supersim/'
            target='_blank'
            rel='noopener noreferrer'
            className={`${linkColor} ${linkTransitions}`}
          >
            <span>@supersim</span>
          </a>
          {' and studying computer science at UFRJ.'}
        </p>

        <p className='mt-3'>
          {experience}
        </p>

        <p className='mt-3'>
          {interests}
        </p>

        <p className='mt-3'>
          {connection}
        </p>
      </section>
    </div>
  );
};

export default Cv;
