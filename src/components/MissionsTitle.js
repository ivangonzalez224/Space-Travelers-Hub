import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionsItem from './MissionsItem';
import { getMissions } from '../redux/missions/missionsSlice';

const MissionsTitle = () => {
  const dispatch = useDispatch();
  const { missionItems } = useSelector((store) => store.missions);
  useEffect(() => {
    if (missionItems.length === 0) {
      dispatch(getMissions());
    }
  });

  return (
    <ul>
      <li>
        <span className="missionName">Mission</span>
        <span className="missionDescrip">Description</span>
        <span id="missionStatusWord" className="missionStatus">Status</span>
        <div className="missionbuttons">
          <span> </span>
        </div>
      </li>
      {missionItems.map((mission) => (
        <MissionsItem
          key={mission.mission_id}
          missionName={mission.mission_name}
          description={mission.description}
          status={mission.status}
        />
      ))}
    </ul>
  );
};
export default MissionsTitle;
