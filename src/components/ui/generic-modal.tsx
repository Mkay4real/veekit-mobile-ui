import {
  forwardRef,
  type ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
  useMemo,
} from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  type ViewStyle,
} from 'react-native';

import Modal from 'react-native-modal';
import tw from '../../lib/tailwind';

type props = {
  style?: ViewStyle;
  onClose: () => void;
  children: JSX.Element;
  scrollable?: boolean;
};

export interface GenericModalRef {
  toggleModal(): void;
  closeModal(): void;
}

const GenericModalComponent: ForwardRefRenderFunction<
  GenericModalRef,
  props
> = ({ style, onClose: _onClose, children, scrollable = false }, ref) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible((prevState) => {
      prevState && onClose();
      return !prevState;
    });
  };

  const onClose = () => {
    setVisible(false);
    _onClose && _onClose();
  };

  useImperativeHandle(ref, () => ({
    toggleModal() {
      toggle();
    },
    closeModal() {
      setVisible(false);
    },
  }));

  const renderContent = () => {
    if (scrollable) {
      return (
        <ScrollView contentContainerStyle={[tw`flex-1 py-6 px-6`, style]}>
          {children}
        </ScrollView>
      );
    } else {
      return <View style={[tw`flex-1 py-6 px-6`, style]}>{children}</View>;
    }
  };

  const behavior = useMemo(
    () => (Platform.OS === 'android' ? 'height' : 'padding'),
    []
  );

  return (
    <Modal
      style={[tw`w-full self-center`]}
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <KeyboardAvoidingView style={[tw`flex-1`]} behavior={behavior}>
        {renderContent()}
      </KeyboardAvoidingView>
    </Modal>
  );
};

export const GenericModal = forwardRef<GenericModalRef, props>(
  GenericModalComponent
);
