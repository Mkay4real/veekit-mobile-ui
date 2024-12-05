/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */

import  {
  type FC,
  useEffect, useRef, useState,
  forwardRef, type ForwardRefRenderFunction,
  useImperativeHandle
} from 'react';
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
import type { InputHandler } from '../../types/InputHandler';



export type DropdownProps = {
  key?: number;
  title: string,
  data: SelectOption[],
  value?: string,
  searchPlaceholder?: string,
  validationRules?: string,
  onSelected: (val:string) => void,
  disabled?: boolean;
}

const dd: ForwardRefRenderFunction<InputHandler,DropdownProps> = ({
  key,
  title='',
  data = [],
  value='',
  searchPlaceholder='Search',
  onSelected,
  validationRules,
  disabled=false
},ref) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [error, setError] = useState(false);
  const selectRef = useRef<DropdownModalRef>(null);

  const toggleModal = () => {
    selectRef?.current?.toggleModal();
  };

  const onSelect = (v:string) => {
    setSelectedValue(v)
  }

  const validate = () => {
    let errorCount = 0;
    if (validationRules) {
      const rules = validationRules.split('|');
      if (rules.includes('required')) {
        errorCount = (selectedValue === '' || selectedValue === 'none') ? 1 : 0;
       setError(errorCount > 0);
      }
    }
    return errorCount;
  };


  useImperativeHandle(ref, () => ({
    focusInput: () => {
      toggleModal()
    },
    checkValidation: () => {
      let errorCount = validate();
      return errorCount;
    },
    getValue() {
      if(selectedValue) {
        return selectedValue;
      } 
      return '';
    },
  }));

  const grayColor = `bg-gray-100`

  const renderErrorMessage = () => {
    if(error){
      return (
        <Text style={[tw`mt-1 text-lg-body text-rose-500`]}>This field is required</Text>
      )
    }
    return null
  }

  useEffect(() => {
   setSelectedValue(value)
  },[value])

  useEffect(() => {
    typeof onSelected === 'function' && onSelected(selectedValue)
  },[selectedValue,onSelected])

  return (
    <View style={tw`w-full`}>
      <FormInputContainer
         onFocus={toggleModal}
         trailing={<ChevronDown/>}
         editable={disabled}
        >
            <View>
                <Text style={[tw`mb-2`]}>{title}</Text>
                <Text style={[tw`text-lg-body capitalize`]}>{selectedValue}</Text>
            </View>
        </FormInputContainer>
        {renderErrorMessage()}

        <DropdownModal
        ref={selectRef}
        onClose={toggleModal}
        title={title}
        searchPlaceholder={searchPlaceholder}
        data={data}
        onSelect={onSelect}
      />
    </View>    
  );
};

export const Dropdown = forwardRef(dd);

