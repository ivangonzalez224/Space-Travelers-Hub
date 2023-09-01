import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const { missionItems } = useSelector((store) => store.missions);

  const newMissions = missionItems.filter((item) => item.status);

  return (
    <ListGroup>
      {newMissions.length > 0 ? (
        newMissions.map((mission) => (
          <ListGroup.Item key={mission.mission_id}>
            {mission.mission_name}
          </ListGroup.Item>
        ))
      ) : (
        <h6>No missions registered yet</h6>
      )}
    </ListGroup>
  );
};

export default MissionsProfile;
