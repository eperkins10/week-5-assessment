const express = require("express");
const cors = require("cors");
 
const app = express();
 
 
app.use(cors());
 
app.use(express.json()); // When we want to be able to accept JSON.
 
app.get("/api/compliment", (req, res) => {
 const compliments = ["Gee, you're a smart cookie!",
          "Cool shirt!",
          "Your Javascript skills are stellar.",
 ];
 
 // choose random compliment
 let randomIndex = Math.floor(Math.random() * compliments.length);
 let randomCompliment = compliments[randomIndex];
 
 res.status(200).send(randomCompliment);
 });
 
app.get("/api/fortune", (req, res) => {
 console.log("getting fortunes")
 const fortunes = ["Better ask twice than lose yourself once.", "Any decision you have to make tomorrow is a good decision.",
"Competence like yours is underrated.", "Do you know that the busiest person has the largest amount of time?",
"Don’t let your limitations overshadow your talents."];
 
let randomIndex = Math.floor(Math.random() * fortunes.length)
let randomFortune = fortunes[randomIndex]
 
res.status(200).send(randomFortune)
 
 
});
 
app.get("/api/insult", (req, res) => {
 const insults = ["You look so nice today!", "I feel bad for your mom",
"If I throw a stick, will you leave?", "I’ll never forget the first time we met. But I’ll keep trying.",
"You’re a true gift to the people in your life.", "Your smile makes me smile.", ];
 
let randomIndex = Math.floor(Math.random() * insults.length)
let randomInsult = insults[randomIndex]
 
res.status(200).send(randomInsult)
 
 
});

app.get("/api/motivation", (req, res) => {
  const motivationQuotes = ["“The secret of getting ahead is getting started.” – Mark Twain", "“It’s hard to beat a person who never gives up.” – Babe Ruth", 
"“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz", "“Everything you can imagine is real.”― Pablo Picasso", 
"“Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt"]
  
 let randomIndex = Math.floor(Math.random() * motivationQuotes.length)
 let randomQuote = motivationQuotes[randomIndex]
  
 res.status(200).send(randomQuote)
  
  
 });
 



app.get("/api/tryme", (req, res) => {
  const replies = ["eh, decent.", "ouchie", "was that supposed to be mean?", "that's all you got huh?", "you practiced that one too many times didn't you?"]
  let randomIndex = Math.floor(Math.random() * replies.length)
  let randomReply = replies[randomIndex]
  
  res.status(200).send(randomReply)
})



 
 
app.listen(4000, () => console.log("Server running on 4000"));

