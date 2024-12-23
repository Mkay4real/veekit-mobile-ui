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
  title="",
  hasCloseIcon=false,
  bottom=0,
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
      <View style={tw`my-2`}>
      
      <TouchableOpacity
        onPress={goBack}
        style={tw`self-end mb-4`}>
       {hasCloseIcon && (<Icon iconType='svg' icon='x' color='#1D1D1B'/>)}
      </TouchableOpacity>
      {title && <Text style={[tw`text-md-title self-center font-bold my-2`,{color: textColor}]}>{title}</Text>}
      </View>
     
      <View style={tw`mb-4`}>
        {subtitle && <Text style={[tw`text-xs-body text-gray-500`,{color: textColor}]}>{subtitle}</Text>}
      </View>
      <View>{children}</View>
    </View>
  );
};


