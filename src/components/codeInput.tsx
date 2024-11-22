/* eslint-disable prettier/prettier */

import  {type FC, useEffect, useState} from 'react';
import {
   StyleSheet, View, Keyboard
} from 'react-native';
import {Input} from './input2';


type props = {
  pinLength?: number;
  onContinue?: (pin?: string) => void;
};


export const CodeInput: FC<props> = ({
  pinLength = 6,
  onContinue,
}) => {
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length === pinLength) {
      onContinue && onContinue(pin);
    }
  }, [onContinue, pin, pinLength]);



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
             <Input 
             style={[
                styles.pinInput,
                index < pin.length ? styles.pinInputFilled : null,
             ]}
             onChange={() => setPin(v => `${pin}${v}`)}
             keyboardType='number-pad'
             />
            </View>
          );
        })}
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
    width: 40,
    height: 40,
   // aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: '#828282',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pinInput: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 8,
    //marginHorizontal: 10
  },
  pinInputFilled: {
    backgroundColor: '#333333',
  },
  pinText: {
    fontSize: 14
  }
});

