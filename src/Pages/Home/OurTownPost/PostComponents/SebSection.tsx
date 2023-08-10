import Icon_like from "../../../../Assets/Icons/Home/Post/Icon_like.svg";
import Icon_unlike from "../../../../Assets/Icons/Home/Post/Icon_unlike.svg";

interface ISebSectionProps {
  like: boolean;
  location: string;
  date: string;
}

const SebSection = ({ like, location, date }: ISebSectionProps) => {
  return (
    <section className="seb-section">
      <div>
        <img className="like-icon" src={ like ? Icon_like : Icon_unlike } />
        <div className="subImpo">
          <div>{location}</div>
          <div>{date}</div>
        </div>
      </div>
    </section>
  );
};

export default SebSection;