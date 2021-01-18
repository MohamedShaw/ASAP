import React, {useState} from 'react';
import {SafeAreaView, Platform, View} from 'react-native';
import {IconType} from 'common';
import {ActiveTabIcon} from './ActiveTab';
import {styles} from './style';
import {InActiveTabIcon} from './InActiveTab';
import {NeomorphContainer} from 'common';
import {AddItem} from './AddItem';
// const dummyIcon = require('assets/imgs/dummy.png');

const BAR_HEIGHT_ANDROID = 59;
const BAR_HEIGHT_IOS = 63;
export const BOTTOM_BAR_HEIGHT =
  Platform.OS === 'ios' ? BAR_HEIGHT_IOS : BAR_HEIGHT_ANDROID;

export const tabs = [
  {
    screen: 'intro',
    label: 'home',
    iconName: 'home',
    // iconType: IconType.foundation,
  },

  {
    screen: 'intro',
    label: 'home',
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

  return (
    <NeomorphContainer>
      <View style={[styles.content, {height: BOTTOM_BAR_HEIGHT}]}>
        {tabs.map((tab, index) => {
          switch (tab.label) {
            case 'Add Item':
              return <AddItem />;
            default:
              return tab.label == active ? (
                <ActiveTabIcon key={index} {...tab} />
              ) : (
                <InActiveTabIcon
                  key={index}
                  // index={index}
                  {...tab}
                  onSelect={() => setActive(tab.label)}
                />
              );
          }
        })}
      </View>
      <SafeAreaView />
    </NeomorphContainer>
  );
};
