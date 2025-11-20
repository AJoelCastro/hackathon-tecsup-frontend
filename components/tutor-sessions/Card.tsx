import { useHookColor } from '@/hooks/use-hook-color';
import React from 'react';
import { View, ViewProps } from 'react-native';
import { Card, Icon } from 'react-native-paper';

export type CardProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
    title?: string;
}

const CardComponent = ({title, style, lightColor, darkColor, ...props}: CardProps) => {
    const getColor = useHookColor(lightColor, darkColor);
    const backgroundColor = getColor('card');
    const textColor = getColor('text');
    return (
        <Card {...props} style={[{ backgroundColor, padding: 12, borderRadius: 8}, style]}>
            <View className='flex-row items-center gap-2'>
                <View >
                    <Icon source={"camera"} size={24} color={textColor} />
                </View>
                <View className='flex-1'>
                    <Card.Title title={title} titleStyle={{color: textColor }}/>
                </View>
                <View>
                    <Icon source={"chevron-right"} size={24} color={textColor} />
                </View>
            </View>
        </Card>
    )
}

export default CardComponent