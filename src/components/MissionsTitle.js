/* eslint-disable react/jsx-props-no-spreading */

import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionsItem from './MissionsItem';
import { getMissions } from '../redux/missions/missionsSlice';

const MissionsTitle = () => {
  const dispatch = useDispatch();
  const { missionItems } = useSelector((store) => store.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <ul>
      <li>
        <div className="missions_title">
          <span>Mission</span>
          <span>Description</span>
          <span>Status</span>
          <span> </span>
        </div>
      </li>
      {missionItems.map((mission) => (
        <MissionsItem key={mission.mission_id} {...mission} />
      ))}
    </ul>
  );
};

export default MissionsTitle;
