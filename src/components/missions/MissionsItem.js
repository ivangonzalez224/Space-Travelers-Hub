import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

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
    <tr>
      <td className="missionName">{missionName}</td>
      <td className="missionDescrip">{description}</td>
      <td className="align-middle">
        <Badge
          bg={statusCheck ? 'info' : 'secondary'}
        >
          {statusCheck ? 'Active Member' : 'NOT A MEMBER'}
        </Badge>
      </td>
      <td className="align-middle">
        <Button
          variant={statusCheck ? 'outline-danger' : 'outline-secondary'}
          type="button"
          onClick={statusCheck ? leaveSingleMission : joinSingleMission}
          className={statusCheck ? 'mission_btn btn_join' : 'mission_btn btn_leave'}
        >
          {statusCheck ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
};

MissionsItem.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionsItem;
