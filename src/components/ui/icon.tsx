/* eslint-disable prettier/prettier */

import { View } from 'react-native';
import { type FC } from 'react';
import IonIcons from '@react-native-vector-icons/ionicons';
import FontAwesomeIcon from '@react-native-vector-icons/fontawesome';
import { getSvgIcon } from '../../common/utils';
import tw from '../../lib/tailwind';

type props = {
  iconType: 'svg' | 'IonIcons' | 'FontAwesome',
  icon: string,
  color: string
  size?: number

}

export const Icon: FC<props> = ({
  icon,
  iconType,
  color,
  size
}) => {

  const renderIcon = () => {

    if (icon && iconType === 'IonIcons') {
      return <IonIcons
      //@ts-expect-error
        name={icon}
        style={[tw`self-center`]}
        color={color}
        size={size ? size : 20}
      />;
    }
    if (icon && iconType === 'FontAwesome') {
      return <FontAwesomeIcon
      //@ts-expect-error
        name={icon}
        style={[tw`self-center`]}
        color={color}
        size={size ? size : 20}
      />;
    }

    else if (iconType === 'svg') {
      const ret = getSvgIcon(icon);
      if (typeof ret === 'undefined') {
        return <></>;
      }
      else {
        const SvgIcon = ret.value;
        return <View style={tw`mt-5 ml-2 items-center`}>
          <SvgIcon fill={color} />
        </View>;
      }



    }
    else {
      return <></>;
    }
  };

  return (
    <View>
      {renderIcon()}
    </View>
  );
};

