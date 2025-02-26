import React from 'react';
import {
  View,
  Text,
  Pressable,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import tw from '../../lib/tailwind';
interface ListItemProps {
  title: string;
  subtitle?: string;
  extra?: string;
  separator?: boolean;
  subTrigger?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onPress?: () => void;
  order?: 'default' | 'reverse';
  variant?: 'default' | 'data';
  // Add custom style props
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  extraStyle?: StyleProp<TextStyle>;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  extraClassName?: string;
}
const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  extra,
  separator = true,
  subTrigger = false,
  onPress,
  leadingIcon,
  trailingIcon,
  order = 'default',
  style,
  containerStyle,
  titleStyle,
  subtitleStyle,
  extraStyle,
  className,
  containerClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  extraClassName = '',
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        tw`flex-row items-center justify-between py-2 px-3 ${separator ? 'border-b border-gray-300' : 'border-b-0'}`,
        style,
      ]}
      className={className}
    >
      {!!leadingIcon && <View style={tw`mr-5`}>{leadingIcon}</View>}
      <View
        style={[
          tw`flex-1 ${order === 'reverse' ? 'flex-col-reverse' : ''} ${containerClassName || ''}`,
          containerStyle,
        ]}
      >
        <Text
          style={[
            tw`text-md-title font-bold text-gray-800 ${titleClassName || ''}`,
            titleStyle,
          ]}
        >
          {title}
        </Text>
        {!!subtitle && (
          <Text
            style={[
              tw`text-xs-body text-gray-500 ${subtitleClassName || ''}`,
              subtitleStyle,
            ]}
          >
            {subtitle}
          </Text>
        )}
        {!!extra && (
          <Text
            style={[
              tw`text-md-title font-bold text-gray-800 ${extraClassName || ''}`,
              extraStyle,
            ]}
          >
            {extra}
          </Text>
        )}
      </View>
      {!!trailingIcon && (
        <View style={tw`ml-lg justify-center self-center items-center`}>
          {trailingIcon}
        </View>
      )}
      {subTrigger && (
        <View style={tw`ml-sm justify-center self-center items-center`}>
          {/* <Icon name="arrow-right-wide-fill" color={colors['light'].type.gray.DEFAULT} size={24} /> */}
        </View>
      )}
    </Pressable>
  );
};
export default ListItem;
