import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joingMission } from '../redux/missions/missionsSlice';

const MissionsItem = ({
  missionId, missionName, description, status,
}) => {
  const dispatch = useDispatch();
  const statusCheck = useSelector((state) => {
    const mission = state.missions.missions.find((mission) => mission.id === missionID);
    return mission.status;
  });
  return (
    <li>
      <span className="missionName">{missionName}</span>
      <span className="missionDescrip">{description}</span>
      <span className="missionStatus">{status}</span>
      <div className="missionbuttons">
        <button type="submit">Join Mission</button>
      </div>
    </li>
  );
}
  
MissionsItem.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
export default MissionsItem;
