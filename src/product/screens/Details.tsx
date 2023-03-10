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
        <p>${product.base_price}</p>
        <p>${product.price} 22% OFF</p>
        <img src={product.pictures[0].url} />
      </Box>
    </Stack>
  );
};

export default DetailsScreen;
