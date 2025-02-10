import { forwardRef, useState, type ForwardRefRenderFunction } from 'react';
import { Text, View } from 'react-native';
import { GenericModal } from './generic-modal';
import { ModalCard } from './modal-card';
import KeyPad from './keypad';
import tw from '../../lib/tailwind';
import PinInput from './input-boxes';

export type filterProps = {
  from?: string;
  to?: string;
  direction?: string;
  search?: string;
};

type props = {
  title: string;
  textLength?: number;
  label?: string;
  onClose: () => void;
  callback: (pin: string) => void;
  //from: string,
  //setFrom: React.Dispatch<React.SetStateAction<string>>,
  //to: string,
  //setTo: React.Dispatch<React.SetStateAction<string>>,
  //setTransactionType: React.Dispatch<React.SetStateAction<string | undefined>>,
  //next: (props:filterProps) => void
};

export interface PinInputModalRef {
  toggleModal(): void;
  closeModal(): void;
}

const Pim: ForwardRefRenderFunction<PinInputModalRef, props> = (
  { title, textLength = 4, label = 'Enter PIN', onClose, callback },
  ref
) => {
  const [pin, setPin] = useState<string>('');

  const handlePinChange = (val: string) => {
    setPin(val);
  };

  const handlePin = (val = '') => {
    callback(val);
    onClose();
  };

  return (
    <GenericModal onClose={onClose} ref={ref}>
      <ModalCard title={title} bottom={0} hasCloseIcon={true} onClose={onClose}>
        <View style={[tw`justify-between`]}>
          <Text style={[tw`text-md-title font-bold`]}>{label}</Text>
          <View style={[tw`my-5`]}>
            <PinInput textLength={textLength} inputLength={pin.length} />
          </View>
          <View style={[tw`mb-5`]}>
            <KeyPad
              type="biometric"
              onDone={handlePin}
              textLength={textLength}
              onChange={handlePinChange}
              //loading={loading}
            />
          </View>
        </View>
      </ModalCard>
    </GenericModal>
  );
};

export const PinInputModal = forwardRef<PinInputModalRef, props>(Pim);
