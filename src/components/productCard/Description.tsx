import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {
  AppText,
  LIGHT_COLORS,
  AppImage,
  NeomorphContainer,
  responsiveFontSize,
  AppIconButton,
  FixedNeomorphContainer,
  IconType,
  AppSpinner,
} from 'common';
import {addToCart, removeItemCart} from 'slices/cart';
import {useDispatch} from 'react-redux';
import {useTheme} from 'slices';
import {deleteTask} from 'api/ProductApi';

interface Props {
  title?: String;
  id: string;
}

export const Description: React.FC<Props> = ({title, id}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const removeTask = async () => {
    setLoading(true);
    try {
      const res = await deleteTask(id);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.textContainer}>
      <AppText
        numberOfLines={2}
        style={{
          fontWeight: 'SemiBold',
        }}>
        {title}
      </AppText>

      <View style={styles.trashIcon}>
        {loading ? (
          <AppSpinner />
        ) : (
          <AppIconButton
            name="trash"
            color={LIGHT_COLORS.errorBackground}
            size={responsiveFontSize(10)}
            onPress={removeTask}
          />
        )}
      </View>
    </View>
  );
};

const ActionButton = ({onPress, iconName, enabled = true, ...rest}) => {
  const {
    colors: {iconColor, backgroundColor},
  } = useTheme();
  return (
    <FixedNeomorphContainer style={styles.back_icon_container}>
      <AppIconButton
        onPress={onPress}
        style={styles.back_icon}
        {...rest}
        containerStyle={[
          styles.back_icon_container,
          {
            backgroundColor: !enabled
              ? LIGHT_COLORS.placeHolderColor
              : 'transparent',
          },
        ]}
        name={iconName}
        size={20}
        color={iconColor}
        enabled={enabled}
      />
    </FixedNeomorphContainer>
  );
};
