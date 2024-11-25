/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */

import  {type FC, useEffect, useRef, useState} from 'react';
import {
    View, Keyboard,
   type NativeSyntheticEvent,
   type TextInputChangeEventData,
   Platform
} from 'react-native';
import {Input} from './input';
import tw from '../../lib/tailwind';


type props = {
  length?: number;
  onContinue?: (pin?: string) => void;
  autoFillText?: string;
};


export const CodeInput: FC<props> = ({
  length = 6,
  onContinue,
  autoFillText='', 
}) => {
  const inputLength = useRef(new Array(length).fill(''));
  const [input, setInput] = useState<string[]>([]);
  const inputRefs = useRef<any>([]);

  type pressProps = {
    e: any,//NativeSyntheticEvent<Key>,
    index: number
  }

  const handleOnKeyPress = (props: pressProps) => {
    const {e,index} = props
    if (e?.nativeEvent?.key === 'Backspace') {
      if (index > 0 && inputRefs.current.length) {
        const newIndex = index;
        (inputRefs.current[newIndex-1])?.focusInput()
      }
    }
  }

  const logKey = (value='', index=0) => {
    const newIndex = index + 1;

    if(Platform.OS === 'ios' && value.length === length){
      let newInput = []
      for(let i = 0; i < inputRefs.current.length; i++){
        newInput[i] = value.charAt(i)
      }
      setInput(newInput)
    }
    else{
      setInput(previousInput => {
        const newInput = [...previousInput];
        newInput[index] = value.charAt(0);
        return newInput;
      });
    }
   
    if (newIndex < length && value.length > 0) {
      (inputRefs.current[newIndex])?.focusInput();
    }
  };

  useEffect(() => {
    if(autoFillText.length === length){
     let temp = autoFillText.split('')
     setInput(temp)
    }
  },[autoFillText,length])

  useEffect(() => {
    if (input.join('').length === length) {
      typeof onContinue === 'function' && onContinue(input.join(''));
    }
  }, [input, length]);




  useEffect(() => {
   Keyboard.dismiss();
  },[]);
   
  const grayColor = `bg-gray-100`
  /*
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
  */
  return (
    <View style={[tw`mb-2.5 flex-row border-0 items-center justify-content-center`]}>
        {new Array(length).fill('').map((_, index) => {
            
          return (
           
             <Input 
             autofocus={index === 0}
             maxLength={Platform.OS === 'android' ? 1 : 6}
             key={index}
             style={[
               tw`w-12 h-14 rounded-md  border-0 mx-2.5 text-gray-500 self-center text-center items-center justify-center`
             ]}
             contentWrapperStyle={tw`${input[index] ? '' : 'bg-gray-100'} border-0`}
             inputStyle={tw`${input[index] ? '' : 'bg-gray-100'} border-0 text-center`}
             ref={ref => (inputRefs.current[index] = ref)}
             value={input[index]}
             autoComplete='sms-otp'
             textContentType='oneTimeCode'
             onKeyPress={e => handleOnKeyPress({e, index})}
             onChangeText={t => logKey(t, index)}
             keyboardType='number-pad'
             />
          );
        })}
      </View>
      
  );
};

