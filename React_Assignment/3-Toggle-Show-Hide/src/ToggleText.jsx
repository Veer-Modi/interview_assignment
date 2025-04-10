import React, { useState } from 'react';

const ToggleText = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Text
      </button>
      {visible && <p>Hello World</p>}
    </div>
  );
};

export default ToggleText;
