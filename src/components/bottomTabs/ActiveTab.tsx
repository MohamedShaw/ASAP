import React from 'react';
import {AppIcon, FixedInnerNeomorphContainer, IconType} from 'common';
import {styles} from './style';
import {RootStore} from 'store';
import {useSelector} from 'react-redux';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {View} from 'react-native';

export interface Props {
  iconName: string;
  label: string;
  iconType?: IconType;
  screen: string;
  index?: number;
  onSelect?: () => void;
}

export const ActiveTabIcon: React.FC<Props> = (props: Props) => {
  const {iconName, label, iconType, screen, onSelect} = props;
  const {primary} = useSelector((state: RootStore) => state.theme.colors);
  return (
    <View style={styles.icon}>
      <FixedInnerNeomorphContainer style={styles.icon_container}>
        <AppIcon
          color={primary}
          name={iconName}
          size={24}
          type={iconType}
          onPress={() => {
            onSelect();
          }}
        />
      </FixedInnerNeomorphContainer>
    </View>
  );
};
