import React, { useState } from 'react';

const CharacterCount = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea
        rows="5"
        cols="30"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
};

export default CharacterCount;
