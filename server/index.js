const express = require("express");
const cors = require("cors");

const app = express();

// const firstName = document.querySelector("#firstName")
// const lastName = document.querySelector("#lastName")
// const hobby = document.querySelector("#hobby")
// const goal = document.querySelector("#goal")

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.



app.get("/api/person/", (req, res) => {
  const {firstName, lastName, hobby, goal} = req.body;
  const phrase = `What's up ${firstName} ${lastName}?? You're the best at ${hobby} you will for sure ${goal}!!`

  res.status(200).send(phrase)
});

app.get("/api/compliment/", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune.", (req, res) => {
  const fortunes = [
    "A dubious friend may be an enemy in camoflauge",
    "It is better to deal with problems before they arise",
    "It is honorable to stand up for what is right, however unpopular is seems",
    "New ideas could be profitable",
    "No on can walk backwards in the future"
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune);
});

app.get("/api/jarjar/", (req, res) => {
  const jarjarQuote = [
   "Obi? Obi! Mesa So Smilen To Seein Yousa! - Jar-Jar Binks"
  ];

  res.status(200).send(jarjarQuote);
});

app.get("/api/batman/", (req, res) => {
  const batmanQuote = [
   "It's not who I am underneath, but what I do that defines me. - Bruce Wayne"
  ];

  res.status(200).send(batmanQuote);
});

app.get("/api/trump/", (req, res) => {
  const trumpQuote = [
   "Nobody has better respect for intelligence than Donald Trump - Donald Trump"
  ];

  res.status(200).send(trumpQuote);
});


app.listen(4000, () => console.log("Server running on 4000"));
