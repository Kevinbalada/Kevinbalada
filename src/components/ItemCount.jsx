import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  

  }

export default ItemCount;
