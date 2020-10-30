import React, { Fragment, useState } from 'react';
import {loadPhoto, upload} from '../../actions/media'
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';


const UploadForm = ({upload}) => {
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('')

  function messageReset(){
    setMessage('')
  }
  const handleOnChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    const regex = RegExp(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)
    if(photo.size > 5000000){
      setMessage('File is too large! Try something smaller')
      setTimeout(messageReset,3000)
    } else if(!regex.test(photo.name)){
      setMessage('File is not an image...')
    }else if(photo) {
      upload(photo)
      setMessage('Uploading...')
    }
  };

  


  return (
    <Fragment>
      <h4 className='text'>{message}</h4>
      <Form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form text"
      >
        <Form.Group>
          <Form.Control type="file" name="photo" onChange={handleOnChange} />
        </Form.Group>
        <button
          variant="primary"
          type="submit"
          className='btn btn-primary'
          disabled={photo ? false : true}
        >
          Upload
        </button>
      </Form>
    </Fragment>
  );
};

UploadForm.propTypes = {
  upload: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps, {upload})(UploadForm);

// {/* <form
// onSubmit={handleFormSubmit}
// method="post"
// encType="multipart/form-data"
// >
//   {/* <Form.Control type="file" name="photo" onChange={handleOnChange} /> */}
//   <input type='file'         encType="multipart/form-data" />
// <button
//   variant="primary"
//   type="submit"
//   className='btn'
// >
//   Upload
// </button>
// </form> */}