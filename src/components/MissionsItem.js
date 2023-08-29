/* eslint-disable camelcase */

import PropTypes from 'prop-types';

const MissionsItem = ({
  mission_name, description, status,
}) => (
  <li>
    <span className="missionName">{mission_name}</span>
    <span className="missionDescrip">{description}</span>
    <span className="missionStatus">{status}</span>
    <div className="missionbuttons">
      <button type="submit">Join Mission</button>
    </div>

  </li>
);

MissionsItem.propTypes = {
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default MissionsItem;
