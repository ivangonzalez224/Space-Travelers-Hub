/* eslint-disable camelcase */

import PropTypes from 'prop-types';

const MissionsItem = ({
  mission_id, mission_name, description, status,
}) => (
  <li>
    <div className="missions_title">
      <span id="missionName">{mission_name}</span>
      <span id="missionDescrip">{description}</span>
      <span id="missionStatus">{status}</span>
      <button type="submit">Join Mission</button>
    </div>
  </li>
);

MissionsItem.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default MissionsItem;
