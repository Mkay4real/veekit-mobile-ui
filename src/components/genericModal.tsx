/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */

import  {
    forwardRef,
    type ForwardRefRenderFunction,
    useImperativeHandle,
    useState,
    useMemo
  } from 'react';
  import {
    StyleSheet,
    ScrollView,
    View,
    KeyboardAvoidingView,
    Platform,
    type ViewStyle,
  } from 'react-native';

  import  Modal from 'react-native-modal';
  
  type props = {
    style?: ViewStyle,
    onClose: () => void,
    children: JSX.Element,
    scrollable?: boolean
  };
  
  export interface GenericModalRef {
    toggleModal(): void,
    closeModal(): void
  }
  
  
  const gm:ForwardRefRenderFunction<GenericModalRef,props> = ({
    style,
    onClose: _onClose,
    children,
    scrollable=false
  }, ref) => {
    const styles = useStyle()

    const [visible, setVisible] = useState(false);

    const toggle = () => {
      setVisible(prevState => {
        prevState && onClose()
        return !prevState
      });
    };

    const onClose = () => {
        setVisible(false)
         _onClose && _onClose()
      };
  
      useImperativeHandle(ref, () => ({
        toggleModal() {
          toggle();
        },
        closeModal() {
          toggle();
        },
      }));

      const renderContent = () => { 
        if(scrollable){
          return (
          
          <ScrollView contentContainerStyle={[styles.modal, style]} /*style={{flex: 1, height: '100%', paddingTop: '100%'}}*/>
           {children}
          </ScrollView>
          )
        }
        else{
          return (
           
            <View style={[styles.modal, style]}>
            {children}
             </View>
          )
        }
      }

      const behavior = useMemo(()=> (Platform.OS === 'android'? 'height': 'padding'), [])
  
    return (
        <Modal style={{width: '100%', alignSelf:'center'}} isVisible={visible} animationIn='slideInUp' animationOut='slideOutDown'>
         <KeyboardAvoidingView style={{ flex: 1 }} behavior={behavior}>
           {renderContent()}
         </KeyboardAvoidingView>
       
      </Modal>
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
        //lineHeight: responsiveFonts.h(25),
        textAlign: 'center',
        marginTop: '30%',
      },
      modal: {
          flex: 1,
          paddingVertical: 24,
          paddingHorizontal: 24,
          backgroundColor: 'rgba(0,0,0, 0.5)',
        },
    });

    return styles
  }
  
  
  
  export const GenericModal = forwardRef<GenericModalRef,props>(gm)
  