/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {type FC, useEffect, useState} from 'react';
import {
   StyleSheet, Text, 
  TouchableOpacity, View, Keyboard
} from 'react-native';

const numbers = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '',
  '0',
  'backspace',
];


type props = {
  pinLength?: number;
  showButton?: boolean;
  onKey?: (key: string) => void;
  onFilled?: (pin: string) => void;
  onContinue?: (pin?: string) => void;
  color?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  keyColor?: string;
  overrideBackButton?: React.ReactElement;
  loading?: boolean;
};


export const KeyPad: FC<props> = ({
  pinLength = 4,
  onKey,
  onContinue,
  color,
  keyColor,
  overrideBackButton,
}) => {
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length === pinLength) {
      onContinue && onContinue(pin);
    }
  }, [onContinue, pin, pinLength]);

  const renderBackButton = () => {
    if (overrideBackButton) {
      return overrideBackButton;
    } else {
      return <Text style={{color: "#1D1D1B", fontSize: 22}}>x</Text>;
    }
  };

  const onKeyPress = (key:string) => {
    if (key === 'backspace') {
      setPin(val => {
        if (val) {
          return val.substr(0, val.length - 1);
        }
        return val;
      });
    } else {
      if (pin.length < pinLength) {
        setPin(val => val + key);
      }
    }
    onKey && onKey(key);
  };

  const renderRow = (start:number, end:number) => {
    return (
      <View style={styles.keyboardRow}>
        {numbers.slice(start, end).map((val, index) => (
          <TouchableOpacity
            style={[
              styles.key,
              !val && styles.hide,
              keyColor ? {backgroundColor: keyColor} : null,
              val === 'backspace' && styles.backSpace,
            ]}
            disabled={!val}
            key={val + index}
            onPress={() => onKeyPress(val)}
            activeOpacity={0.5}>
            {val === 'backspace' ? (
              renderBackButton()
            ) : (
              <Text style={[styles.keyText, color ? {color} : null]}>
                {val}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  useEffect(() => {
   Keyboard.dismiss();
  },[]);

  return (
    <View>
      <View style={styles.pinInputWrapper}>
        {new Array(pinLength).fill('').map((_, index) => {
            
          return (
            <View
              key={index}
              style={[
                styles.pinInputBox,
              ]}
            >
             <View 
             style={[
                styles.pinInput,
                index < pin.length ? styles.pinInputFilled : null,
             ]}
             />
            </View>
          );
        })}
      </View>
      <View style={styles.keyboardView}>
        {renderRow(0, 3)}
        {renderRow(3, 6)}
        {renderRow(6, 9)}
        {renderRow(9, 12)}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  key: {
    width: 100,
    height: 64,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    marginHorizontal: 5
  },
  hide: {
    opacity: 0,
  },
  backSpace: {
    backgroundColor: 'transparent',
  },
  keyText: {
    color: '#4F4F4F',
    fontWeight: '500',
    fontSize: 24,
  },
  button: {
    width: 260,
    alignSelf: 'center',
    marginTop: 33,
  },
  buttonText: {
    color: '#000000',
  },
  pinInputWrapper: {
    marginBottom: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinInputBox: {
    width: 64,
    height: 64,
   // aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: '#828282',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pinInput: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 10
  },
  pinInputFilled: {
    backgroundColor: '#333333',
  },
  pinText: {
    fontSize: 14
  }
});

