/* eslint-disable prettier/prettier */

import React, {type FC} from 'react';
//import {useNavigation} from '@react-navigation/core'
import {
  Text,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';
import tw from '../../lib/tailwind';
import { Icon } from '.';
//import Ionicons from 'react-native-vector-icons/Ionicons'


type Prop = {
  children: React.ReactNode,
  style?: ViewStyle,
  title?: string,
  subtitle?: string,
  hasCloseIcon?: boolean,
  onClose?: () =>void,
  bottom?: number,
  textColor?: string
};


export const ModalCard: FC<Prop> = ({
  children, 
  style, 
  subtitle, 
  title,
  hasCloseIcon=false,
  bottom=50,
  textColor="#0D0D0D",
  onClose
}) => {
  //const navigation = useNavigation()



  const goBack = () => {
   // navigation.goBack()
   typeof onClose === 'function' && onClose();
  }; 
  return (
   <View style={[tw`absolute right-0 left-0 bg-gray-100 rounded-xl px-6 py-4`,{bottom: bottom},style]}>
      <View style={tw`flex-row items-end justify-center`}>
      {title && <Text style={[tw`text-md-title font-bold mb-2`,{color: textColor}]}>{title}</Text>}
      <TouchableOpacity
        onPress={goBack}
        style={tw`self-end mb-4`}>
       {hasCloseIcon && (<Icon iconType='svg' icon='x' color='#1D1D1B'/>)}
      </TouchableOpacity>
      </View>
     
      <View style={tw`mb-4`}>
        {subtitle && <Text style={[tw`text-xs-body text-gray-500`,{color: textColor}]}>{subtitle}</Text>}
      </View>
      <View>{children}</View>
    </View>
  );
};


