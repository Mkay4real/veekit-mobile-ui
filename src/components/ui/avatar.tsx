import React from 'react';
import { useColorScheme } from 'nativewind';
import { Image, Text, View } from 'react-native';
import getInitials from '../../lib/initials';
import { cn } from '../../lib/utils';
import tw from '../../lib/tailwind';

export interface AvatarProps {
  /**
   * The size of the avatar.
   * Determines the dimensions and text size of the avatar.
   * Default is 4.
   */
  size?: AvatarSize;

  /**
   * The visual style of the avatar.
   * Options are 'solid' or 'soft'. Default is 'solid'.
   */
  variant?: AvatarVariant;

  /**
   * The color scheme of the avatar.
   * Options include 'accent', 'neutral', 'success', 'error', 'warning', 'info'.
   * Default is 'neutral'.
   */
  color?: AvatarColor;

  /**
   * Flag indicating if the avatar should use high contrast colors.
   * Default is false.
   */
  highContrast?: boolean;

  /**
   * The fallback method for displaying the avatar.
   * Options are 'image', 'initials', or 'icon'. Default is 'initials'.
   */
  fallBack?: AvatarFallback;

  /**
   * Optional status indicator for the avatar (e.g., online/offline).
   * Not currently implemented in the component.
   */
  status?: boolean;

  /**
   * The initials to display if using the initials fallback.
   * Default is an empty string.
   */
  initials?: string;

  /**
   * The URL of the image to display if using the image fallback.
   * Default is an empty string.
   */
  imageUrl?: string;

  /**
   * Optional custom icon to display if using the icon fallback.
   * Default is the user icon.
   */
  icon?: React.ReactNode;

  /**
   * The number of initials to display if using the initials fallback.
   * Options are 1 or 2. Default is 1.
   */
  numberOfInitials?: NumberOfInitials;

  /**
   * Accessibility label for the avatar.
   * Default is an empty string.
   */
  accessibilityLabel?: string;
}

/**
 * Avatar is a functional component that displays an avatar image,
 * initials, or an icon based on the provided props.
 * It supports multiple sizes, variants, colors, and fallback options.
 */
const Avatar: React.FC<AvatarProps> = ({
  size = 1,
  variant = 'solid',
  color = 'info',
  highContrast = false,
  fallBack = 'initials',
  initials = '',
  imageUrl,
  numberOfInitials = 1,
  accessibilityLabel = '',
}) => {
  const { colorScheme } = useColorScheme();
  //@ts-ignore ignore unused for now
  const isDarkMode = colorScheme === 'dark';

  const avatarSizeStyle = sizeStyles[size];
  const textColor = highContrast
    ? highContrastTextColors[color][variant]
    : textColors[color][variant];
  const avatarColor = highContrast
    ? highContrastAvatarColors[color][variant]
    : avatarColors[color][variant];
  const textSizeStyle = textSizes[size];

  //   const iconSize = iconSizes[size];

  const renderAvatar = () => {
    switch (fallBack) {
      case 'image':
        return imageUrl ? (
          <View
            style={tw`${avatarSizeStyle} flex items-center justify-center`}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="image"
          >
            <Image
              source={{ uri: imageUrl }}
              style={tw`${avatarSizeStyle}`}
              resizeMode="cover"
              accessible={false}
            />
          </View>
        ) : null;
      case 'initials':
        return (
          <View
            style={tw`${cn(avatarSizeStyle, avatarColor)} flex items-center justify-center`}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="text"
          >
            <Text style={tw`${cn(textSizeStyle, textColor)}`}>
              {getInitials(initials, numberOfInitials)}
            </Text>
          </View>
        );
      //   case 'icon':
      //     return (
      //       <View
      //         className={`${classNames(avatarSizeStyle, avatarColor)} flex items-center justify-center`}
      //         accessibilityLabel={accessibilityLabel}
      //         accessibilityRole="image">
      //         <Icon
      //           name="user-6-line"
      //           size={iconSize}
      //           color={colors[isDarkMode ? 'dark' : 'light'].amber1}
      //         />
      //       </View>
      //     )
      default:
        return null;
    }
  };

  return <>{renderAvatar()}</>;
};

export default Avatar;

export type AvatarSize = 1 | 2 | 3 | 4 | 5;
export type AvatarVariant = 'solid' | 'soft';
export type AvatarColor =
  | 'accent'
  | 'neutral'
  | 'success'
  | 'error'
  | 'warning'
  | 'info';
export type AvatarFallback = 'image' | 'initials' | 'icon';
export type NumberOfInitials = 1 | 2;

export interface AvatarProps {
  size?: AvatarSize;
  variant?: AvatarVariant;
  color?: AvatarColor;
  highContrast?: boolean;
  fallBack?: AvatarFallback;
  status?: boolean;
  initials?: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  numberOfInitials?: NumberOfInitials;
}

export const sizeStyles: Record<AvatarSize, string> = {
  1: 'w-[45px] h-[45px] rounded-full',
  2: 'w-2xl h-2xl rounded-full',
  3: 'w-3xl h-3xl rounded-full',
  4: 'w-4xl h-4xl rounded-full',
  5: 'w-5xl h-5xl rounded-full',
};

export const textSizes: Record<AvatarSize, string> = {
  1: 'text-xs-head font-medium leading-4',
  2: 'text-sm-title font-medium leading-5',
  3: 'text-base-title font-medium leading-6',
  4: 'text-lg-title font-medium leading-[26px]',
  5: 'text-2xl-title font-medium leading-[30px]',
};

export const iconSizes: Record<AvatarSize, number> = {
  1: 16,
  2: 16,
  3: 16,
  4: 18,
  5: 20,
};

export const avatarColors: Record<
  AvatarColor,
  Record<AvatarVariant, string>
> = {
  accent: {
    solid:
      'bg-light-background-accent-base dark:bg-dark-background-accent-base',
    soft: 'bg-light-background-accent-lighter dark:bg-dark-background-accent-lighter',
  },
  neutral: {
    solid:
      'bg-light-background-neutral-base dark:bg-dark-background-neutral-base',
    soft: 'bg-light-background-neutral-light dark:bg-dark-background-neutral-light',
  },
  success: {
    solid:
      'bg-light-background-success-base dark:bg-dark-background-success-base',
    soft: 'bg-light-background-success-light dark:bg-dark-background-success-light',
  },
  error: {
    solid: 'bg-light-background-error-base dark:bg-dark-background-error-base',
    soft: 'bg-light-background-error-light dark:bg-dark-background-error-light',
  },
  warning: {
    solid:
      'bg-light-background-warning-base dark:bg-dark-background-warning-base',
    soft: 'bg-light-background-warning-light dark:bg-dark-background-warning-light',
  },
  info: {
    solid: 'bg-light-background-info-base dark:bg-dark-background-info-base',
    soft: 'bg-light-background-info-light dark:bg-dark-background-info-light',
  },
};

export const textColors: Record<AvatarColor, Record<AvatarVariant, string>> = {
  accent: {
    solid: 'text-white',
    soft: 'text-light-type-accent dark:text-dark-type-accent',
  },
  neutral: {
    solid: 'text-white',
    soft: 'text-light-type-gray-muted dark:text-dark-type-gray-muted',
  },
  success: {
    solid:
      'text-light-type-success-inverse dark:text-dark-type-success-inverse',
    soft: 'text-light-type-success dark:text-dark-type-success',
  },
  error: {
    solid: 'text-white',
    soft: 'text-light-type-error dark:text-dark-type-error',
  },
  warning: {
    solid: 'text-black',
    soft: 'text-light-type-warning dark:text-dark-type-warning',
  },
  info: {
    solid: 'text-black',
    soft: 'text-light-type-info dark:text-dark-type-info',
  },
};

export const highContrastAvatarColors: Record<
  AvatarColor,
  Record<AvatarVariant, string>
> = {
  accent: {
    solid:
      'bg-light-background-accent-bold dark:bg-dark-background-accent-bold',
    soft: 'bg-light-background-accent-lighter dark:bg-dark-background-accent-lighter',
  },
  neutral: {
    solid:
      'bg-light-background-neutral-bold dark:bg-dark-background-neutral-bold',
    soft: 'bg-light-background-neutral-light dark:bg-dark-background-neutral-light',
  },
  success: {
    solid:
      'bg-light-background-success-bold dark:bg-dark-background-success-bold',
    soft: 'bg-light-background-success-light dark:bg-dark-background-success-light',
  },
  error: {
    solid: 'bg-light-background-error-bold dark:bg-dark-background-error-bold',
    soft: 'bg-light-background-error-light dark:bg-dark-background-error-light',
  },
  warning: {
    solid:
      'bg-light-background-warning-bold dark:bg-dark-background-warning-bold',
    soft: 'bg-light-background-warning-light dark:bg-dark-background-warning-light',
  },
  info: {
    solid: 'bg-light-background-info-bold dark:bg-dark-background-info-bold',
    soft: 'bg-light-background-info-light dark:bg-dark-background-info-light ',
  },
};

export const highContrastTextColors: Record<
  AvatarColor,
  Record<AvatarVariant, string>
> = {
  accent: {
    solid: 'text-light-type-accent-inverse dark:text-dark-type-accent-inverse',
    soft: 'text-light-type-accent-bold dark:text-dark-type-accent-bold',
  },
  neutral: {
    solid: 'text-light-type-gray-inverse dark:text-dark-type-gray-inverse',
    soft: 'text-light-type-gray dark:text-dark-type-gray',
  },
  success: {
    solid:
      'text-light-type-success-inverse dark:text-dark-type-success-inverse',
    soft: 'text-light-type-success-bold dark:text-dark-type-success-bold',
  },
  error: {
    solid: 'text-light-type-error-inverse dark:text-dark-type-error-inverse',
    soft: 'text-light-type-error-bold dark:text-dark-type-error-bold',
  },
  warning: {
    solid:
      'text-light-type-warning-inverse dark:text-dark-type-warning-inverse',
    soft: 'text-light-type-warning-bold dark:text-dark-type-warning-bold ',
  },
  info: {
    solid: 'text-light-type-info-inverse dark:text-dark-type-info-inverse',
    soft: 'text-light-type-info-bold dark:text-dark-type-info-bold',
  },
};
