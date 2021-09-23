import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import pluralize from 'pluralize';

import {
  Heading,
  Paragraph,
  Box,
  Button,
  Image,
} from 'grommet';

import CommentForm from '../../comments/components/CommentForm';
import Comment from '../../comments/components/Comment';

import './view.css';

function ViewPage() {
  const { id } = useParams();
  const product = useSelector(
    (state) => state.products.find((item) => item.id === id),
  );
  const comments = useSelector(
    (state) => state.comments.filter((item) => item.productId === id),
  ).reverse();

  if (!product) {
    return (
      <Paragraph alignSelf="center" fill margin="none" color="status-error">
        Product with ID&nbsp;
        <b>{id}</b>
        &nbsp;doesn&apos;t exist.
      </Paragraph>
    );
  }

  const commentsHeading = comments.length
    ? pluralize('Comment', comments.length, true)
    : 'No comments yet';

  return (
    <>
      <Box direction="row" align="center">
        <Heading margin="bottom">
          {
            product.name
          }
        </Heading>
        <Link to={`/products/${id}/edit`}>
          <Button type="submit" label="Edit" margin={{ left: 'large' }} />
        </Link>
      </Box>
      <Box direction="row" margin={{ bottom: 'large' }} gap="medium">
        {
          product.image
            ? (
              <Box width="medium">
                <Image
                  fit="contain"
                  src={product.image}
                  fill
                />
              </Box>
            )
            : null
        }
        <Paragraph width="70%" margin="none" className="product-description">
          {
            product.description
          }
        </Paragraph>
      </Box>
      <Box border={{ color: 'brand', size: 'medium' }} pad="medium" gap="medium" width="large">
        <Heading level="4" margin="none">
          {
            commentsHeading
          }
        </Heading>
        <CommentForm productId={id} />
        {
          comments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              text={comment.text}
              createdAt={comment.createdAt}
            />
          ))
        }
      </Box>

    </>
  );
}

export default ViewPage;
