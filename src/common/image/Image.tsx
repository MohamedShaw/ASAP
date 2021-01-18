import React from 'react';
import {PixelRatio} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';

export interface Props extends FastImageProps {}

export const AppImage: React.FC<Props> = (props) => {
  const {...rest} = props;
  return <FastImage {...rest} />;
};
