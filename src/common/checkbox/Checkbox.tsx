import React from 'react';
import {View, ViewProps, TouchableWithoutFeedback} from 'react-native';
import {AppText} from '../text/Text';
import {FixedInnerNeomorphContainer} from '../fixedInnerNeoumorphContainer/FixedInnerNeomorphContainer';
import {styles} from './style';
import {useTheme} from 'slices';
import {AppIcon} from '../icon/Icon';

interface Props extends ViewProps {
  active?: boolean;
  label?: string;
  onActive?: (active?: boolean) => void;
  disabled?: boolean;
}

export const AppCheckbox: React.FC<Props> = (props) => {
  const {active, label, style, onActive, disabled} = props;
  const {
    colors: {primary},
  } = useTheme();

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onPress={onActive ? () => onActive(!active) : undefined}>
      <View style={[styles.container, style]}>
        <FixedInnerNeomorphContainer style={styles.checkbox_button}>
          {active && <AppIcon name="Check" color={primary} />}
        </FixedInnerNeomorphContainer>
        {!!label && <AppText style={styles.label}>{label}</AppText>}
      </View>
    </TouchableWithoutFeedback>
  );
};
