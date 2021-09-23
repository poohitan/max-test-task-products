import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import pluralize from 'pluralize';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Paragraph,
  Box,
  Image,
} from 'grommet';
import {
  Edit,
  Trash,
} from 'grommet-icons';

import { remove } from '../productsSlice';

import './Product.css';

const Product = ({
  id, name, description, image,
}) => {
  const dispatch = useDispatch();
  const comments = useSelector(
    (state) => state.comments.filter((comment) => comment.productId === id),
  );

  return (
    <Card direction="column" background="light-1" className="product">
      <CardHeader pad="medium" background="light-2">
        <Link to={`/products/${id}`}>
          <Heading level="3" margin="none">
            {
              name
            }
          </Heading>
        </Link>
      </CardHeader>
      <CardBody direction="row" fill pad="medium" gap="medium" className="product-description">
        {
          image
            ? (
              <Box width="xsmall">
                <Image
                  fit="cover"
                  src={image}
                  fill
                />
              </Box>
            )
            : null
        }
        {
          description
        }
      </CardBody>
      <CardFooter pad={{ horizontal: 'medium' }} background="light-2">
        <Paragraph size="small">
          {
            pluralize('Comment', comments.length, true)
          }
        </Paragraph>
        <Box direction="row">
          <Link to={`/products/${id}/edit`}>
            <Button
              icon={<Edit color="plain" />}
              hoverIndicator
              title="Edit Product"
            />
          </Link>
          <Button
            icon={<Trash color="red" />}
            hoverIndicator
            title="Remove Product"
            onClick={() => dispatch(remove(id))}
          />
        </Box>
      </CardFooter>
    </Card>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

Product.defaultProps = {
  description: '',
  image: '',
};

export default Product;
