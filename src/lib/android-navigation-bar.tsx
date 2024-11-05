// import * as NavigationBar from 'expo-navigation-bar';
import { Platform, StatusBar } from 'react-native';
// import { NAV_THEME } from '~/lib/constants';
export async function setAndroidNavigationBar(theme: 'light' | 'dark') {
  if (Platform.OS !== 'android') return;
  // await Status.setButtonStyleAsync(theme === 'dark' ? 'light' : 'dark');
  await StatusBar.setBarStyle(theme === 'dark' ? 'light-content' : 'dark-content');
  // await StatusBar.setBackgroundColorAsync(
  //   theme === 'dark' ? NAV_THEME.dark.background : NAV_THEME.light.background
  // );
}