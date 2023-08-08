import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, Center, Divider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, category, addToCart }) => {
  return (
    <Center>
      <Card maxW='lg'>
        <CardBody>
          <Heading size='sm'>{name}</Heading>
          <Stack mt='6' spacing='3'>
            <Text>
              {description}
              {category}
            </Text>
          </Stack>
          <Divider />
          <Image
            src='https://www.cordonandino.com/img/articulos/campera_piuquen_3_2_imagen4.jpg'
            alt='Campera roja'
            borderRadius='lg'
            mt='6'
          />
          <CardFooter>
            <Button variant='solid' colorScheme='green' onClick={() => addToCart({ id, name, description, category })}>
              Agregar al carrito
            </Button>
            <Link to={`/item/${id}`}>
              <Button variant='solid' colorScheme='purple'>
                Detalles de producto
              </Button>
            </Link>
          </CardFooter>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Item;
