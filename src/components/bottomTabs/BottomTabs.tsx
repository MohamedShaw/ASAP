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
import Navigation from 'navigation/navigation';
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
    componentId: 'Component2',
  },
  {
    screen: 'profile',
    label: 'Add Item',
    iconName: 'add',
    componentId: 'Component3',
    // iconType: IconType.antDesign,
  },
];

export const BottomTabs = (props) => {
  // const {backgroundColor} = useSelector(
  //   (state: RootStore) => state.theme.colors,
  // );
  console.log('props--->', props);
  console.log('AppNavigation', AppNavigation.currentComponentId);

  const {componentId} = props;
  // const onSelect = useCallback((index) => {});
  const onSelect = useCallback((index) => {
    AppNavigation.navigateToTab(index);
  });

  return (
    <NeomorphContainer>
      <View style={[styles.content, {height: BOTTOM_BAR_HEIGHT}]}>
        {tabs.map((tab, index) => {
          return tab.componentId == componentId ? (
            <ActiveTabIcon key={index} {...tab} />
          ) : (
            <InActiveTabIcon
              key={index}
              // index={index}
              {...tab}
              onSelect={async () => {
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
