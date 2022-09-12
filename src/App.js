import React from 'react';
import './style.css';
import { useEffect, useState, memo } from 'react';
export default function App() {
  const [text, setText] = useState(['adfs']);
  const [history, setHistory] = useState(['start']);
  const check = async () => {
    const res = await navigator.clipboard.readText();
    setText(res);
    console.log('check function called');
  };
  useEffect(() => {
    const interval = setInterval(check, 10);
    console.log('initial useeffect called');
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setHistory((current) => [...current, text]);
  }, [text]);

  return (
    <div>
      <h1> clipboard history app </h1>
      <div>
        {history
          ? history.map((Text, index) => (
              <p key={index}>
                {index} : {Text}
              </p>
            ))
          : 'copy text to start'}
      </div>
    </div>
  );
}
