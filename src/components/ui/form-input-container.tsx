/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {type StyleProp, StyleSheet, TouchableOpacity, View, type ViewStyle, Text} from 'react-native';
import {type FC, type PropsWithChildren} from 'react';
import tw from '../../lib/tailwind';
type Props = {
  onFocus: () => void;
  editable?: boolean;
  error?: boolean;
  label?: string;
  leading?: JSX.Element;
  trailing?: JSX.Element;
  focused?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
};

export const FormInputContainer: FC<PropsWithChildren<Props>> = ({
  children,
  onFocus,
  editable = true,
  error = false,
  label,
  leading,
  trailing,
  focused,
  leftContainerStyle,
  rightContainerStyle,
  containerStyle,
  style,
}) => {

  
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        tw`w-full p-1 h-14 bg-white rounded-md overflow-hidden z-01 opacity-100`,
        {shadowColor: 'rgba(0, 0, 0, 0.05)', shadowOffset: {height: 4, width: 0}, shadowRadius: 5},
        !trailing && tw`pr-3`,
        !leading && tw`pl-3`,
        style,
        { borderWidth: StyleSheet.hairlineWidth,},
        //editable === false && styles.inputContainerDisable,
        error && {borderColor: '#D2232A'},
      ]}
      disabled={!editable}
      onPress={onFocus}>
      {label && (
        <View style={[tw`w-full`]}>
          <Text>{label}</Text>
        </View>
      )}
      <View style={[tw`w-full h-11 flex-row items-center justify-between bg-white rounded-md`]}>
      {leading && (
        <View
          style={[
            tw`h-full justify-center items-center py-3.5`,
            tw`px-3.5`,
            leftContainerStyle,
          ]}>
          {leading}
        </View>
      )}
      <View
        style={[tw`flex-1 h-full`, containerStyle]}
      >
        {children}
      </View>
      {trailing && (
        <View
          style={[
            tw`h-full justify-center items-center py-3.5`,
            tw`px-3.5`,
            rightContainerStyle,
          ]}>
          {trailing}
        </View>
      )}
      </View>
      
    </TouchableOpacity>
  );
};
