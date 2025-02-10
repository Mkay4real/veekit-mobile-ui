import React from 'react';
import { View, Text } from 'react-native';
import tw from '../../lib/tailwind';

type PinInputProps = {
  textLength: number; // Total number of boxes
  inputLength: number; // Current input length
};

const PinInput: React.FC<PinInputProps> = ({ textLength, inputLength }) => {
  console.log(textLength, inputLength);
  return (
    <View style={tw`flex-row gap-x-5 justify-center w-full`}>
      {Array(textLength)
        .fill(0)
        .map((_, index) => {
          const isFilled = index < inputLength;
          return (
            <View
              key={index}
              style={tw`border border-gray-500 rounded-lg items-center justify-center flex-1 aspect-square`}
            >
              {isFilled ? (
                <View
                  style={tw`rounded-full ${textLength > 6 ? 'w-3 h-3' : 'w-4 h-4'} p-0 m-0 bg-[#1D2939]`}
                />
              ) : (
                ''
              )}
            </View>
          );
        })}
    </View>
  );
};

export default PinInput;
