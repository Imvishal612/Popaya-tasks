const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Amit", email: "amit@test.com" },
  { id: 2, name: "Riya", email: "riya@test.com" }
];

const notes = [
  { id: 1, title: "Note 1", content: "Content 1", userId: 1 },
  { id: 2, title: "Note 2", content: "Content 2", userId: 2 }
];


// Get all users
app.get("/users", (req, res) => {
  const allUsers = users;

  // Fixed wrong variable name (userList was not defined)
  res.send(allUsers);
});


// Get user by ID
app.get("/users/:id", (req, res) => {

  // Converted params to number because req.params.id is string
  const id = Number(req.params.id);

  const user = users.find(u => u.id === id);

  res.send(user);
});


// Utility function
function getUserById(id) {

  // Added return statement
  return users.find(u => u.id === id);
}


// Get total notes count
app.get("/notes/count", (req, res) => {

  // Fixed typo: lenght -> length
  const total = notes.length;

  res.send({ total });
});


// External API route
app.get("/external-data", async (req, res) => {

  // Added await for async call
  const data = await fetchExternalData();

  res.send(data);
});


// Get all notes
app.get("/notes", (req, res) => {

  // Fixed incorrect array comparison
  if (notes.length === 0) {
    console.log("No notes found");
  }

  res.send(notes);
});


// Generate random note ID
function generateNoteId() {
  return Math.floor(Math.random() * 1000);
}


// Fixed function call
const newId = generateNoteId();


// Create new note
app.post("/notes", (req, res) => {

  const { title, content, userId } = req.body;

  // Fixed validation logic
  if (!title || !content) {
    return res.send("Invalid input");
  }

  const newNote = {
    id: newId,
    title,
    content,
    userId
  };

  notes.push(newNote);

  res.send(newNote);
});


// Delete note
app.delete("/notes/:id", (req, res) => {

  // Converted ID to number
  const id = Number(req.params.id);

  const noteIndex = notes.findIndex(n => n.id === id);

  notes.splice(noteIndex, 1);

  res.send({ message: "Note deleted" });
});


// Update user
app.put("/users/:id", (req, res) => {

  const id = Number(req.params.id);

  const { name } = req.body;

  const user = users.find(u => u.id === id);

  // Fixed wrong variable name
  user.name = name;

  res.send(user);
});


// Get notes by user
app.get("/user-notes/:userId", (req, res) => {

  const userId = Number(req.params.userId);

  // Fixed assignment operator issue
  const userNotes = notes.filter(n => n.userId === userId);

  res.send(userNotes);
});


// Login route
app.post("/login", (req, res) => {

  const { email, password } = req.body;

  // Fixed logical condition
  if (email === "admin@test.com" && password === "123456") {

    res.send({ message: "Login successful" });

  } else {

    res.send({ message: "Invalid credentials" });
  }
});


// Profile route
app.get("/profile/:id", (req, res) => {

  const id = Number(req.params.id);

  // filter() returns array, find() returns single object
  const user = users.find(u => u.id === id);

  res.send(user.name);
});


// Sum route
app.post("/sum", (req, res) => {

  const { a, b } = req.body;

  const total = a + b;

  res.send({ total });
});

app.get("/", (req, res) => {
      res.send("API is running");
      });

// Server start
app.listen(3000, () => {

  // Fixed wrong port number in log
  console.log("Server running on port 3000");
});