import React, {ReactNode, useContext} from 'react';
import {LayoutChangeEvent, ViewStyle} from 'react-native';
import {Layout} from 'react-native-navigation';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

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
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const FixedInnerNeomorphContainer: React.FC<Props> = (props) => {
  const {
    colors: {lightShadowColor, innerDarkShadowColor, backgroundColor},
  } = useSelector((state: RootStore) => state.theme);
  const {style, children, onLayout} = props;

  return (
    <Neomorph
      onLayout={onLayout}
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
    </Neomorph>
  );
};
