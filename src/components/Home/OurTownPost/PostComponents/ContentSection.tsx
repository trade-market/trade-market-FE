import Icon_exchang from '@Assets/Icons/Home/Post/Icon_exchang.svg';

interface IContentSectionProps {
  title: string;
  want: string;
  category: string;
}

const ContentSection = ({ title, want, category }: IContentSectionProps) => {
  return (
    <section className="content-section">
      <div>
        <div className="item">{title}</div>
        <img className="item" src={Icon_exchang} />
        <div className="item">{want}</div>
      </div>
      <div className="item">{category}</div>
    </section>
  );
};

export default ContentSection;
