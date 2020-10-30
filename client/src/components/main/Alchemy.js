import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UploadForm from './UploadForm';
import Photo from './Photo'
// import UploadForm from './UploadForm'

export const Alchemy = ({media}) => {
    const {photo, displayUploadForm} = media
  return (
    <div className="container">
      <div className="container-inner">
        {displayUploadForm ? <UploadForm/> : <Photo/>}
      </div>
    </div>
  );
};

Alchemy.protoTypes = {
    media: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    media: state.media
})
export default connect(mapStateToProps, {})(Alchemy);
