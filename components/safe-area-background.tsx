import { useColorScheme } from '@/hooks/use-color-scheme.web';
import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SafeAreaBackgroundProps extends ViewProps {
  children: ReactNode;
}

const SafeAreaBackground = ({ children, ...props }: SafeAreaBackgroundProps) => {

    const colorScheme = useColorScheme();

    return (
        <SafeAreaView {...props} style={{backgroundColor: colorScheme === 'dark' ? '#000' : '#fff', flex: 1}}>
            {children}
        </SafeAreaView>
    )
}

export default SafeAreaBackground