import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionsItem = (
  {
    missionId, missionName, description,
  },
) => {
  const dispatch = useDispatch();
  const mission = useSelector((store) => store.missions.missionItems.find(
    (mission) => mission.mission_id === missionId,
  ));
  const statusCheck = mission.status;
  const joinSingleMission = () => {
    dispatch(joinMission(missionId));
  };
  const leaveSingleMission = () => {
    dispatch(leaveMission(missionId));
  };
  return (
    <li>
      <span className="missionName">{missionName}</span>
      <span className="missionDescrip">{description}</span>
      <span className="status_container">
        <p
          className={statusCheck ? 'missionStatus status_join' : 'missionStatus status_leave'}
        >
          {statusCheck ? 'Active Member' : 'NOT A MEMBER'}
        </p>
      </span>
      <div className="missionbuttons">
        <button
          type="button"
          onClick={statusCheck ? leaveSingleMission : joinSingleMission}
          className={statusCheck ? 'mission_btn btn_join' : 'mission_btn btn_leave'}
        >
          {statusCheck ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </li>
  );
};
MissionsItem.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default MissionsItem;
