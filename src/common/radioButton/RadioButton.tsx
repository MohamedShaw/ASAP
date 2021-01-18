import React from 'react';
import {View, ViewProps, TouchableWithoutFeedback} from 'react-native';
import {AppText} from '../text/Text';
import {FixedInnerNeomorphContainer} from '../fixedInnerNeoumorphContainer/FixedInnerNeomorphContainer';
import {styles} from './style';
import {FixedNeomorphContainer} from '../fixedneomorphContainer/FixedNeomorphContainer';
import {useTheme} from 'slices';

interface Props extends ViewProps {
  active?: boolean;
  label?: string;
  onActive?: (active?: boolean) => void;
  disabled?: boolean;
}

export const AppRadioButton: React.FC<Props> = (props) => {
  const {active, label, style, onActive, disabled} = props;
  const {
    colors: {primary, textHintColor},
  } = useTheme();

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onPress={onActive ? () => onActive(!active) : undefined}>
      <View style={[styles.container, style]}>
        <FixedInnerNeomorphContainer style={styles.radio_button}>
          {active && (
            <FixedNeomorphContainer
              style={{...styles.active_view, backgroundColor: primary}}
            />
          )}
        </FixedInnerNeomorphContainer>
        {!!label && (
          <AppText style={[styles.label, !active && {color: textHintColor}]}>
            {label}
          </AppText>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
