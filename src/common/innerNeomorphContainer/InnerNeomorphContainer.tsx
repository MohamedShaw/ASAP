import React, {ReactNode, useContext} from 'react';
import {ViewStyle} from 'react-native';
import {NeomorphFlex} from 'react-native-neomorph-shadows';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

interface Props {
  style?: ViewStyle;
  children?: ReactNode;
}

export const InnerNeomorphContainer: React.FC<Props> = (props) => {
  const {
    colors: {lightShadowColor, innerDarkShadowColor, backgroundColor},
  } = useSelector((state: RootStore) => state.theme);
  const {style, children} = props;

  return (
    <NeomorphFlex
      inner
      darkShadowColor={innerDarkShadowColor}
      lightShadowColor={lightShadowColor}
      style={{
        shadowOpacity: 1, // <- and this or yours opacity
        shadowRadius: 2,
        borderRadius: 4,
        backgroundColor,
        ...style,
      }}>
      {children}
    </NeomorphFlex>
  );
};
