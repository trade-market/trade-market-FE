interface IMapIconsProps {
  icons: string[];
  munus: string[];
}

const MapIcons = ({ icons, munus }: IMapIconsProps) => {
  return (
    <div className='icons'>
      {icons
        .map((_, i) => {
        return (
          <div key={i} className='eachIcon'>
            <img src={icons[i]} />
            <div className='iconName'>{munus[i]}</div>
          </div>
        )
      })}
    </div>
  );
};

export default MapIcons;