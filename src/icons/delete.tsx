import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import type { IconProps } from './types';

const DeleteIcon: React.FC<IconProps> = ({
  // name = 'circle',
  color,
  // size,
  // accessibilityLabel,
  // accessibilityHint,
}) => {
  return (
    <Svg
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
    >
      <G clipPath="url(#clip0_9366_16476)">
        <Path
          d="M22.6563 3.12451H8.55334C7.84761 3.12451 7.18619 3.43734 6.73829 3.98433L0.176259 12.0051C-0.058753 12.2927 -0.058753 12.7063 0.176259 12.9938L6.73907 21.0154C7.18611 21.5617 7.84761 21.8745 8.55334 21.8745H22.6562C23.9487 21.8745 25 20.8231 25 19.5307V5.46824C25.0001 4.1758 23.9487 3.12451 22.6563 3.12451ZM23.4375 19.5307C23.4375 19.9618 23.0873 20.3119 22.6563 20.3119H8.55334C8.31763 20.3119 8.09711 20.2074 7.94833 20.0258L1.79065 12.4994L7.94755 4.97384C8.09711 4.79148 8.31755 4.68695 8.55334 4.68695H22.6562C23.0873 4.68695 23.4375 5.03717 23.4375 5.46817C23.4375 5.46824 23.4375 19.5307 23.4375 19.5307Z"
          fill={color || '#101828'}
        />
        <Path
          d="M17.416 8.0415L14.0621 11.3954L10.7082 8.0415L9.60352 9.14622L12.9574 12.5001L9.60352 15.854L10.7082 16.9587L14.0621 13.6048L17.416 16.9587L18.5207 15.854L15.1668 12.5001L18.5207 9.14622L17.416 8.0415Z"
          fill={color || '#101828'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_9366_16476">
          <Rect width={25} height={25} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DeleteIcon;
