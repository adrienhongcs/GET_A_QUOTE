const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema ({
    author: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    }
})

module.exports = Quote = mongoose.model('quote', QuoteSchema)