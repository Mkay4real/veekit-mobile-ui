// import { useColorScheme } from 'nativewind';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DeleteIcon from '../../icons/delete';
import FingerprintIcon from '../../icons/fingerprint';
import colors from '../../theme/colors';
import tw from '../../lib/tailwind';

export type KeyPadInputType = 'decimal' | 'nondecimal' | 'biometric';
export type KeyPadProps = {
  type: KeyPadInputType;
  textLength?: number;
  onKeyPress?: (key: string) => void;
  onBiometric?: (key: string) => void;
  onDone?: (value: string) => void;
  onChange?: (value: string) => void;
  containerClassName?: string;
};

const KEY_BIO = 'bio';
const KEY_DECIMAL = '.';
const KEY_BACKSPACE = '←';
const KeyPad: React.FC<KeyPadProps> = ({
  type,
  onKeyPress,
  onBiometric,
  onChange,
  onDone,
  textLength = 4,
  containerClassName = '',
}) => {
  const [value, setValue] = useState('');

  // const { colorScheme } = useColorScheme();
  // const mode = colorScheme === 'dark' ? 'dark' : 'light';

  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    type === 'decimal'
      ? [KEY_DECIMAL, '0', KEY_BACKSPACE]
      : ['', '0', KEY_BACKSPACE],
  ];

  if (type === 'biometric') {
    keys[4] = ['', KEY_BIO, ''];
  }

  useEffect(() => {
    if (value.length === textLength) {
      onDone?.(value);
    }
    onChange?.(value);
  }, [value, onDone, onChange, textLength]);

  const handleKeyPress = (key: string) => {
    onKeyPress?.(key);
    if (key === KEY_BIO) {
      onBiometric?.(key);
    } else if (key === KEY_BACKSPACE) {
      setValue((prev) => prev.substring(0, prev.length - 1));
    } else if (key) {
      setValue((prev) => (prev.length < textLength ? prev.concat(key) : prev));
    }
  };

  // <View className={`p-xs gap-[32] ${containerClassName}`}>
  return (
    <View style={tw`p-xs gap-[5] ${containerClassName}`}>
      {keys.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={tw`flex-row w-full justify-between mb-btn-hg-1`}
        >
          {row.map((key, keyIndex) => (
            <TouchableOpacity
              key={'key' + keyIndex}
              onPress={() => handleKeyPress(key)}
              // className={`w-[32%] h-5xl p-lg rounded-full justify-center items-center bg-['transparent']`}
              style={tw`w-[28%] h-5xl p-[14] py-[24] rounded-md justify-center items-center ${key === KEY_BIO || key.length < 1 ? '' : 'bg-[#F6F6F6]'}`}
            >
              {key === KEY_BIO ? (
                <FingerprintIcon color={colors.dark.backdrop} size={20} />
              ) : key === KEY_BACKSPACE ? (
                <DeleteIcon color={colors.dark.backdrop} size={20} />
              ) : (
                <Text
                  style={tw`font-bold text-gray-800 dark:text-dark-type-gray`}
                >
                  {key}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};
// export {KeyPad}
export default KeyPad;
