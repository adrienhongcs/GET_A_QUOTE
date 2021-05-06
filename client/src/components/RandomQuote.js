import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Container
} from 'reactstrap'

import { connect } from 'react-redux'
import { getRandomQuote } from '../actions/quoteActions'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

class RandomQuote extends Component {
    componentDidMount() {
        this.props.getRandomQuote()
    }

    render() {
        const { randomQuote } = this.props.quote

        return(

            <Container>
                <Jumbotron>
                    {randomQuote.map(({_id, author, quote}) => (
                            <div>
                                <h1>"{quote}"</h1> 
                                <h4>- <i>{author}</i></h4>
                            </div>
                        ))}
                </Jumbotron>
                <Button
                    onClick={ this.props.getRandomQuote.bind(this) }
                >Get Another Random Quote</Button>
            </Container>

        )
    }
}

RandomQuote.propTypes = {
    getRandomQuote: PropTypes.func.isRequired,
    quote: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    quote: state.quote
})

export default connect(
    mapStateToProps,
    { getRandomQuote }
)(RandomQuote)