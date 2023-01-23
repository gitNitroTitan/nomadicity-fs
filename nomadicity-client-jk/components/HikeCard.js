/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { deleteHike } from '../api/hikesData';

function HikeCard({ hikeObj, onUpdate }) {
  const deleteThisHike = () => {
    if (window.confirm(`Delete ${hikeObj.name}?`)) {
      deleteHike(hikeObj?.id).then(() => onUpdate());
    }
  };
  return (
    <div
      className="hike-card"
    >
      <div className="columnOne">
        <img src={hikeObj.url} className="card-img-top" alt={hikeObj.url} />
      </div>
      <div className="columnTwo">
        <div
          className="card-title"
        >
          <h5><span className="bold-text">{hikeObj.name}</span></h5>
        </div>
        <div className="date-created">
          {hikeObj.date}
        </div>
        <div
          className="card-body"
          style={{
            height: '50px',
          }}
        >
          <h6>{hikeObj.description}</h6>
        </div>
        <div className="location-created">
          <span className="bold-text"> Hike location at:</span> Lat: {hikeObj.latitude}<br />
          Long: {hikeObj?.longitude}
        </div>
        <div className="cardBtns">
          <Link href={`/hikes/edit/${hikeObj.id}`} passHref>
            <Button
              className="edit-btn"
              style={{
                display: 'flex', justifyContent: 'center', alignSelf: 'flex-end', width: '70px', marginTop: '130px', margin: '5px', background: '#EBFBDA', color: 'black', borderRadius: '20%/50%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              }}
            >Edit
            </Button>
          </Link>
          <Button
            style={{
              display: 'flex', justifyContent: 'center', alignSelf: 'flex-end', width: '70px', marginTop: '130px', margin: '5px', background: '#EBFBDA', color: 'black', borderRadius: '20%/50%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}
            type="button"
            className="btn btn-delete"
            onClick={deleteThisHike}
          >Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

HikeCard.propTypes = {
  hikeObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default HikeCard;
