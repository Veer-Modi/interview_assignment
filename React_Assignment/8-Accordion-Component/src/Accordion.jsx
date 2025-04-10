import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => toggleIndex(index)} style={{ cursor: 'pointer' }}>
            {item.question}
          </h3>
          {activeIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
