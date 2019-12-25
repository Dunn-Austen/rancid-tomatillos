import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MovieShowPage.css';
import { updateUser, updateLoggedInStatus } from '../actions/index';
import { updateRatings, fetchRatings } from '../apiCalls';

export const MovieShowPage = props => {
  const {
    id,
    title,
    backdrop_path,
    release_date,
    overview,
    average_rating,
    isLoggedIn
  } = props;

  const handleRatingsUpdates = event => {
    const { updateUser, user } = props;
    updateRatings(id, Number(event.target.value), user.id).then(data => {
      fetchRatings(user.id).then(ratingData => {
        const newRatings = { ...user, ratings: ratingData.ratings };
        updateUser(newRatings);
      });
    })
  };

  const findUserRating = id => {
    const userRatings = props.user.ratings.map(rating => rating.movie_id);
    if (userRatings.includes(id)) {
      return props.user.ratings.find(movie => movie.movie_id === id).rating;
    } else {
      return '...';
    }
  };

  return (
    <div className='movie-page'>
      <div className='inner__show--container'>
        <img className='backdrop' src={backdrop_path} alt={title} />
        <h1 className='movie__title--two'>{title}</h1>
        <p className='in-theaters'>In Theaters: {release_date}</p>
        <p className='overview'>{overview}</p>
        <p className='average__rating--two'>Average Rating: {Math.round( average_rating * 10 ) / 10}</p>
        {isLoggedIn && <div className='my-rating'>My Rating: {findUserRating(id)}</div>}
        {isLoggedIn &&
          <div className='rating-bar'>
            <div className='rating-scale'>
              <button
                className='rating-btn btn-one'
                value='1'
                onClick={event => handleRatingsUpdates(event)}>
                1
              </button>
              <button
                className='rating-btn btn-two'
                value='2'
                onClick={event => handleRatingsUpdates(event)}>
                2
              </button>
              <button
                className='rating-btn btn-three'
                value='3'
                onClick={event => handleRatingsUpdates(event)}>
                3
              </button>
              <button
                className='rating-btn btn-four'
                value='4'
                onClick={event => handleRatingsUpdates(event)}>
                4
              </button>
              <button
                className='rating-btn btn-five'
                value='5'
                onClick={event => handleRatingsUpdates(event)}>
                5
              </button>
              <button
                className='rating-btn btn-six'
                value='6'
                onClick={event => handleRatingsUpdates(event)}>
                6
              </button>
              <button
                className='rating-btn btn-seven'
                value='7'
                onClick={event => handleRatingsUpdates(event)}>
                7
              </button>
              <button
                className='rating-btn btn-eight'
                value='8'
                onClick={event => handleRatingsUpdates(event)}>
                8
              </button>
              <button
                className='rating-btn btn-nine'
                value='9'
                onClick={event => handleRatingsUpdates(event)}>
                9
              </button>
              <button
                className='rating-btn btn-ten'
                value='10'
                onClick={event => handleRatingsUpdates(event)}>
                10
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  allMovies: state.movies,
  isLoggedIn: state.isLoggedIn,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieShowPage);

MovieShowPage.propTypes = {
  allMovies: PropTypes.array,
  isLoggedIn: PropTypes.bool,
  user: PropTypes.object,
  updateUser: PropTypes.func
};
