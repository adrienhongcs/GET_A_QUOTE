import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Container
} from 'reactstrap'
import { connect } from 'react-redux'
import { addQuote } from '../actions/quoteActions'

class QuoteModal extends Component {
    state = {
        modal: false,
        author: '',
        quote: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newQuote = {
            author: this.state.author,
            date: this.state.date,
            quote: this.state.quote
        }

        // Add quote via addQuote action
        this.props.addQuote(newQuote)

        this.state.author = ''
        this.state.quote = ''

        // Close Modal
        this.toggle()
    }

    render() {
        return(
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={ this.toggle }
                >Add A New Quote</Button>

                <Modal
                    isOpen={ this.state.modal }
                    toggle={ this.toggle }
                >
                    <ModalHeader toggle={ this.toggle }>Add A New Quote</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={ this.onSubmit }>
                            <FormGroup>
                                <Label for="quote">Quote</Label>
                                <Input
                                    type="text"
                                    name="quote"
                                    id="quote"
                                    placeholder="Add Quote"
                                    onChange={ this.onChange }
                                />
                                <Label for="quote">Author</Label>
                                <Input
                                    type="text"
                                    name="author"
                                    id="author"
                                    placeholder="Add Author"
                                    onChange={ this.onChange }
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem'}}
                                    block
                                >Add</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    quote: state.quote
})

export default connect(mapStateToProps, { addQuote })(QuoteModal)