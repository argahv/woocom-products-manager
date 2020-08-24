import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {createStructuredSelector} from 'reselect';
import {StyleSheet, Text} from 'react-native';
import {MainLayout, Toolbar} from '../../../components';
import {BackIcon} from '../../../assets/icons';
import {connect} from 'react-redux';
import * as mapDispatchToProps from './actions';
import {selectProductCategories} from './selectors';
import {Button} from '@ui-kitten/components';
import {FormInput} from '../../../components/form-input.component';
import {
  ProductAddData,
  ProductAddSchema,
} from '../../../data/product-add.model';
import FormSelect from '../../../components/form-select.component';

const ProductAddScreen = ({
  getProductCategories,
  productCategories,
  ...props
}) => {
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    getProductCategories();
  }, []);

  console.log('productCategories', productCategories);

  const onFormSubmit = async (values) => {
    console.log('values', values);
    try {
      console.log(values);
      setDisabled(true);
      // await props.loginUser(values);
      // setDisabled(false);
      // props.navigation.navigate(AppRoute.HOME);
    } catch (err) {
      console.log('err', err);
      setDisabled(false);
      if (
        err.response &&
        err.response.data &&
        err.response.data.error &&
        typeof err.response.data.error === 'string'
      ) {
        setInputError(err.response.data.error);
      } else {
        setInputError('Something went wrong');
      }
    }
  };

  const renderForm = (formProps) => (
    <>
      <FormInput
        id="name"
        placeholder="Name of the Product"
        style={styles.formControl}
        inputError={inputError}
      />
      <FormInput
        id="regular_price"
        keyboardType="numeric"
        placeholder="Price"
        style={styles.formControl}
        inputError={inputError}
      />
      {/* <FormSelect id="type" placeholder="Type of the product" /> */}
      <FormSelect
        id="categories"
        selectOptions={productCategories}
        placeholder="Category"
      />

      <FormInput
        id="sale_price"
        placeholder="Sale Price"
        style={styles.formControl}
        inputError={inputError}
      />
      <FormInput
        id="short_description"
        placeholder="Short Description"
        style={styles.formControl}
        inputError={inputError}
      />

      <Button onPress={formProps.handleSubmit}>Add</Button>
    </>
  );

  return (
    <MainLayout
      backIcon={BackIcon}
      title="Add a Product"
      navigation={props.navigation}>
      <Formik
        initialValues={ProductAddData.empty()}
        validationSchema={ProductAddSchema}
        onSubmit={onFormSubmit}>
        {renderForm}
      </Formik>
    </MainLayout>
  );
};

const mapStateToProps = createStructuredSelector({
  productCategories: selectProductCategories,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddScreen);

const styles = StyleSheet.create({
  formControl: {
    marginVertical: 4,
    padding: 2,
  },
});
