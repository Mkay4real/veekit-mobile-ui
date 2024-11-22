/* eslint-disable prettier/prettier */

import  {
  forwardRef,
  type ForwardRefRenderFunction,
} from 'react';
import {
  Text,
  View,
} from 'react-native';
import {GenericModal} from './generic-modal'; 
import {ModalCard} from './modal-card';
import tw from '../../lib/tailwind';
import type { SelectOption } from '../../types/SelectOption';


type props = {
  title: string,
  hasSearch?: boolean,
  onClose: () => void,
  onSearch?: (item:SelectOption) => void,
};



export interface DropdownModalRef {
  toggleModal(): void,
  closeModal(): void
}



const dmm:ForwardRefRenderFunction<DropdownModalRef,props> = ({
  title,
  onClose
}, ref) => {

  const handlePin = (val='') => {
   console.log('PIN currently: ',val);
  };
 

  return (
    <GenericModal
      onClose={onClose}
      ref={ref}
     >
      <ModalCard title={title} bottom={0} hasCloseIcon={true} onClose={onClose}>
        <View style={[tw`justify-between`]}>
          <Text style={[tw`text-md-title font-bold`]}>{title}</Text>

          <View style={[tw`mb-5`]}>
            <></>
          </View>
        </View>
      </ModalCard>
     </GenericModal>
  );
};


 export const DropdownModal = forwardRef<DropdownModalRef,props>(dmm);
