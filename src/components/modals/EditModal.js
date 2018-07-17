import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class editModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: '',
      newAuthor: '',
    }
  }

  handleTitleChange = (e) => {
    this.setState({newTitle: e.target.value});
  }

  handleAuthorChange = (e) => {
    this.setState({newAuthor: e.target.value});
  }

  handleEdit = () => {
    this.props.editBook(this.state.newTitle, this.state.newAuthor);
    this.setState({newTitle: '', newAuthor: ''});
  }

  render() {
    var labelStyle = {
      display: 'block',
      marginBottom: '1rem',
      fontWeight: 'normal'
    };
    return (
      this.props.selectedBook ?
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>Edit "{this.props.selectedBook.title}" book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label style={labelStyle}>Title:
            <input type="text" defaultValue={this.props.selectedBook.title}
                   onChange={this.handleTitleChange}/>
          </label>
          <label style={labelStyle}>Author:
            <input type="text" defaultValue={this.props.selectedBook.author}
                   onChange={this.handleAuthorChange}/></label>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleEdit}>Edit</Button>
          <Button onClick={this.props.handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal> : null
    );
  }
}

export default editModal;