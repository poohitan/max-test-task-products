import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {
  Form,
  FormField,
  TextArea,
  Box,
  Button,
} from 'grommet';

import { create } from '../commentsSlice';

const CommentForm = ({ productId }) => {
  const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();

  const submit = ({ text }) => {
    dispatch(create({
      id: uuidv4(),
      productId,
      text,
      createdAt: new Date().toISOString(),
    }));

    setFormValue({
      text: '',
    });
  };

  return (
    <Form
      value={formValue}
      onChange={(nextValue) => setFormValue(nextValue)}
      onSubmit={({ value }) => submit(value)}
    >
      <Box direction="column" gap="small">
        <FormField
          name="text"
          validate={{
            regexp: /\S+/,
            message: 'Comment text can\'t be empty',
          }}
        >
          <TextArea name="text" />
        </FormField>
      </Box>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Add Comment" />
      </Box>
    </Form>
  );
};

CommentForm.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default CommentForm;
