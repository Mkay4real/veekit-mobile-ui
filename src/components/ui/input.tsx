/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import  {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ForwardRefRenderFunction,
} from 'react';

import {
  ActivityIndicator,
  type KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  type InputHandler,
} from '../../types/InputHandler'
import {formateCurrency, getAmountValue} from '../../common/utils';
import Eye from '../../images/svgs/Eye';
import EyeOff from '../../images/svgs/eye-off';
//import Clipboard from '@react-native-clipboard/clipboard';
import {FormInputContainer} from './form-input-container';
import type {WlvaInput} from '../../types/WlvaInput';
import tw from '../../lib/tailwind';





// type Ref = RefObject<TextInput>
const ipt: ForwardRefRenderFunction<InputHandler, WlvaInput> = (
  {
    placeholder,
    placeholderTextColor,
    value,
    style = {},
    secure = false,
    noCheck,
    validationRules,
    multiline,
    loading,
    onChangeText,
    onChange,
    confirmation,
    confirmationType = 'Passwords',
    editable,
    maxLength,
    keyboardType,
    leftItem,
    rightItem,
    leftContainerStyle,
    rightContainerStyle,
    onSubmitEditing,
    returnKeyType,
    onFocus,
    onBlur,
    range,
    label,
    bottomContent,
    inputStyle,
    type = 'text',
    autoCapitalize='none',
    autoComplete,
    textContentType,
    passwordRules,
    autoCorrect,
    formate,
    contentWrapperStyle,
    numberOfLines,
    errorLabel,
    noLabel,
    autofocus,
    onKeyPress,
    noAnim0=false
  },
  ref,
) => {
  const inputRef = useRef<TextInput>(null);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [text, setText] = useState('');
  const [secureTextVisible, setSecureTextVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [focused, setFocused] = useState(false);




  useEffect(() => {
    if (value) {
      handleOnChangeText(value);
    }
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

 /* useEffect(() => {
    if(value){
      handlePasteNotification(value)
    }
  },[value])
  */
  

  useEffect(() => {
    if (value || text) {
      if (value && !loaded) {
        setLoaded(true);
      }
    }
  }, [value, text, loaded, loading]);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef?.current?.focus();
    },

    checkValidation: () => {
      let errorCount = validate();
      return errorCount;
    },
    getValue() {
      return text;
    },
  }));



  /*
  const handlePasteNotification = async (txt:string) => {
   
    const ipfc = await isPastingFromClipboard(txt)
     if(ipfc){
       handlePasteEvent()
       clearClipboard()
     }
  }
     */

  const handleOnChangeText = (_text: string) => {
    let t = _text;
    if (formate === 'amount' && t) {
      t = formateCurrency(t);
    }
    setLoaded(true);
    if (onChangeText) {
      onChangeText(t);
    }
    if (onChange) {
      onChange(t);
    }
    setText(t);

   
  };

 /* const handlePasteEvent = () => {
   Alert.alert('NOTE: You are pasting information from the clipboard')
  }
   */

  const inputChange = (inputState?: 'blur' | 'focus') => {
    if (inputState === 'focus') {
      setFocused(true);
      if (onFocus) {
        onFocus();
      }
    } else if (inputState === 'blur') {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
   // triggerAnimation()
  };

  const handleValidationCheck = () => {
    if (noCheck) {
      return;
    }
    setError(false);
    setErrorMessage('');
    validate();
  };

  const validate = () => {
    if (validationRules) {
      const rules = validationRules.split('|');
      const errors = rules.filter((rule: string) => validationSwitch(rule));
      // show error
      if (errors && errors.length > 0) {
        setError(true);
      } else {
        setError(false);
      }
      return errors.length;
    }

    const hasError = validationSwitch();
    if (hasError) {
      return 1;
    }
    return 0;
  };

  const validationSwitch = (rule?: string) => {
   
    if(typeof label === 'undefined'){
      label = typeof errorLabel  === 'undefined' ? '' : errorLabel;
    }
    if (value && value.length > 0) {
      if (rule?.trim() === 'number') {
        const number = /^(\s*-?\d+(\.\d+)?)(\s*,\s*-?\d+(\.\d+)?)*$/;
        if (!number.test(value || '') && value !== '') {
          setError(true);
          setErrorMessage('Not a valid number');
          return true;
        }
      }
      if (rule?.trim() === 'digit') {
        const number = /^(\s*-?\d+)(\s*,\s*-?\d+)*$/;
        if (!number.test(value || '') && value !== '') {
          setError(true);
          setErrorMessage('Not a valid number (no decimals allowed)');
          return true;
        }
      }

      if (rule?.trim().includes('multiples')) {
        const [,multiplesValue] = rule?.trim().split(':');
        const numValue = Number(value.replace(/,/g,''));
        
        if (numValue % Number(multiplesValue) !== 0) {
          setError(true);
          setErrorMessage(`Amount must be in multiples of ${formateCurrency(multiplesValue!,true)}`);
          return true;
        }
      }

      if (rule?.trim() === 'alphanumeric') {
        const number = /^(\w)*$/;
        if (!number.test(value || '') && value !== '') {
          setError(true);
          setErrorMessage('Must contain letters, numbers and underscore only');
          return true;
        }
      }

      if (rule?.trim().includes('limit')) {
        const [,limitValue] = rule?.trim().split(':');
        const numValue = Number(value.replace(/,/g, ''));

        if (isNaN(numValue)  || numValue > Number(limitValue)) {
          setError(true);
          setErrorMessage('Limit exceeded');
          return true;
        }
      }

      if (rule?.trim().includes('balance')) {
        const [,balanceValue] = rule?.trim().split(':');
        const numValue = Number(value.replace(/,/g, ''));
       
        if (isNaN(numValue)  || numValue > Number(balanceValue)) {
          setError(true);
          setErrorMessage('Insufficient funds');
          return true;
        }
      }

      if (rule?.trim().includes('singleLimit')) {
        const [,limitValue] = rule?.trim().split(':');
        const numValue = Number(value.replace(/,/g, ''));

        if (isNaN(numValue)  || numValue > Number(limitValue)) {
          setError(true);
          setErrorMessage(`A single transaction amount must not exceed ${formateCurrency(limitValue!,true)}`);
          return true;
        }
      }

      if (rule?.trim().includes('length')) {
        const v = rule?.trim().split(':');

        if (value.length < parseInt(v[1]!, 10)) {
          setError(true);
          setErrorMessage(`${label} should be at least ${v[1]} characters`);
          return true;
        }
      }
      if (rule?.trim().includes('maxlength')) {
        const v = rule?.trim().split(':');

        if (value.length > parseInt(v[1]!, 10)) {
          setError(true);
          setErrorMessage(`Maximum of ${v[1]} characters allowed`);
          return true;
        }
      }

      if (rule?.trim() === 'confirm') {
        if (value !== confirmation && value !== '') {
          setError(true);
          setErrorMessage(`${confirmationType} do not match`);
          return true;
        }
      }

      if (rule?.trim() === 'range' && range) {
        if (
          +getAmountValue(value) > range.max ||
          +getAmountValue(value) < range.min
        ) {
          setError(true);
          setErrorMessage(
            `Input should be between ${formateCurrency(range.min,false)} and ${formateCurrency(range.max,false)}`,
          );
          return true;
        }
      }

      if (rule?.trim() === 'amount') {
        const trimmedValue = value.replace(/,/g,'');
        const number = /^\d+(\.\d{0,2})?$/;
        
        if (value.charAt(0) === '0' || !number.test(trimmedValue || '')) {
          setError(true);
          setErrorMessage(
            `Input should be a valid transaction amount`,
          );
          return true;
        }
      }

      if (rule?.trim() === 'email' || type === 'email') {
        const mail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!mail.test(value)) {
          setError(true);
          setErrorMessage('Email is invalid ');
          return true;
        }
      }

      if (rule?.trim() === 'phone' || type === 'phone') {
        const numberPhone = /^(234)?(0)?(7|8|9){1}(0|1){1}\d{8}$/;
        if (
          (!numberPhone.test(value) && value !== '') 
        ) {
          setError(true);
          setErrorMessage('Not a valid phone number');
          return true;
        }
      }

      if (rule?.trim() === 'password') {
        if (value.length < 6) {
          setErrorMessage('Should be at least 6 characters');
          return true;
        } else if (!value?.match(/(?=.*[A-Z])/)) {
          setErrorMessage('Password should have at least one uppercase');
          return true;
        } else if (!value?.match(/(?=.*[a-z])/)) {
          setErrorMessage('Password should have at least one lowercase');
          return true;
        } else if (!value?.match(/(?=.*[0-9])/)) {
          setErrorMessage('Password should have at least one numeric');
          return true;
        } else if (!value?.match(/[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
          setErrorMessage(
            'Password should have at least any of these special character !@#$%^&*?_~-()',
          );
          return true;
        }
      }
    }

    if (rule?.trim() === 'required') {
      if (!value || !value.trim()) {
        setError(true);
        setErrorMessage('Required');
        return true;
      }
    }

    return false;
  };

  const focusInput = () => {
    inputRef?.current?.focus();
    inputChange('focus');
  };

  const handleOnBlur = () => {
    handleValidationCheck();
    inputChange('blur');
  };

  const isSecureEntry = () => {
    if (secure) {
      return !secureTextVisible;
    }
    return false;
  };

  const getKeyboardType = (): KeyboardType => {
    if (keyboardType) {
      return keyboardType;
    }
    if (type === 'email') {
      return 'email-address';
    } else if (type === 'phone') {
      return 'phone-pad';
    } else {
      return 'default';
    }
  };

  const renderErrorMessage = () => {
    if (error) {
      return <Text style={{color: 'red', fontSize: 14, fontWeight: '500'}}>{errorMessage}</Text>;
    }
    return <></>;
  };

  const renderRightIcon = () => {
    if (secure && text && text.length) {
      // TODO: 
      const HideIcon = secureTextVisible ? Eye : EyeOff;
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              const d = secureTextVisible;
              setSecureTextVisible(!d);
            }}>
            <HideIcon
              fontSize={20}
              color="#000000"
              style={{alignSelf: 'center', marginTop: -5}}
            />
            <Text style={{color: '#fff'}}>eye</Text>
          </TouchableOpacity>
        </View>
      );
    }
    // TODO: loading should live side by side
    if (loading) {
      return (
        <View style={{}}>
          <ActivityIndicator
            color="#002668"
            style={{
              width: 12,
              height: 12,
            }}
          />
        </View>
      );
    }
    return rightItem;
  };

  const renderLeftIcon = () => {
    return leftItem;
  };

  /*const clearClipboard = () =>{
    Clipboard.setString('')
   }

  const isPastingFromClipboard = async (txt:string) => {
    const data2 = await Clipboard.getString()
   
    return data2.length > 0 && data2 === txt
  }
    */

  return (
    <View style={style}>
      {!noLabel &&  <Text style={{fontSize: 14, fontWeight: '500'}}>{errorMessage}</Text>}
      <FormInputContainer
        onFocus={focusInput}
        editable={editable}
        leading={renderLeftIcon()}
        trailing={renderRightIcon()}
        leftContainerStyle={leftContainerStyle}
        rightContainerStyle={rightContainerStyle}
        focused={focused}
        style={contentWrapperStyle}
        error={error}
        label={text.length < 1 ? '' : placeholder}
        >
        
          <TextInput
          ref={inputRef}
          autoFocus={autofocus}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor ?? "#979797"}
          editable={editable}
          onFocus={focusInput}
          onBlur={handleOnBlur}
          numberOfLines={numberOfLines}
          maxFontSizeMultiplier={1.2}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoComplete={autoComplete}
          textContentType={textContentType}
          passwordRules={passwordRules}
          style={[
            tw`bg-transparent flex-1  border-0 text-base pb-2`,
           // styles.input,
            inputStyle
          ]}
          blurOnSubmit={false}
          keyboardType={getKeyboardType()}
          underlineColorAndroid="transparent"
          multiline={multiline}
          maxLength={maxLength}
          selectionColor="#979797"
          returnKeyType={returnKeyType || 'default'}
          onSubmitEditing={() => {
            if (onSubmitEditing) {
              onSubmitEditing();
            }
          }}
          textAlignVertical="center"
          secureTextEntry={isSecureEntry()}
          value={value}
          onChangeText={handleOnChangeText}
          onKeyPress={onKeyPress}
        />
       
      </FormInputContainer>
      {renderErrorMessage()}
      {bottomContent}
    </View>
  );
};

const useStyle = () => {
 
  const styles = StyleSheet.create({
    input: {
      backgroundColor: 'transparent',
      flex: 1,
      margin: 0,
      borderWidth: 0,
      color: '#002668',
      //fontFamily: fonts.Gilroy_Regular,
      fontSize: 16,
    },
  });

  return styles;
};



export const Input = forwardRef(ipt);
