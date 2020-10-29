import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import Spinner from '../layout/Spinner';
import {loadPhoto, refresh} from '../../actions/media'


const Photo = ({ isLoading, loadPhoto, photo, refresh}) => {
  useEffect(() => {
    loadPhoto()
  }, [])

  const restart = () => {
    refresh()
  }
  return isLoading ? <Spinner />
   : (<div className='container-photo'>
      <img
        className='photo'
        variant="top"
        src={photo}
        alt="Photo"
      />
       <button onClick={e => restart()} className="btn btn-primary">Again</button>

    </div>
  );
};

Photo.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadPhoto: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
  refresh: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  photo: state.media.photo,
  isLoading: state.media.isLoading,
});

export default connect(mapStateToProps, {loadPhoto, refresh})(Photo);
