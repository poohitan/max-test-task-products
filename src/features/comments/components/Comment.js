import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Paragraph,
} from 'grommet';
import {
  Trash,
} from 'grommet-icons';

import { remove } from '../commentsSlice';

const Comment = ({ id, text, createdAt }) => {
  const dispatch = useDispatch();

  return (
    <Card direction="column" background="light-1">
      <CardBody fill pad="small">
        <Paragraph margin="none">{text}</Paragraph>
      </CardBody>
      <CardFooter pad={{ horizontal: 'small' }} background="light-2">
        <Paragraph size="small" margin="none">{new Date(createdAt).toLocaleString()}</Paragraph>
        <Button
          icon={<Trash color="red" size="small" />}
          hoverIndicator
          title="Remove Comment"
          onClick={() => dispatch(remove(id))}
        />
      </CardFooter>
    </Card>
  );
};

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Comment;
