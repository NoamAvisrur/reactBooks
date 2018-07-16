import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class myModal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>Are you sure you want to delete this book?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={this.props.deleteBook}>Yes</Button>
          <Button onClick={this.props.handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

export default myModal;