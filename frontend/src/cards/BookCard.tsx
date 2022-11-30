import { Link } from 'react-router-dom'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, ButtonGroup, Box, Center } from '@chakra-ui/react';

const BookCard = (props: any) => {
  
  const getUrlImage = (image: any) => {
    const Url = `http://localhost:5000/v1/api/books/image/${image}`;
    return Url;
  };

  return (
    <>
      <Card maxW='xs'> 
          <Link to={`book/${props.id}`}>
            <CardBody height='xl'>
              <Center>
                <Image
                  height='56'
                  src={getUrlImage(props.image)}
                  alt={props.image}
                  borderRadius='lg'
                />
              </Center>
              <Stack mt='6' spacing='3'>
                <Heading size='md' height='16'>{props.title}</Heading>
                <Text>
                  {props.description.substring(0,200)+" ..."}
                </Text>
              </Stack>
            </CardBody>
          </Link>
          {localStorage.getItem("accessToken") && (
            <Box>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue' onClick={props.addCart}>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Box>
          )}
      </Card>
    </>
  )
}

export default BookCard