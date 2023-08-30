import MissionsProfile from '../MissionsProfile';
import RocketsProfile from '../RocketsProfile';
import '../../assets/styles/profile.css';

const MyProfile = () => (
  <section className="myProfile_container">
    <article>
      <h2>My Missions</h2>
      <MissionsProfile />
    </article>
    <article>
      <h2>My Rockets</h2>
      <RocketsProfile />
    </article>
  </section>
);

export default MyProfile;
