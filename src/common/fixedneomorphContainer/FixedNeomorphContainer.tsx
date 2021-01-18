import React, {ReactNode, useContext} from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {ViewStyle} from 'react-native';

/**
 * Defines all flex properties
 */
type FlexStyleProperties =
  | 'flex'
  | 'alignSelf'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexBasis';

/**
 * View styles without flex properties because they are not supported
 */
type ViewStyleWithoutFlex = Pick<
  ViewStyle,
  Exclude<keyof ViewStyle, FlexStyleProperties>
>;

interface ViewStyleWithShadow extends ViewStyleWithoutFlex {
  shadowOffset?: {
    width: number;
    height: number;
  };
  shadowOpacity?: number;
  shadowColor?: string;
  shadowRadius?: number;
  borderRadius?: number;
  backgroundColor?: string;
  width: number;
  height: number;
}

interface Props {
  children?: ReactNode;
  style: ViewStyleWithShadow;
}

export const FixedNeomorphContainer: React.FC<Props> = (props) => {
  const {
    colors: {lightShadowColor, darkShadowColor, backgroundColor},
  } = useSelector((state: RootStore) => state.theme);
  const {style, children} = props;

  return (
    <Neomorph
      darkShadowColor={darkShadowColor}
      lightShadowColor={lightShadowColor}
      style={{
        shadowOpacity: 0.6, // <- and this or yours opacity
        shadowRadius: 5,
        borderRadius: 4,
        backgroundColor,
        ...style,
      }}>
      {children}
    </Neomorph>
  );
};
