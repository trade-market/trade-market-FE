import { useNavigate, useSearchParams } from 'react-router-dom';

interface IMapIconsProps {
  activeNav: number;
  icons: string[];
  munus: string[];
}

const MapIcons = ({ activeNav, icons, munus }: IMapIconsProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const AddQueryStringHandler = (munu: string) => { //* 쿼리스트링 추가
    searchParams.set('type', activeNav === 0 ? '물물' : '재능');
    searchParams.set('category', munu);
    navigate(`search?${searchParams}`);
  };

  return (
    <div className='icons'>
      {icons
        .map((_, i) => {
        return (
          <div key={i} className='eachIcon' onClick={() => AddQueryStringHandler(munus[i])}>
            <img src={icons[i]} />
            <div className='iconName'>{munus[i]}</div>
          </div>
        )
      })}
    </div>
  );
};

export default MapIcons;