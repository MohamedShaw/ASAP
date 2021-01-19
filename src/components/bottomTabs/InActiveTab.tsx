import React from 'react';
import {AppIcon} from 'common';
import {Props} from './ActiveTab';
import {FixedNeomorphContainer} from 'common';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {RectButton} from 'react-native-gesture-handler';
import {TouchableWithoutFeedback, View, Alert} from 'react-native';

export const InActiveTabIcon: React.FC<Props> = (props: Props) => {
  const {iconName, iconType, onSelect} = props;
  const {bottomTabsIconColor} = useSelector(
    (state: RootStore) => state.theme.colors,
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onSelect();
      }}>
      <View style={styles.icon}>
        <FixedNeomorphContainer style={styles.icon_container}>
          <AppIcon
            color={bottomTabsIconColor}
            name={iconName}
            size={24}
            type={iconType}
          />
        </FixedNeomorphContainer>
      </View>
    </TouchableWithoutFeedback>
  );
};
