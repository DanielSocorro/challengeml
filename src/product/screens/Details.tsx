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
        <img src={product.pictures[0].url} width={200} />
        <p>informacion sobre el vendedor</p>
        <p>{`${product.seller_address.city.name}, ${product.seller_address.state.name}`}</p>
      </Box>
    </Stack>
  );
};

export default DetailsScreen;
