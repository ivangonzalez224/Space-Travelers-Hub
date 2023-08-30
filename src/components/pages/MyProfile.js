import MissionsProfile from '../MissionsProfile';
import '../../assets/styles/profile.css';

const MyProfile = () => (
  <section className="myProfile_container">
    <article>
      <h2>My Missions</h2>
      <MissionsProfile />
    </article>
    <article>
      <h2>My Rockets</h2>
      <ul>
        <li>rockets</li>
      </ul>
    </article>
  </section>
);

export default MyProfile;
