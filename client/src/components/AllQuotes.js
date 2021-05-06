import React, { Component } from 'react'
import {
    ListGroup,
    ListGroupItem,
    Button,
    Container
} from 'reactstrap'

import { connect } from 'react-redux'
import { getAllQuotes, deleteQuote } from '../actions/quoteActions'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment';


class AllQuotes extends Component {
    componentDidMount() {
        this.props.getAllQuotes()
    }

    onDeleteClick = (id) => {
        this.props.deleteQuote(id)
    }

    render() {
        const { quotes } = this.props.quote
        return(

            <Container>
                <ListGroup>
                    {quotes.map(({_id, author, quote}) => (
                        <ListGroupItem>
                            <p>"{quote}"</p> 
                            <p>- <i>{author}</i></p>
                            <Button
                                color="danger"
                                size="sm"
                                onClick={this.onDeleteClick.bind(this,_id)}
                            >&times;</Button>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>

        )
    }
}

AllQuotes.propTypes = {
    getAllQuotes: PropTypes.func.isRequired,
    quote: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    quote: state.quote
})

export default connect(
    mapStateToProps,
    { getAllQuotes, deleteQuote }
)(AllQuotes)