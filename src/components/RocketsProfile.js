import React from 'react';
import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <>
      {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
        <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
      ))}
    </>
  );
};

export default RocketsProfile;
