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
    onClick: (val:string) => void
  }

export const Dropdown: FC<props> = ({
  title='',
  data = [],
  value='',
  onClick
}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const selectRef = useRef<DropdownModalRef>(null);

  const toggleModal = () => {
    selectRef?.current?.toggleModal();
  };

  const onSelect = (v:string) => {
    setSelectedValue(v)
  }

  const grayColor = `bg-gray-100`

  useEffect(() => {
   setSelectedValue(value)
  },[value])

  useEffect(() => {
    typeof onClick === 'function' && onClick(selectedValue)
  },[selectedValue,onClick])

  return (
    <View style={tw`w-full`}>
      <FormInputContainer
         onFocus={toggleModal}
         trailing={<ChevronDown/>}
        >
            <View>
                <Text style={[tw`mb-2`]}>{title}</Text>
                <Text style={[tw`text-lg-body capitalize`]}>{selectedValue}</Text>
            </View>
        </FormInputContainer>

        <DropdownModal
        ref={selectRef}
        onClose={toggleModal}
        title='Select your gender'
        searchPlaceholder='Search genders'
        data={data}
        onSelect={onSelect}
      />
    </View>    
  );
};

