/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import  {type FC, useEffect, useRef, useState} from 'react';
import {
    View, Keyboard,
   Platform,
   TouchableOpacity
} from 'react-native';
import {Input} from './input';
import tw from '../../lib/tailwind';
import type { SelectOption } from '../../types/SelectOption';
import { DropdownModal, type DropdownModalRef } from './dropdown-modal';
import ChevronDown from '../../images/svgs/chevron-down';
import { FormInputContainer } from './form-input-container';
import Text from './text';


type props = {
    title: string,
    data: SelectOption[],
    value: string,
    onClick: () => void
  }

export const Dropdown: FC<props> = ({
  title='',
  data = [],
  value='',
  onClick
}) => {
  const [selectedValue, setSelectedValue] = useState<string>();

  const next = () => {
    typeof onClick === 'function' && onClick()
  }
   
  const grayColor = `bg-gray-100`

  useEffect(() => {
   setSelectedValue(value)
  },[value])

  return (
    <View style={tw`w-full`}>
      <FormInputContainer
         onFocus={next}
         trailing={<ChevronDown/>}
        >
            <View>
                <Text style={[tw`mb-2`]}>{title}</Text>
                <Text style={[tw`text-lg-body capitalize`]}>{value}</Text>
            </View>
        </FormInputContainer>
    </View>    
  );
};

