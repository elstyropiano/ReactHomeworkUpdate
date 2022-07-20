import animal from '../../../images/animal.jpg';
import '../../../style/aboutMeStyle/content.css';
const Content = ({ aboutMeDate }) => (
  <div className="imageAndDecription">
    <div className="divImageAboutMe">
      <img src={animal} alt="photo" />
    </div>
    <div className="description">
      <h1>{`${aboutMeDate.name} ${aboutMeDate.lastName}`}</h1>
      <p>{`Cześć jestem ${aboutMeDate.name} ${aboutMeDate.lastName}. ${aboutMeDate.description}`}</p>
    </div>
  </div>
);

export default Content;
