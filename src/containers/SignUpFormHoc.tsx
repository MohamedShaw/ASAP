import {signUp} from 'api';
import {AppButton, AppInput, AppScreenContainer} from 'common';
import {Formik} from 'formik';
import I18n from 'i18n-js';
import { AppNavigation } from 'navigation';
import React from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from 'slices';
import {buildValidationSchema} from './validations';

export const SignUpFormHoc = () => {
  const dispatch = useDispatch();
  const renderBody = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldError,
    setFieldValue,
  }) => {
    return (
      <AppScreenContainer style={{marginTop: 20, paddingHorizontal: 0}}>
        <AppInput
          label="Name"
          value={values.name}
          onBlur={handleBlur('name')}
          onChangeText={handleChange('name')}
          error={errors.name}
        />
        <AppInput
          label="Email"
          value={values.email}
          onBlur={handleBlur('email')}
          onChangeText={handleChange('email')}
          error={errors.email}
        />

        <AppInput
          label="Password"
          value={values.password}
          onBlur={handleBlur('password')}
          onChangeText={handleChange('password')}
          error={errors.password}
        />

        <AppInput
          label="Age"
          value={values.age}
          onBlur={handleBlur('age')}
          onChangeText={handleChange('age')}
          error={errors.age}
        />

        <View style={{height: '25%', alignSelf: 'stretch'}} />
        <AppButton
          onPress={handleSubmit}
          title={I18n.t('sign_up')}
          processing={isSubmitting}
        />
      </AppScreenContainer>
    );
  };
  const onSubmit = async (values, setSubmitting) => {
    try {
      const res = await signUp(values);

      dispatch(login(res));
      AppNavigation.setRootScreen('home')
    } catch (error) {
    } finally {
      //   setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        age: '',
      }}
      validationSchema={buildValidationSchema}
      onSubmit={(values, {setSubmitting}) => onSubmit(values, {setSubmitting})}>
      {renderBody}
    </Formik>
  );
};
