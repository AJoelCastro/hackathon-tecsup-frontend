import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type ColorKey = keyof typeof Colors.light & keyof typeof Colors.dark;

export function useHookColor(
  lightColor?: string,
  darkColor?: string
) {
  const theme = useColorScheme() ?? 'light';

  return (colorName: ColorKey): string => {
    const colorFromProps = theme === 'dark' ? darkColor : lightColor;
    return colorFromProps ?? Colors[theme][colorName];
  };
}
