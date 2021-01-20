import React from 'react';
import {styles} from './style';
import {View} from 'react-native';
import {AppButton, AppText, AppModal, AppTextButton} from 'common';
import {useTheme} from 'slices/theme';
import i18n from 'react-native-i18n';

interface Props {
  isVisible: boolean;
  closable?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const ReqLocationPermissionModal: React.FC<Props> = (props) => {
  const {closable, isVisible, onConfirm, onClose} = props;
  const {
    colors: {white},
  } = useTheme();
  return (
    <AppModal
      onBackButtonPress={onClose}
      onBackdropPress={closable ? onClose : () => {}}
      isVisible={isVisible}>
      <View style={[styles.container, {backgroundColor: white}]}>
        <View style={styles.body}>
          {/* <AppImage source={locationPermIllustration} style={styles.image} /> */}
          <AppText style={[styles.title, {fontWeight: 'SemiBold'}]}>
            {i18n.t('location_permission_title')}
          </AppText>
          <AppText style={styles.message}>
            {i18n.t('location_permission_message')}
          </AppText>
        </View>
        <View style={styles.actions}>
          <AppButton
            touchableOpacity
            style={styles.go_to_setting}
            onPress={onConfirm}
            title={i18n.t('go_to_setting')}
          />
          <AppTextButton
            touchableOpacity
            onPress={onClose}
            style={{marginLeft: 10}}
            title={i18n.t('not_now')}
          />
        </View>
      </View>
    </AppModal>
  );
};

ReqLocationPermissionModal.defaultProps = {closable: true};

export {ReqLocationPermissionModal};
