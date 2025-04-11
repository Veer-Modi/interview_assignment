const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "john", email: "john@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
