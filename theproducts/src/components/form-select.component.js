import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFormikContext} from 'formik';
import {Select, IndexPath, SelectItem} from '@ui-kitten/components';

const FormSelect = ({id, inputError = '', selectOptions, ...inputProps}) => {
  const formContext = useFormikContext();

  const [selectedIndex, setSelectedIndex] = useState([
    new IndexPath(0),
    new IndexPath(1),
  ]);

  let {[id]: error} = formContext.errors;
  if (inputError) {
    error = inputError;
  }
  const fieldProps = {
    status: error && 'danger',
    captionIcon: error && AlertTriangleIcon,
  };

  return (
    <Select
      {...inputProps}
      {...fieldProps}
      //   selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      //   onSelect={formContext.handleChange(id)}
      caption={error}>
      {selectOptions.map((option) => (
        <SelectItem key={option.id} title={option.name} />
      ))}
    </Select>
  );
};

export default FormSelect;

const styles = StyleSheet.create({});
