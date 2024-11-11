/* eslint-disable prettier/prettier */

import type { ReactNode } from "react";
import type { KeyboardType, ReturnKeyTypeOptions, StyleProp, TextStyle, ViewStyle } from "react-native";
import type { IAutoComplete, TextContentType } from "./InputHandler";

export type InputType = 'email' | 'phone' | 'text';

export interface WlvaInput {
    placeholder?: string;
    placeholderTextColor?: string;
    type?: InputType;
    value?: string;
    label?: string;
    style?: StyleProp<ViewStyle>;
    contentWrapperStyle?: StyleProp<ViewStyle>;
    secure?: boolean;
    confirmation?: string;
    confirmationType?: string;
    noCheck?: boolean;
    multiline?: boolean;
    editable?: boolean;
    maxLength?: number;
    loading?: boolean;
    validationRules?: string;
    keyboardType?: KeyboardType;
    text?: string;
    leftItem?: JSX.Element;
    rightItem?: JSX.Element;
    onChangeText?: (t: string) => void;
    onChange?: (t: string) => void;
    inputStyle?: StyleProp<TextStyle>;
    returnKeyType?: ReturnKeyTypeOptions;
    onBlur?: () => void;
    onFocus?: () => void;
    onSubmitEditing?: () => void;
    blurOnSubmit?: boolean;
    noLabel?: boolean;
    range?: {max: number; min: number};
    bottomContent?: ReactNode;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    autoComplete?: IAutoComplete;
    textContentType?: TextContentType;
    passwordRules?: string;
    autoCorrect?: boolean | undefined;
    formate?: 'amount';
    active?: boolean;
    numberOfLines?: number,
    errorLabel?: string
  }
  