import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    // If the input is empty, clear the suggestion
    if (inputText.trim() === '') {
      setSuggestion('');
      return;
    }

    // Split the input text into words and check each word
    const words = inputText.split(' ');
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }

    // If no misspelled word is found, clear the suggestion
    setSuggestion('');
  };

  return (
    <div>
        <h1>Spell Check and Auto Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows={6}
        cols={50}
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
