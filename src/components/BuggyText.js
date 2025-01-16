import React, { useEffect, useState } from 'react';

const BuggyText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = 'ABCDE!@#$%&*VWXYZabcdefghijklmn!@#$%&*wxyz0123456789';

  const randomCharacter = () => characters.charAt(Math.floor(Math.random() * characters.length));

  const animateText = () => {
    let animatedText = '';
    for (let i = 0; i < text.length; i++) {
      if (Math.random() < 0.05) { // 10% chance of a character being 'bugged'
        animatedText += randomCharacter();
      } else {
        animatedText += text.charAt(i);
      }
    }
    setDisplayText(animatedText);
  };

  useEffect(() => {
    const interval = setInterval(animateText, 100); // Change the text every 100 milliseconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [text]);

  return (

      <span style={styles.text}>{displayText}</span>

  );
};

const styles = {
  textContainer: {
    //display: 'flex',
    //justifyContent: 'center',
    //alignItems: 'center',
    //height: '100vh',
    margin: 0,
    //backgroundColor: 'black',
    //color: 'white',
    //fontFamily: 'monospace',
    //fontSize: '2rem',
  },
  text: {
    //display: 'inline-block',
  },
};

export default BuggyText;
