import React, { useState } from 'react';

const LiveSearch = () => {
  const [query, setQuery] = useState('');
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace'];

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search names..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LiveSearch;
