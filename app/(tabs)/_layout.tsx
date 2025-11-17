import { useColorScheme } from '@/hooks/use-color-scheme';
import { AntDesign } from '@expo/vector-icons';
import { Icon, Label, NativeTabs, VectorIcon } from 'expo-router/unstable-native-tabs';
import React from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NativeTabs
    >
      <NativeTabs.Trigger name="courses">
        <Label>Courses</Label>
        <Icon src={<VectorIcon family={AntDesign} name="book" />} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='tutor-sessions'>
        <Label>Tutor AI</Label>
        <Icon sf="book.fill" drawable="custom_android_drawable_tutor" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        <Icon sf="person.fill" drawable="custom_android_drawable_profile" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
