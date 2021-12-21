import React, {useEffect, useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {
  View,
  RefreshControl,
  Alert,
  TouchableOpacity,
  ImageSourcePropType,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {
  AppScreenContainer,
  AppImage,
  responsiveHeight,
  AppText,
  responsiveFontSize,
  LIGHT_COLORS,
  AppInput,
} from 'common';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {Hint} from './Hint';
import I18n from 'react-native-i18n';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={400} />
  </Transition.Together>
);
interface Props {
  data?: {
    title?: String;
    image?: String;
    description?: String;
    price?: Number;
  };
}

export const Details: React.FC<Props> = (props) => {
  const {
    data: {title, image, price, description},
  } = props;
  const {titleColor, primary} = useSelector(
    (state: RootStore) => state.theme.colors,
  );

  const color = {color: titleColor};

  const [currentExpandedPanel, setCurrentExpandedPanel] = React.useState(0);
  const [currentExpandedPanel2, setCurrentExpandedPanel2] = React.useState(0);

  const ref = React.useRef<TransitioningView>(null);

  const onPress = (index: number) => () => {
    ref.current?.animateNextTransition();
    if (currentExpandedPanel === index) {
      setCurrentExpandedPanel(index);
    } else {
      setCurrentExpandedPanel(index);
    }
  };
  const onPress_2 = (index: number) => () => {
    ref.current?.animateNextTransition();
    if (currentExpandedPanel2 === index) {
      setCurrentExpandedPanel2(-1);
    } else {
      setCurrentExpandedPanel2(index);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{alignSelf: 'stretch', alignItems: 'center', flex: 1}}>
          <View style={styles.imageContainer}>
            <AppImage
              source={{uri: image}}
              resizeMode="stretch"
              style={styles.image}
            />
          </View>
        </View>
        <Transitioning.View
          ref={ref}
          transition={transition}
          style={[
            {
              overflow: 'hidden',
              borderRadius: 14,
              backgroundColor: 'transparent',
            },
            styles.list,
          ]}>
          <AccordianItem
            active={currentExpandedPanel === 0}
            key={'item.title'}
            {...{title: 'Image Info', answer: <Info />}}
            onPress={onPress(0)}
          />
        </Transitioning.View>
        <View
          style={{height: 2, alignSelf: 'stretch', backgroundColor: '#E3E3E3'}}
        />

        <Transitioning.View
          ref={ref}
          transition={transition}
          style={[
            {
              overflow: 'hidden',
              borderRadius: 14,
              backgroundColor: 'transparent',
            },
            styles.list,
          ]}>
          <AccordianItem
            active={currentExpandedPanel2 === 0}
            key={'item.title'}
            {...{title: 'Notes', answer: <DetailsProduct />}}
            onPress={onPress_2(0)}
          />
        </Transitioning.View>

       
      </View>
    </ScrollView>
  );
};

const Info = () => {
  return (
    <View style={{alignSelf: 'stretch', paddingBottom: 20}}>
      <RowData label="Model" value="GT2000" />
      <RowData label="Model Name" value="GT2000" />
      <RowData label="Model Type" value="GT2000" />
      <RowData label="Cost" value="GT2000" />
      <RowData label="Category" />
      <RowData label="Additional Describtion" />
    </View>
  );
};
const DetailsProduct = () => {
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState([]);
  return (
    <View>
    
      <View style={{alignItems: 'flex-end'}}>
        <RectButton
          onPress={() => {
            if (value) {
              setNotes([value, ...notes]);
              setValue('');
            }
          }}>
          <AppText>Save</AppText>
        </RectButton>
      </View>
      <AppInput
        style={{borderRadius: 25}}
        containerStyle={{borderRadius: 25, height: 45}}
        noValidation
        multiline
        value={value}
        onChangeText={setValue}
      />
      {notes ? (
        <>
          <AppText style={{marginVertical: 10}}>History</AppText>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 8,
              paddingVertical: 10,
              marginBottom: 20,
              borderRadius: 10,
            }}>
            {notes.map((i) => (
              <AppText style={{marginBottom: 5}}>{i}</AppText>
            ))}
          </View>
        </>
      ) : null}
    </View>
  );
};
const RowData = ({label, value}: {label: string; value?: string}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <AppText>{label}</AppText>
      {value && <AppText>{value}</AppText>}
    </View>
  );
};
function AccordianItem({
  title,
  active,
  answer,
  onPress,
}: {
  title: string;
  active: boolean;
  answer: any;
  onPress: () => void;
}) {
  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            paddingEnd: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
          },
          !active ? styles.borderStyle : {},
        ]}>
        <View style={{flex: 6}}>
          <Hint label={title} />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          {/* {active ? (
            <Icon name={require('@assets/img/chevronUp.png')} />
          ) : (
            <Icon name={require('@assets/img/chevronDown.png')} />
          )} */}
        </View>
      </TouchableOpacity>

      {active && <View>{answer}</View>}
    </View>
  );
}

interface Props {
  name: ImageSourcePropType;
  onPress?: () => void;
  color?: string;
  style?: StyleProp<ViewStyle>;
}
export function Icon({name, onPress, color, style}: Props) {
  return (
    <View
      onPress={onPress}
      style={[
        {
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <AppImage
        source={name}
        resizeMode="center"
        style={[
          {flex: 1, aspectRatio: 1, width: '100%', height: 'auto'},
          {tintColor: color},
        ]}
      />
    </View>
  );
}
