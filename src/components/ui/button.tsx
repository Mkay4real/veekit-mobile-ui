import React, {  } from 'react';
import {
  ActivityIndicator,
  type GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { tv } from 'tailwind-variants';
import tw from '../../lib/tailwind';

/**
 * Props for the Button component.
 */
export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  highContrast?: boolean;
  state?: ButtonState;
  iconStart?: boolean;
  iconEnd?: boolean;
  iconName?: string;
  className?: string;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  isLoading?: boolean;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  size = 'xl',
  variant = 'solid',
  color = 'accent',
  highContrast = false,
  state = 'default',
  iconStart = false,
  iconEnd = false,
  isLoading = false,
  className,
  text,
  onPress,
  textClassName = '',
  accessibilityLabel,
  accessibilityHint,
}) => {
  const buttonStyles = tv({
    base: 'flex items-center justify-center',
    variants: {
      size: {
        'sm': 'h-xl rounded-xs-max px-sm rounded-[8px] h-[36px] p-[8px] px-[14px]',
        'md': 'h-2xl rounded-xs-max px-md rounded-[8px] h-[40px] p-[10px] px-[16px]',
        'lg': 'h-4xl rounded-xs-max h-[44px] rounded-[8px] px-2xl  px-[18px] ',
        'xl': 'h-3xl rounded-xs-max rounded-[8px]  h-[48px]  px-xl py-sm py-[12px]  px-[20px]',
        '2xl': 'h-4xl rounded-xs-max rounded-[8px] h-[60px] px-2xl px-[28px]',
      },
      variant: {
        solid: highContrast ? 'bg-light-background-accent-bold dark:bg-dark-background-accent-bold' : 'bg-light-background-accent-base dark:bg-dark-background-accent-base',
        soft: highContrast ? 'bg-light-background-accent-light dark:bg-dark-background-accent-light' : 'bg-light-background-accent-light dark:bg-dark-background-accent-light',
        surface: highContrast ? 'bg-light-background-accent-light border border-light-edge-accent dark:border-dark-edge-accent' : 'bg-light-background-accent-light border border-light-edge-accent',
        outline: 'bg-transparent border border-light-edge-accent',
        ghost: 'bg-transparent',
      },
      state: {
        default: '',
        active: 'bg-light-background-accent-base-pressed dark:bg-dark-background-accent-base-pressed',
        disabled: 'bg-light-background-disable2 dark:bg-dark-background-disable2',
      },
      color: {
        default: '',
        accent: 'bg-[#101828]',
        neutral: '',
        error: '',
      },
    },
    compoundVariants: [
      {
        state: 'disabled',
        variant: 'solid',
        className: 'bg-light-background-disable2 dark:bg-dark-background-disable2',
      },
      {
        state: 'disabled',
        variant: 'soft',
        className: 'bg-light-background-disable2 dark:bg-dark-background-disable2',
      },
      {
        state: 'disabled',
        variant: 'surface',
        className: 'bg-light-background-disable2 border border-light-edge-disable dark:border-dark-edge-disable',
      },
    ],
  });

  const textStyles = tv({
    base: 'font-semibold',
    variants: {
      size: {
        'sm': 'text-sm-semibold text-sm font-semibold',
        'md': 'text-sm-semibold text-sm font-semibold',
        'lg': 'text-sm-semibold text-sm font-semibold',
        'xl': 'text-sm-semibold text-sm font-semibold',
        '2xl': 'text-sm-semibold text-sm font-semibold',
      },
      state: {
        default: 'text-white',
        active: 'opacity-70',
        disabled: 'text-light-type-gray-disabled dark:text-dark-type-gray-disabled',
      },
    },
  });

  // console.log("actualvalue",buttonStyles({ size, variant, state, color }));
  

  return (
    <TouchableOpacity
      onPress={onPress}
      // className={`${buttonStyles({ size, variant, state })} ${className || ''}`}
      style={tw`${buttonStyles({ size, variant, state, color })} ${className || ''}`}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || text}
      accessibilityHint={accessibilityHint}
      disabled={state === 'disabled'}
      accessibilityState={{ disabled: state === 'disabled' }}
    >
      <View className="flex items-center" style={tw`flex items-center`}>
        {iconStart && (
          <View className="mr-2">
            {/* TODO: Implemet the Icon Component */}
          </View>
        )}
        {isLoading ? (
          <ActivityIndicator animating size="small" color={textStyles({ size, state })} />
        ) : (
          <Text style={tw`${textStyles({ size, state })} ${textClassName}`}>
            {text}
          </Text>
        )}
        {iconEnd && (
          <View className="ml-2" style={tw`ml-2`}>
             {/* TODO: Implemet the Icon Component */}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

export type ButtonSize = 'sm' | 'md' | 'xl' | 'lg' | '2xl';
export type ButtonVariant = 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';
export type ButtonColor = 'accent' | 'neutral' | 'error';
export type ButtonState = 'default' | 'active' | 'disabled';
