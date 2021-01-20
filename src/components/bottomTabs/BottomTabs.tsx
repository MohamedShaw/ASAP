import React, {useState, useCallback} from 'react';
import {SafeAreaView, Platform, View} from 'react-native';
import I18n from 'react-native-i18n';
import {
  IconType,
  windowWidth,
  AppButton,
  FixedInnerNeomorphContainer,
  AppIcon,
  LIGHT_COLORS,
} from 'common';
import {ActiveTabIcon} from './ActiveTab';
import {styles} from './style';
import {InActiveTabIcon} from './InActiveTab';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {NeomorphContainer} from 'common';
import {AppNavigation} from 'navigation';
import {AddItem} from './AddItem';
// const dummyIcon = require('assets/imgs/dummy.png');

const BAR_HEIGHT_ANDROID = 59;
const BAR_HEIGHT_IOS = 63;
export const BOTTOM_BAR_HEIGHT =
  Platform.OS === 'ios' ? BAR_HEIGHT_IOS : BAR_HEIGHT_ANDROID;

export const tabs = [
  {
    screen: 'home',
    label: 'home',
    iconName: 'home',
    // iconType: IconType.foundation,
  },
  {
    screen: 'profile',
    label: 'Add Item',
    iconName: 'add',
    // iconType: IconType.antDesign,
  },
];

export const BottomTabs = () => {
  // const {backgroundColor} = useSelector(
  //   (state: RootStore) => state.theme.colors,
  // );
  const [active, setActive] = useState('home');
  // const {componentId} = props;
  // const onSelect = useCallback((index) => {});
  const onSelect = useCallback((index) => {
    AppNavigation.navigateToTab(index);
  });

  return (
    <NeomorphContainer>
      <View style={[styles.content, {height: BOTTOM_BAR_HEIGHT}]}>
        {tabs.map((tab, index) => {
          return tab.label == active ? (
            <ActiveTabIcon key={index} {...tab} />
          ) : (
            <InActiveTabIcon
              key={index}
              // index={index}
              {...tab}
              onSelect={async () => {
                await setActive(tab.label);
                onSelect(index);
              }}
            />
          );
        })}
        {/* <AddItem /> */}
      </View>
      <SafeAreaView />
    </NeomorphContainer>
  );
};
