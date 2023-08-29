import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import RocketsItem from './RocketsItem';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  });

  return (
    <section className="rockets-container">
      <ul className="rockets-list">
        {rockets.map((rocket) => (
          <RocketsItem
            key={rocket.id}
            id={rocket.id}
            rocketName={rocket.rocket_name}
            description={rocket.description}
            flickrImages={rocket.flickr_images}
          />
        ))}
      </ul>
    </section>
  );
};

export default RocketsList;
