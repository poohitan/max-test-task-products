import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Heading,
  Paragraph,
} from 'grommet';

import ProductForm from '../components/ProductForm';

function EditPage() {
  const { id } = useParams();
  const product = useSelector(
    (state) => state.products.find((item) => item.id === id),
  );

  if (id && !product) {
    return (
      <Paragraph alignSelf="center" fill margin="none" color="status-error">
        Product with ID&nbsp;
        <b>{id}</b>
        &nbsp;doesn&apos;t exist.
      </Paragraph>
    );
  }

  const formHeading = product
    ? (
      <Heading>
        Edit&nbsp;
        <b>
          {product.name}
        </b>
      </Heading>
    )
    : <Heading>Create Product</Heading>;

  return (
    <>
      {formHeading}
      <ProductForm product={product} />
    </>
  );
}

export default EditPage;
