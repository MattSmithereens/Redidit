import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { v4 } from "uuid";
import './App.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
      backgroundColor: 'white',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,

  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
  },
});

function PostForm(props) {
  let _post = null;

  function handlePostSubmission(event) {
  		event.preventDefault();
  		props.onNewPostCreation({
        post: _post.value,
        time: makeTime(),
        id: v4()
  	});
    _post.value= "";
  }

    function makeTime() {
      const time = Date();
      return time;
    }

    return (
      <div className="PostForm">
      <form onSubmit={handlePostSubmission}>
      <input
        id="post"
        label="Say Something!"
        placeholder="Post"
        margin="normal"
        ref={input => {
            _post = input;
          }}
      />
      <br/>
      <Button type="submit" variant="contained" color="primary">
        Primary
      </Button>
      </form>
      </div>
    );

}

PostForm.propTypes = {
	onNewPostCreation: PropTypes.func
};


export default PostForm;
