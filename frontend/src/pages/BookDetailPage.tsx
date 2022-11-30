import { Container, Text, Image, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const BookDetailPage = () => {
  const {id} = useParams();
  const [data, setData] = useState<null | {title: any, description: any, image:any}>(null);
  
  useEffect(()=>{
    getData();// eslint-disable-next-line
  },[]);

  const getData =async () => {
    await axios.get(`http://localhost:5000/v1/api/books/${id}`).then(response=>{
      setData(response.data)
    }).catch(error=>console.log(error));
  }  
  
  const getUrlImage = (image: any) => {
    const Url = `http://localhost:5000/v1/api/books/image/${image}`;
    return Url;
  };
  return (
    <Container maxW='-moz-max-content' mt={4}>
      {data && (
        <>
          <Text fontSize='3xl' fontWeight='500'>{data.title}</Text>
          <Flex gap={5}>
            <Image
                maxHeight='80'
                src={getUrlImage(data.image)}
                alt={data.image}
                borderRadius='lg'
              />
            <Text align='justify'>{data.description}</Text>
          </Flex>
            
        </>
      )}
    </Container>
  )
}

export default BookDetailPage