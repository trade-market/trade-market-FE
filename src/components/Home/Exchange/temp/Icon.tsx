import * as svgs from './ExchageIconsYoung';

export type IconName = keyof typeof svgs;
export const iconNames = Object.keys(svgs) as [IconName];

interface IconProps {
  name: IconName;
}

function Icon() {
  console.log(svgs['Obj_eleven']);
}

export default Icon;
