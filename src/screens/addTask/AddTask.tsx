import React, {useState} from 'react';
import {AppButton, AppInput, AppScreenContainer} from 'common';
import {AppHeader} from 'components';
import axios from 'axios';
import {View} from 'react-native';
import {addTask} from 'api/ProductApi';
import { AppNavigation } from 'navigation';

export const AddTask = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    setLoading(true);
    if (!value) {
      return;
    }
    try {
      const res = await addTask(value);
      AppNavigation.pop()
    } catch (error) {
      console.log('errorr', JSON.parse(JSON.stringify(error)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppScreenContainer style={{flex: 1}}>
      <AppHeader title="Add Task" />
      <View style={{flexGrow: 1, alignSelf: 'stretch'}}>
        <AppInput
          value={value}
          onChangeText={(text) => setValue(text)}
          multiline
          label="description"
          inputHeight={120}
          containerStyle={{
            height: 120,
            marginTop: 50,
          }}
        />
        <View style={{flexGrow: 1}} />
        <AppButton title="Add task" onPress={onSubmit} processing={loading} />
      </View>
    </AppScreenContainer>
  );
};
