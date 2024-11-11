/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import  {
  forwardRef,
  type ForwardRefRenderFunction,
} from 'react';
import {
  Text,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { GenericModal } from './genericModal'; 
import { ModalCard } from './modalCard';
import { KeyPad } from './keypad';

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

  const styles = useStyle()

  const handlePin = (val='') => {
   console.log('PIN currently: ',val)
  }
 

  return (
    <GenericModal
      onClose={onClose}
      ref={ref}
     >
      <ModalCard bottom={0} hasCloseIcon={true} onClose={onClose}>
        <View style={{justifyContent: 'space-between'}}>
          <Text style={[styles.title]}>{title}</Text>

          <View style={{marginBottom: 20}}>
            <KeyPad
              onContinue={handlePin}
              //loading={loading}
            />
          </View>
        </View>
      </ModalCard>
     </GenericModal>
  )
}



const useStyle = () => {

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: '#E7E7E7',
      //flex: 1,
      height: 474
    },
    header: {
      alignItems: 'flex-start',
      paddingLeft: 16,
      marginTop: 17,
    },
    title: {
      color: '#000000',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 5,
      marginBottom: '5%',
    },
    label: {
      fontSize: 16,
      color: '#000000'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    datePickerLabel: {
      color: '#979797',
      fontSize: 12,
      marginRight: 1
    },
    customButtonWrapper: {
      width: 136,
      height: 40,
      borderWidth: 0.5,
      borderColor: '#002668',
      borderRadius: 5,
      paddingVertical: Platform.OS === 'android' ? 5 : 10,
     // paddingHorizontal: Platform.OS === 'android' ? responsiveFonts.w(38) : responsiveFonts.w(48)
    },
    customButtonText: {
      fontSize: 14
    }
  });
  
  return styles
}


 export const PinInputModal = forwardRef<PinInputModalRef,props>(pim)
