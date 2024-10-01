import express from 'express'
import 'dotenv/config'

const app = express();;
const port = process.env.PORT || 3000

const jokes = [
    {
      id: 1,
      title: "Why don't skeletons fight each other?",
      content: "Because they don't have the guts."
    },
    {
      id: 2,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field."
    },
    {
      id: 3,
      title: "Why don't some fish play basketball?",
      content: "Because they're afraid of the net."
    },
    {
      id: 4,
      title: "Why did the math book look sad?",
      content: "Because it had too many problems."
    },
    {
      id: 5,
      title: "What do you call fake spaghetti?",
      content: "An impasta."
    },
    {
      id: 6,
      title: "Why can't you give Elsa a balloon?",
      content: "Because she will let it go."
    },
    {
      id: 7,
      title: "How do you make holy water?",
      content: "You boil the hell out of it."
    },
    {
      id: 8,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired."
    },
    {
      id: 9,
      title: "What do you call cheese that isn't yours?",
      content: "Nacho cheese."
    },
    {
      id: 10,
      title: "Why did the golfer bring two pairs of pants?",
      content: "In case he got a hole in one."
    }
  ];

app.get('/api/jokes',(req, res) =>{
    res.json(jokes);
})

app.listen(port, (req, res) =>{
    console.log(`click http://localhost:${port}`)
})