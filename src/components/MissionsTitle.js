import Table from 'react-bootstrap/Table';
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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missionItems.map((mission) => (
          <MissionsItem
            key={mission.mission_id}
            missionId={mission.mission_id}
            missionName={mission.mission_name}
            description={mission.description}
            status={mission.status}
          />
        ))}
      </tbody>
    </Table>
  );
};
export default MissionsTitle;
