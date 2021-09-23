import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  Heading,
  Grid,
  Paragraph,
} from 'grommet';

import Product from '../components/Product';

function IndexPage() {
  const productsList = useSelector((state) => state.products);

  useEffect(() => {
    document.title = 'Product List';
  }, []);

  return (
    <div>
      <Heading>Product List</Heading>

      <Grid gap="medium" columns={{ count: 'fit', size: 'medium' }}>
        {
          productsList.length
            ? productsList.map((product) => (
              <Product
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                key={product.id}
              />
            ))
            : <Paragraph margin="none">There are currently no products</Paragraph>
        }
      </Grid>
    </div>
  );
}

export default IndexPage;
