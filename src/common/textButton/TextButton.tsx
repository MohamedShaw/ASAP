import React, {ReactNode, useContext} from 'react';
import {ViewStyle, View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {styles} from './styles';
import {AppText} from '../text/Text';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

interface Props {
  title?: string;
  style?: ViewStyle;
  onPress?: () => void;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
}

export const AppTextButton = (props: Props) => {
  const {onPress, leftItem, rightItem, style, title} = props;
  const {
    colors: {primary},
  } = useSelector((state: RootStore) => state.theme);

  return (
    <View style={[styles.container, style]}>
      <BorderlessButton style={styles.content} onPress={onPress}>
        {leftItem}
        <View style={styles.text_container}>
          <AppText
            style={[styles.text, {color: primary, fontWeight: 'Medium'}]}>
            {title}
          </AppText>
        </View>
        {rightItem}
      </BorderlessButton>
    </View>
  );
};
