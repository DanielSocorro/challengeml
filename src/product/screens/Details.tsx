import React from "react";
import {Container, Text, Stack, Icon, Box, Image, Input, StackDivider} from "@chakra-ui/react";

import {Product} from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Stack>
      <Box>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{`Precio: ${product.price} ${product.currency}`}</p>
        <img alt={product.title} src={product.image} />
      </Box>
    </Stack>
  );
};

export default DetailsScreen;
