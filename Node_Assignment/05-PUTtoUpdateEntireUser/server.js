const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

app.put('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).send('User not found');
  users[index] = { ...req.body, id: parseInt(req.params.id) };
  res.json(users[index]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
