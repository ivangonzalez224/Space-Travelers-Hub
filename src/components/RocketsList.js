import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stack from 'react-bootstrap/Stack';
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
      <Stack gap={5} className="rockets-header">
        <ul className="p2">
          {rockets.map((rocket) => (
            <RocketsItem
              key={rocket.id}
              id={rocket.id}
              rocketName={rocket.rocket_name}
              description={rocket.description}
              flickrImages={rocket.flickr_images}
              reserved={rocket.reserved}
            />
          ))}
        </ul>
      </Stack>
    </section>
  );
};

export default RocketsList;
