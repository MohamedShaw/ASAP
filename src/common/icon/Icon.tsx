import React, {useContext} from 'react';
import {getIconType, IconType} from '../utils/icon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconProps} from 'react-native-vector-icons/Icon';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

export interface Props extends IconProps {
  type?: IconType;
}

export const AppIcon: React.FC<Props> = (props) => {
  const {type, color, ...rest} = props;
  const VectorIcon = getIconType(type || IconType.custom) as typeof AntDesign;
  const {
    colors: {iconColor},
  } = useSelector((state: RootStore) => state.theme);

  return <VectorIcon color={color || iconColor} {...rest} />;
};
