import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <ListGroup>
      {reservedRockets.length > 0 ? (
        reservedRockets.map((rocket) => (
          <ListGroup.Item
            key={rocket.rocket_id}
          >
            {rocket.rocket_name}
          </ListGroup.Item>
        ))
      ) : (
        <h6>No Rockets reserved yet</h6>
      )}
    </ListGroup>
  );
};

export default RocketsProfile;
