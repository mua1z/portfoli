import React, { useState, useEffect } from 'react';

const TextChange = () => {
  const texts = React.useMemo(() => ["Hey There, I'm Obsa Amin", "Welcome to my Portfolio Website", "Let's build something great!"], []);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[textIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length); // go to next text
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, speed, texts]);

  return (
    <div className='text-white text-xl md:text-3xl transition ease duration-300'>
      {currentText}
      <span className="blinking-cursor">|</span>
    </div>
  );
};

export default TextChange;
