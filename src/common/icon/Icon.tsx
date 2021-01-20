import React, {useContext} from 'react';
import {getIconType, IconType} from '../utils/icon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconProps} from 'react-native-vector-icons/Icon';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {Lang} from 'translation';
import i18n from 'react-native-i18n';
export interface Props extends IconProps {
  type?: IconType;
  flip?: boolean;
}

export const AppIcon: React.FC<Props> = (props) => {
  const {type, color, flip = true, style, ...rest} = props;
  const VectorIcon = getIconType(type || IconType.custom) as typeof AntDesign;
  const {
    colors: {iconColor},
  } = useSelector((state: RootStore) => state.theme);
  const rtl = i18n.locale == Lang.ar;
  const flipDirectionStyles = flip && rtl ? {transform: [{scaleX: -1}]} : {};

  return (
    <VectorIcon
      color={color || iconColor}
      {...rest}
      style={[style, flipDirectionStyles]}
    />
  );
};
