/* eslint-disable prettier/prettier */

import {type StyleProp, StyleSheet, TouchableOpacity, View, type ViewStyle, Text} from 'react-native';
import {type FC, type PropsWithChildren} from 'react';
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
  const styles = useStyle();
  
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.mainContainer,
        !trailing && styles.noRightContainer,
        !leading && styles.noLeftContainer,
        style,
        focused && styles.inputFocused,
        editable === false && styles.inputContainerDisable,
        error && styles.inputContainerError,
      ]}
      disabled={!editable}
      onPress={onFocus}>
      {label && (
        <View style={styles.labelContainer}>
          <Text>{label}</Text>
        </View>
      )}
      <View style={styles.inputContainer}>
      {leading && (
        <View
          style={[
            styles.iconWrapper,
            styles.iconLeftWrapper,
            leftContainerStyle,
          ]}>
          {leading}
        </View>
      )}
      <View
        style={[styles.childContainer, containerStyle]}
      >
        {children}
      </View>
      {trailing && (
        <View
          style={[
            styles.iconWrapper,
            styles.iconRightWrapper,
            rightContainerStyle,
          ]}>
          {trailing}
        </View>
      )}
      </View>
      
    </TouchableOpacity>
  );
};


const useStyle = () => {

  const styles = StyleSheet.create({
    labelContainer: {
      width: '100%',
    },
    mainContainer: {
      width: '100%',
      height: 50,
      backgroundColor: '#ffffff',
      borderRadius: 5,
      overflow: 'hidden',
      elevation: 1,
      shadowOpacity: 1,
      shadowColor: 'rgba(0, 0, 0, 0.05)',
      shadowOffset: {height: 4, width: 0},
      shadowRadius: 5,
    },
    inputContainer: {
      width: '100%',
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      borderRadius: 5,
      /*overflow: 'hidden',
      elevation: 1,
      shadowOpacity: 1,
      shadowColor: 'rgba(0, 0, 0, 0.05)',
      shadowOffset: {height: 4, width: 0},
      shadowRadius: 5,*/
    },
    noLeftContainer: {
      paddingLeft: 13,
    },
    noRightContainer: {
      paddingRight: 12,
    },
    inputFocused: {
      borderColor: '#002668',
      borderWidth: StyleSheet.hairlineWidth,
    },
    inputContainerDisable: {
    //  add style for disable state
    },
    inputContainerError: {
      borderColor: '#D2232A',
      borderWidth: StyleSheet.hairlineWidth,
    },
    iconWrapper: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15,
    },
    iconLeftWrapper: {
      paddingRight: 13,
      paddingLeft: 13,
    },
    iconRightWrapper: {
      paddingLeft: 13,
      paddingRight: 13,
    },
    childContainer: {flex: 1, height: '100%'},
  });
  
  

  return styles;
};
