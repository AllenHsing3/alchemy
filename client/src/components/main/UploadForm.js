import React, { Fragment, useState } from 'react';
import {loadPhoto, upload} from '../../actions/media'
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


const UploadForm = ({upload}) => {
  const [photo, setPhoto] = useState(null);

  const handleOnChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    if (photo) {
      upload(photo)
    }

  };



  return (
    <Fragment>
      <Form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <Form.Group>
          <Form.Label>Choose photo to upload</Form.Label>
          <Form.Control type="file" name="photo" onChange={handleOnChange} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className={`${!photo ? 'disabled submit-btn' : 'submit-btn'}`}
          disabled={photo ? false : true}
        >
          Upload
        </Button>
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