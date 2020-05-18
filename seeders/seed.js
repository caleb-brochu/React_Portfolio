const mongoose = require("mongoose");
const db = require("../models/contact")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio-contacts", {
  useNewUrlParser: true
});

const contactseed = [
  {
    Name: "Ethan Brochu",
    Email: "ethan.brochu@gmail.com",
    Message: "Hi I'm Ethan!",
    updated: new Date().setDate(new Date().getDate()-10),
  }
];

db.deleteMany({})
  .then(() => db.collection.insertMany(contactseed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
