import { memo, useMemo, type ReactNode } from 'react';
import {
  Text as RNText,
  // type NativeSyntheticEvent,
  type TextProps,
} from 'react-native';
import { tv } from 'tailwind-variants';
import type colors from '../../theme/colors';
// import tw from 'twrnc'
import tw from '../../lib/tailwind';

const textVariants = tv({
  base: 'text-left',
  variants: {
    // size: {
    //   1: '',// 'text-xs leading-xs tracking-xs', // font-size: 12px
    //   2: '',//'text-sm leading-sm tracking-sm', // font-size: 14px
    //   3: '',//'text-base leading-base tracking-base', // font-size: 16px
    //   4: '',//'text-lg leading-lg tracking-lg', // font-size: 18px
    //   5: '', //'text-xl leading-xl tracking-xl', // font-size: 20px
    //   6: '',//'text-2xl leading-2xl tracking-2xl', // font-size: 24px
    //   7: '',//'text-3xl leading-3xl tracking-3xl', // font-size: 28px
    //   8: '',//'text-4xl leading-4xl tracking-4xl', // font-size: 35px
    //   9: '',//'text-5xl leading-5xl tracking-5xl', // font-size: 60px
    // },
    size: {
      1: 'text-xs leading-xs tracking-xs', // font-size: 12px
      2: 'text-sm leading-sm tracking-sm', // font-size: 14px
      3: 'text-base leading-base tracking-base', // font-size: 16px
      4: 'text-lg leading-lg tracking-lg', // font-size: 18px
      5: 'text-xl leading-xl tracking-xl', // font-size: 20px
      6: 'text-2xl leading-2xl tracking-2xl', // font-size: 24px
      7: 'text-3xl leading-3xl tracking-3xl', // font-size: 28px
      8: 'text-4xl leading-4xl tracking-4xl', // font-size: 35px
      9: 'text-5xl leading-5xl tracking-5xl', // font-size: 60px
    },
    weight: {
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      gray: 'text-light-type-gray-muted dark:text-dark-type-gray-muted',
      error: 'text-light-type-error dark:text-dark-type-error',
      accent: 'text-light-type-accent dark:text-dark-type-accent',
      cyan: 'text-light-type-cyan dark:text-dark-type-cyan',
      info: 'text-light-type-info dark:text-dark-type-info',
      success: 'text-light-type-success dark:text-dark-type-success',
      tomato: 'text-light-type-tomato dark:text-dark-type-tomato',
      violet: 'text-light-type-violet dark:text-dark-type-violet',
      warning: 'text-light-type-warning dark:text-dark-type-warning',
    },
    highContrast: {
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [
    {
      color: 'gray',
      highContrast: true,
      class: 'text-light-type-gray dark:text-dark-type-gray',
    },
    {
      color: 'error',
      highContrast: true,
      class: 'text-light-type-error-bold dark:text-dark-type-error-bold',
    },
    {
      color: 'accent',
      highContrast: true,
      class: 'text-light-type-accent-bold dark:text-dark-type-accent-bold',
    },
    {
      color: 'cyan',
      highContrast: true,
      class: 'text-light-type-cyan-bold dark:text-dark-type-cyan-bold',
    },
    {
      color: 'info',
      highContrast: true,
      class: 'text-light-type-info-bold dark:text-dark-type-info-bold',
    },
    {
      color: 'success',
      highContrast: true,
      class: 'text-light-type-success-bold dark:text-dark-type-success-bold',
    },
    {
      color: 'tomato',
      highContrast: true,
      class: 'text-light-type-tomato-bold dark:text-dark-type-tomato-bold',
    },
    {
      color: 'violet',
      highContrast: true,
      className: 'text-light-type-violet-bold dark:text-dark-type-violet-bold',
    },
    {
      color: 'warning',
      highContrast: true,
      className:
        'text-light-type-warning-bold dark:text-dark-type-warning-bold',
    },
  ],
  defaultVariants: {
    size: 3,
    weight: 'medium',
    color: 'gray',
    highContrast: false,
    align: 'left',
  },
});

const Text = ({
  size = 3,
  color = 'gray',
  trim = 'normal',
  weight = 'regular',
  highContrast = false,
  align = 'left',
  children,
  className,
  ...rest
}: ITextProps) => {
  const variantClasses = useMemo(
    () => textVariants({ size, weight, align, color, highContrast }),
    [size, weight, align, color, highContrast]
  );

  return (
    <RNText
      //  className={`${variantClasses} ${className || ''}`}
      style={tw`${variantClasses} h-md ${className || ''}`}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default memo(Text);

type TailwindColorKey = keyof typeof colors.light.type;

interface TextOwnProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  color?: `${TailwindColorKey}`;
  trim?: 'normal' | 'start' | 'end' | 'both';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  highContrast?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: string | ReactNode;
}
export type ITextProps = TextOwnProps & Omit<TextProps, keyof TextOwnProps>;
