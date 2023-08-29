import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';

const MissionsItem = (
  {
    missionId, missionName, description,
  },
) => {
  const dispatch = useDispatch();
  const statusCheck = useSelector((store) => {
    console.log('dispatch');
    console.log(store.missions);
    const missionCheck = store.missions.missionsItems.filter(
      (mission) => mission.mission_id === missionId,
    );
    return missionCheck.status;
  });

  const joinSingleMission = () => {
    dispatch(joinMission(missionId));
  };

  return (
    <li>
      <span className="missionName">{missionName}</span>
      <span className="missionDescrip">{description}</span>
      <span className="missionStatus">
        {statusCheck ? 'Active Member' : 'NOT A MEMBER'}
      </span>
      <div className="missionbuttons">
        <button
          type="button"
          onClick={joinSingleMission}
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
