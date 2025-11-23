import { useHookColor } from '@/hooks/use-hook-color';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View, ViewProps } from 'react-native';
import { Card, Icon } from 'react-native-paper';

export type CardProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
    title: string;
    destiny: string;
    icon: string;
}

const CardComponent = ({title, style, lightColor, darkColor, destiny, icon, ...props}: CardProps) => {
    const getColor = useHookColor(lightColor, darkColor);
    const backgroundColor = getColor('card');
    const textColor = getColor('text');

    const router = useRouter();

    const onPress = () => {
        router.push(destiny as Href);
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Card {...props} style={[{ backgroundColor, padding: 12, borderRadius: 8}, style]}>
                <View className='flex-row items-center gap-2'>
                    <View>
                        <Icon source={icon} size={24} color={textColor} />
                    </View>
                    <View className='flex-1'>
                        <Card.Title title={title} titleStyle={{color: textColor }}/>
                    </View>
                    <View>
                        <Icon source={"chevron-right"} size={24} color={textColor} />
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default CardComponent