import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from '../../lib/tailwind';
interface ListItemProps {
    title: string;
    subtitle?: string;
    extra?: string;
    separator?: boolean;
    subTrigger?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onPress?: () => void;
    order?: 'default' | 'reverse';
    variant?: 'default' | 'data';
}

const ListItem: React.FC<ListItemProps> = ({
    title,
    subtitle,
    extra,
    separator = true,
    subTrigger = false,
    onPress,
    leadingIcon,
    trailingIcon,
    variant = 'default',
    order = 'default',
}) => {
    return (
        <Pressable onPress={onPress} style={tw`flex-row items-center justify-between py-2 px-3   ${separator ? 'border-b border-gray-300 ' : 'border-b-0'}`}>
            <View style={tw`flex-1 ${order === 'reverse' ? 'flex-col-reverse' : ''}`}>
                <Text style={tw`text-md-title font-bold text-gray-800`}>{title}</Text>
                {!!subtitle && <Text style={tw`text-xs-body text-gray-500`}>{subtitle}</Text>}
                {!!extra && <Text style={tw`text-md-title font-bold text-gray-800`}>{extra}</Text>}
            </View>
            {subTrigger && (
                <View
                    style={tw`ml-sm justify-center self-center items-center`}>
                    {/* <Icon
            name="arrow-right-wide-fill"
            color={colors['light'].type.gray.DEFAULT}
            size={24}
          /> */}
                </View>
            )}
        </Pressable>
    );
};

export default ListItem;
