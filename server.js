const express = require('express')
const mongoose = require('mongoose')

const quotes = require('./routes/api/quotes')

const app = express()

// Middleware to parse body
app.use(express.json())

// DB config
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

// Use routes
app.use('/api/quotes', quotes)

// Serve static assets if in production
if (process.env.NODE_ENV == 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))