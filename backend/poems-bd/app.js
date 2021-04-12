const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002;
const cors = require('cors')
const router = require('./routes')

const corsOptions = {
  origin: "https://apl-by.github.io",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions))
app.use(express.json())
app.use('/', router)


app.listen(PORT, _ => {
  console.log(`listening to ${PORT}`)
})
