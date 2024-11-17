import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './types';

const TrashIcon: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
    >
      <Path
        d="M3 5.49984H4.66667M4.66667 5.49984H18M4.66667 5.49984V17.1665C4.66667 17.6085 4.84226 18.0325 5.15482 18.345C5.46738 18.6576 5.89131 18.8332 6.33333 18.8332H14.6667C15.1087 18.8332 15.5326 18.6576 15.8452 18.345C16.1577 18.0325 16.3333 17.6085 16.3333 17.1665V5.49984H4.66667ZM7.16667 5.49984V3.83317C7.16667 3.39114 7.34226 2.96722 7.65482 2.65466C7.96738 2.3421 8.39131 2.1665 8.83333 2.1665H12.1667C12.6087 2.1665 13.0326 2.3421 13.3452 2.65466C13.6577 2.96722 13.8333 3.39114 13.8333 3.83317V5.49984M8.83333 9.6665V14.6665M12.1667 9.6665V14.6665"
        stroke={color || '#F04438'}
        strokeWidth={1.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TrashIcon;
