import { useEffect, useState } from 'react';

const TITLES = ['Backend Developer', 'Software Engineer'];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const DELAY_AFTER_TYPING = 1200;
const DELAY_AFTER_DELETING = 400;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const fullText = TITLES[index];

    if (!isDeleting && displayed.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && displayed.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPING);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length - 1));
      }, DELETING_SPEED);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % TITLES.length);
      }, DELAY_AFTER_DELETING);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-center py-12">
      {/* <img src={avatar} alt="Leelamaya Shatapathy" className="w-32 h-32 rounded-full border-4 border-accent shadow-lg mb-6 bg-white" /> */}
      <h1 className="text-4xl md:text-6xl font-heading font-bold text-accent-dark mb-2 drop-shadow">Leelamaya Shatapathy</h1>
      <h2 className="text-lg md:text-2xl font-semibold mb-4 text-accent min-h-[2.5rem] font-heading">
        {displayed}
        <span className="border-r-2 border-accent animate-pulse ml-1">&nbsp;</span>
      </h2>
      <p className="max-w-xl text-gray-700 mb-6 mx-auto text-lg">
        Experienced backend developer specializing in Python, Django, and REST APIs. Passionate about building scalable, reliable systems and delivering clean, maintainable code.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="/src/assets/leelamaya shatapathy_resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 md:px-6 md:py-2 bg-accent text-white rounded shadow hover:bg-accent-dark transition-all duration-200 font-semibold text-base md:text-lg scale-100 hover:scale-105">View Resume</a>
        <a href="/src/assets/leelamaya shatapathy_resume.pdf" download className="px-4 py-1.5 md:px-6 md:py-2 bg-white border-2 border-accent text-accent rounded shadow hover:bg-accent hover:text-white transition-all duration-200 font-semibold text-base md:text-lg scale-100 hover:scale-105">Download Resume</a>
      </div>
    </section>
  );
};

export default Hero; 