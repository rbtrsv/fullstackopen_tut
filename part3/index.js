const express = require("express");
const morgan = require('morgan');
const cors = require("cors");

const Person = require("./models/person")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('build'))

morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.get("/api/persons", (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons);
  });
});

app.get("/api/persons/:id", (req, res) => {
  Person.findById(req.params.id).then(person => {
    if (person) {
      res.json(person);
    } else {
      res.status(404).send('Person not found');
    }
  });
});

app.get("/info", (req, res) => {
  Person.countDocuments({}).then(count => {
    const date = new Date();
    res.send(`
      <p>Phonebook has info for ${count} people</p>
      <p>${date}</p>
    `);
  });
});

app.delete("/api/persons/:id", (req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(error => res.status(400).send(error.message));
});

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ error: 'name or number is missing' });
  }

  const person = new Person({ name, number });

  person.save()
    .then(savedPerson => {
      res.json(savedPerson);
    })
    .catch(error => res.status(400).send(error.message));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
