import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import {
  Form,
  FormField,
  Box,
  Button,
  TextInput,
  TextArea,
  FileInput,
} from 'grommet';

import { create, update } from '../productsSlice';

import readAsBase64 from '../../../helpers/read-as-base64';

const ProductForm = ({ product }) => {
  const [formValue, setFormValue] = useState(product);
  const dispatch = useDispatch();
  const history = useHistory();

  const submit = async ({
    id, name, description, files = [],
  }) => {
    const [imageFile] = files;

    const image = imageFile ? await readAsBase64(imageFile) : product.image;

    if (id) {
      dispatch(update({
        id,
        name,
        description,
        image,
        updatedAt: new Date().toISOString(),
      }));

      history.push(`/products/${id}`);

      return;
    }

    dispatch(create({
      id: uuidv4(),
      name,
      description,
      image,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    history.push('/');
  };

  return (
    <Form
      value={formValue}
      onChange={(nextValue) => setFormValue(nextValue)}
      onSubmit={({ value }) => submit(value)}
    >
      <Box direction="column" gap="small" width="large">
        <FormField
          name="name"
          label="Name"
          validate={{
            regexp: /\S+/,
            message: 'Name can\'t be empty',
          }}
        >
          <TextInput name="name" />
        </FormField>
        <FormField
          name="description"
          label="Description"
          validate={{
            regexp: /\S+/,
            message: 'Description can\'t be empty',
          }}
        >
          <TextArea name="description" />
        </FormField>
        <FormField name="image" label="Image">
          <FileInput name="files" multiple={false} accept="image/*" />
        </FormField>
      </Box>
      <Box direction="row" gap="medium">
        <Button type="submit" size="large" primary label="Save" />
      </Box>
    </Form>
  );
};

ProductForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

ProductForm.defaultProps = {
  product: {
    name: '',
    description: '',
  },
};

export default ProductForm;
