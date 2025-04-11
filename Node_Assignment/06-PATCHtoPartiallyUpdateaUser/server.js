const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' }
];

app.patch('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send('User not found');
  Object.assign(user, req.body);
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
