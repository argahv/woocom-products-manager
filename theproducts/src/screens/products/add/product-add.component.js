import React, {useEffect, useState, useRef} from 'react';
import {Formik} from 'formik';
import BottomSheet from 'reanimated-bottom-sheet';
import {createStructuredSelector} from 'reselect';
import {StyleSheet, View} from 'react-native';
import {MainLayout} from '../../../components';
import {BackIcon} from '../../../assets/icons';
import {Button} from '@ui-kitten/components';
import {connect} from 'react-redux';
import * as mapDispatchToProps from './actions';
import {selectProductCategories} from './selectors';
import {Text} from 'galio-framework';
import {FormInput} from '../../../components/form-input.component';
import {
  ProductAddData,
  ProductAddSchema,
} from '../../../data/product-add.model';
import theme from '../../../theme';
import FormSelect from '../../../components/form-select.component';

const ProductAddScreen = ({
  addProduct,
  getProductCategories,
  productCategories,
  ...props
}) => {
  const [inputError, setInputError] = useState('');
  const [disabled, setDisabled] = useState(false);
  const sheetRef = useRef(0);

  useEffect(() => {
    getProductCategories();
  }, []);

  const onFormSubmit = async (values) => {
    console.log('values', values);
    try {
      console.log(values);
      setDisabled(true);
      await addProduct(values);
      setDisabled(false);
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

  const renderCameraBottomSheetContent = () => (
    <View style={styles.bottomSheet}>
      <Text style={{textAlign: 'center'}} h5>
        Upload Photo
      </Text>
      <Text style={{textAlign: 'center'}} h6>
        Choose a photo to upload.
      </Text>
      <View style={{padding: 10, margin: 10}}>
        <Button style={{margin: 5}}>Take a Photo</Button>
        <Button style={{margin: 5}}>Choose from the Library</Button>
        <Button style={{backgroundColor: theme['color-danger-400']}} type>
          Cancel
        </Button>
      </View>
    </View>
  );

  const renderForm = (formProps) => {
    return (
      <React.Fragment>
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
        {/* <FormSelect
        id="categories"
        selectOptions={productCategories}
        placeholder="Category"
      /> */}

        <FormInput
          id="sale_price"
          placeholder="Sale Price"
          style={styles.formControl}
          keyboardType="numeric"
          inputError={inputError}
        />
        <FormInput
          id="short_description"
          placeholder="Short Description"
          style={styles.formControl}
          inputError={inputError}
        />

        <Button disabled={disabled} onPress={formProps.handleSubmit}>
          ADD
        </Button>
      </React.Fragment>
    );
  };
  return (
    <MainLayout
      backIcon={BackIcon}
      title="Add a Product"
      navigation={props.navigation}>
      <Button
        style={styles.addImageButton}
        onPress={() => sheetRef.current.snapTo(0)}>
        Add Images
      </Button>

      <Formik
        initialValues={ProductAddData.empty()}
        validationSchema={ProductAddSchema}
        onSubmit={onFormSubmit}>
        {renderForm}
      </Formik>
      <BottomSheet
        ref={sheetRef}
        initialSnap={0}
        snapPoints={[250, 0]}
        borderRadius={20}
        renderContent={renderCameraBottomSheetContent}
      />
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
    margin: 7,
    // padding: 2,
  },
  addImageButton: {
    padding: 2,
    margin: 10,
    backgroundColor: theme['color-primary-400'],
  },
  bottomSheet: {
    backgroundColor: '#f2f0f0',
    borderTopColor: '#787878',
    borderTopWidth: 0.5,
    minHeight: 500,
    alignItems: 'center',
  },
});
