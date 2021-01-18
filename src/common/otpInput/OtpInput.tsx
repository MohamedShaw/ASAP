import React, {forwardRef, useEffect, useState} from 'react';
import {styles} from './style';
import {FixedInnerNeomorphContainer} from '../fixedInnerNeoumorphContainer/FixedInnerNeomorphContainer';
import {AppText} from '../text/Text';
import {
  CodeField,
  useClearByFocusCell,
  Cursor,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

interface Props {
  CELL_COUNT?: number;
  value?: string;
  setValue: (value: string) => void;
  error?: string;
  noValidation?: boolean;
  onSubmit?: () => void;
}

export const OtpInput: React.FC<Props> = (props) => {
  const {
    value,
    setValue,
    CELL_COUNT = 4,
    error,
    noValidation,
    onSubmit,
  } = props;
  const {primary, textHintColor, errorTextColor, textColor} = useSelector(
    (state: RootStore) => state.theme.colors,
  );
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    setTimeout(() => {
      ref?.current?.focus();
    }, 500);
  }, [ref]);

  return (
    <>
      <CodeField
        ref={ref}
        {...codeFieldProps}
        cellCount={CELL_COUNT}
        value={value}
        onBlur={value?.length === CELL_COUNT ? onSubmit : undefined}
        onChangeText={setValue}
        // autoFocus
        rootStyle={styles.container}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <FixedInnerNeomorphContainer
            key={index}
            style={styles.cell}
            onLayout={getCellOnLayout(index)}>
            <AppText
              style={[
                styles.text,
                {
                  color: isFocused
                    ? primary
                    : symbol
                    ? textColor
                    : textHintColor,
                  fontWeight: 'SemiBold',
                },
              ]}>
              {symbol || (isFocused ? <Cursor /> : '-')}
            </AppText>
          </FixedInnerNeomorphContainer>
        )}
      />
      {!noValidation && (
        <AppText style={[styles.error, {color: errorTextColor}]}>
          {error}
        </AppText>
      )}
    </>
  );
};
