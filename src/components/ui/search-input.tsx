/* eslint-disable prettier/prettier */

import {TouchableOpacity, type StyleProp, type ViewStyle} from 'react-native';
import {type FC, useRef} from 'react';
import {Input} from './input';
import tw from '../../lib/tailwind';
import SearchOutline from '../../images/svgs/search-outline';

type Props = {
  label?: string;
  placeholder?: string;
  value?: string;
  style?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
};

export const SearchInput: FC<Props> = ({
  label='Search',
  placeholder = 'Enter to search', 
  style, 
  onChange
}) => {
  const timer = useRef<NodeJS.Timeout>();

  const handleOnChange = (value: string) => {
    if(typeof timer.current !== "undefined") {
      clearTimeout(timer.current!);
    }
    const timeout = setTimeout(() => {
      onChange && onChange(value);
    }, 500);
    timer.current = timeout;
  };



  return (
    
    <Input 
      placeholder={placeholder} 
      label={label}
      leftItem={<SearchButton/>} 
      leftContainerStyle={tw`bg-gray-100`}
      style={[style]}
      inputStyle={[tw`bg-gray-100`]}
      contentWrapperStyle={[tw`bg-gray-100`]}
      onChangeText={handleOnChange}
      />
  );
};

const SearchButton = () => (

<TouchableOpacity
   onPress={() => {
    console.log('Search button clicked');
   }}
  >
    <SearchOutline />
  </TouchableOpacity>

  
);
