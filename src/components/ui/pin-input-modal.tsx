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
import KeyPad from './keypad';
import tw from '../../lib/tailwind';

export type filterProps = {
  from?: string,
  to?: string,
  direction?: string,
  search?: string
}

type props = {
  title: string,
  onClose: () => void,
  //from: string,
  //setFrom: React.Dispatch<React.SetStateAction<string>>,
  //to: string,
  //setTo: React.Dispatch<React.SetStateAction<string>>,
  //setTransactionType: React.Dispatch<React.SetStateAction<string | undefined>>,
  //next: (props:filterProps) => void
};



export interface PinInputModalRef {
  toggleModal(): void,
  closeModal(): void
}



const pim:ForwardRefRenderFunction<PinInputModalRef,props> = ({
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
            <KeyPad
            type='biometric'
              onDone={handlePin}
              //loading={loading}
            />
          </View>
        </View>
      </ModalCard>
     </GenericModal>
  );
};


 export const PinInputModal = forwardRef<PinInputModalRef,props>(pim);
