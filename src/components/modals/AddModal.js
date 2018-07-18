import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class addModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBook: {},
      newTitle: '',
      newAuthor: '',
      newDate: '',
      newImage: ''
    }
  }

  handleTitleChange = (e) => {
    this.setState({newTitle: e.target.value});
  }

  handleAuthorChange = (e) => {
    this.setState({newAuthor: e.target.value});
  }

  handleDateChange = (e) => {
    this.setState({newDate: e.target.value});
  }

  handleImageChange = (e) => {
    this.setState({newImage: e.target.value});
  }

  handleAdd = () => {
    const newBook = {
      id: Math.floor((Math.random() * 1000) + 1),
      title: this.state.newTitle,
      author: this.state.newAuthor,
      date: this.state.newDate,
      img: this.state.newImage
    }
    this.setState({newBook: newBook});
    this.props.addBook({...newBook});
    this.setState({newBook: null, newTitle: null, newAuthor: null, newDate: null, newImage: null});
  }

  render() {
    var labelStyle = {
      display: 'block',
      marginBottom: '1rem',
      fontWeight: 'normal'
    };
    return (
        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title>Add new book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label style={labelStyle}>Title:
              <input type="text" onChange={this.handleTitleChange}/>
            </label>
            <label style={labelStyle}>Author:
              <input type="text" onChange={this.handleAuthorChange}/>
            </label>
            <label style={labelStyle}>Date:
              <input type="text" onChange={this.handleDateChange}/>
            </label>
            <label style={labelStyle}>Image:
              <input type="text" onChange={this.handleImageChange}/>
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleAdd}>Add</Button>
            <Button onClick={this.props.handleClose}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default addModal;