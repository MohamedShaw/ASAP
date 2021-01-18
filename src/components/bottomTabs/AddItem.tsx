import React from 'react';
import {
  AppIcon,
  FixedInnerNeomorphContainer,
  IconType,
  AppButton,
  LIGHT_COLORS,
} from 'common';
import {styles} from './style';

import {AppNavigation} from 'navigation';
import I18n from 'react-native-i18n';

export interface Props {}

export const AddItem: React.FC<Props> = (props: Props) => {
  return (
    <FixedInnerNeomorphContainer style={styles.addItemContainer}>
      <AppButton
        onPress={() => AppNavigation.push('selectCatogery')} 
        style={[styles.addItem]}
        title={I18n.t('add_item')}
        textStyle={[styles.addItemText, {fontWeight: 'Bold'}]}
        leftItem={
          <AppIcon
            color={LIGHT_COLORS.white}
            name={'add'}
            size={24}
            style={{
              marginHorizontal: 5,
            }}
          />
        }
      />
    </FixedInnerNeomorphContainer>
  );
};
