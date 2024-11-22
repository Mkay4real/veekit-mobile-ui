/* eslint-disable prettier/prettier */

import {TouchableOpacity, type StyleProp, type ViewStyle} from 'react-native';
import {type FC, useRef} from 'react';
import {Input} from './input';
import Search from '../../images/svgs/Search';

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
      rightItem={<SearchButton/>} 
      style={style}
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
    <Search color="#979797"/>
  </TouchableOpacity>
);
