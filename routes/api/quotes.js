const express = require('express')
const router = express.Router()

// Quote model
const Quote = require('../../models/Quote')

/**
 * @route GET api/quotes
 * @desc Get a random Quote
 * @access Public
 */
 router.get('/', (req,res) => {
    Quote.aggregate([{$sample:{size:1}}])
        .then(quote => res.json(quote))
})

/**
 * @route   GET api/quotes/all
 * @desc    Get all Quotes
 * @access  Public
 */
 router.get('/all', (req,res) => {
    Quote.find()
        .sort({ author: 1 })
        .then(quotes => res.json(quotes))
});

/**
 * @route POST api/quotes
 * @desc Create a quote
 * @access Public
 */
router.post('/', (req,res) => {
    const newQuote = new Quote({
        author: req.body.author,
        quote: req.body.quote
    })

    newQuote.save()
        .then( quote => res.json(quote))
})

/**
 * @route DELETE api/quotes/all/:id
 * @desc Delete a Quote
 * @access Public
 */
router.delete('/all/:id', (req,res) => {
    Quote.findById(req.params.id)
        .then(quote => quote.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router