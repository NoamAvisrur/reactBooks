import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class editModal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
          <label style={labelStyle}>Title: <input type="text" defaultValue={this.props.selectedBook.title}/></label>
          <label style={labelStyle}>Author: <input type="text" defaultValue={this.props.selectedBook.author}/></label>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.deleteBook}>Edit</Button>
          <Button onClick={this.props.handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal> : null
    );
  }

}

export default editModal;