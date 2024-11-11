/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {type FC} from 'react';
//import {useNavigation} from '@react-navigation/core'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native'
//import Ionicons from 'react-native-vector-icons/Ionicons'


type Prop = {
  children: React.ReactNode,
  style?: ViewStyle,
  title?: string,
  subtitle?: string,
  hasCloseIcon?: boolean,
  onClose?: () =>void,
  bottom?: number
};


export const ModalCard: FC<Prop> = ({
  children, 
  style, 
  subtitle, 
  title,
  hasCloseIcon=false,
  bottom=50,
  onClose
}) => {
  //const navigation = useNavigation()
  const styles = useStyle()


  const goBack = () => {
   // navigation.goBack()
   typeof onClose === 'function' && onClose()
  } 
  return (
   <View style={[styles.card, {bottom: bottom}, style]}>
      <TouchableOpacity
        onPress={goBack}
        style={{alignSelf: 'flex-start', marginBottom: 16}}>
       {/*hasCloseIcon && (<Ionicons name="close" color="#1D1D1B" size={22}   /> )*/}
       {hasCloseIcon && (<Text style={{color: "#1D1D1B", fontSize: 22}}>x</Text>)}
      </TouchableOpacity>
      <View>
        {title && <Text style={styles.title}>{title}</Text>}
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <View>{children}</View>
    </View>
  )
};

const useStyle = () => {
 
  const styles = StyleSheet.create({
    card: {
      position: 'absolute',
      right: 0,
      left: 0,
      backgroundColor: "#F4F4F4",
      borderTopEndRadius: 24,
      borderTopStartRadius: 24,
      paddingHorizontal: 24,
      paddingVertical: 18,
    },
    title: {
      //fontFamily: Fonts.Gilroy_Bold,
      fontWeight: '700',
      fontSize: 20,
      lineHeight: 25,
      color: "#0D0D0D",
      marginBottom: 4,
    },
    subtitle: {
      //fontFamily: Fonts.Gilroy_Bold,
      fontWeight: '500',
      fontSize: 10,
      lineHeight: 12,
      color: "#0D0D0D",
      marginBottom: 28,
    },
  })

  return styles
}


