import React from 'react';
import Icon_1vs1 from '@Assets/Icons/Home/Post/Icon_1vs1.svg';
import Icon_offer from '@Assets/Icons/Home/Post/Icon_offer.svg';

interface IimgSectionProps {
  type: number;
  image: string;
}

const ImgSection = ({ type, image }: IimgSectionProps) => {
  return (
    <section className="img-section">
      <div>
        <img src={type === 1 ? Icon_1vs1 : Icon_offer} />
      </div>
      <div>
        <img className="postImage" src={image} />
      </div>
    </section>
  );
};

export default ImgSection;
