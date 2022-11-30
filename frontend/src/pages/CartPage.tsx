import {
  Box, Button, Container, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, ButtonGroup, Center 
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SuccessModal from '../components/SuccessModal';

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(()=>{
    getData();
  },[]);

  const getData =async () => {
    await axios.post('http://localhost:5000/v1/api/cart/getAll',{
      userId: localStorage.getItem('ID')
    }).then(response=>setCart(response.data));
  }
  const getUrlImage = (image: any) => {
    const Url = `http://localhost:5000/v1/api/books/image/${image}`;
    return Url;
  };
  const removeBook = async (id:any, index:any)=>{
    await axios.delete(`http://localhost:5000/v1/api/cart/delete/${id}`).then(()=>{
      cart.splice(index, 1);
      let newArr = [...cart];
      setCart(newArr)
    });
  }
  const makeLoan = async (id: any, userId: any, bookId: any, index: any) => {
    await axios.post('http://localhost:5000/v1/api/loan',{
        userId, bookId
      }).then(()=>{
        setTitle('Success');
        setMessage('Successfully make loan on a book');
        setOpenModal(true);
        removeBook(id,index);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <Container maxW='-moz-max-content' my={5}>
      <SuccessModal isOpen={openModal} title={title} message={message} close={()=>setOpenModal(false)}/>
      <Text fontSize='2xl' fontWeight='bold'>
          <Center>List Books on Your Cart</Center>
      </Text>
      <Box border='1px' borderColor='gray.200' borderRadius='lg' mt={5}>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th><Center>Cover</Center></Th>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th><Center>Action</Center></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((item, index)=>(
                <Tr key={item.id}>
                  <Td><Center>
                        <Image
                          maxWidth='14'
                          src={getUrlImage(item.book.image)}
                          alt={item.book.image}
                          borderRadius='lg'
                        />
                      </Center>
                  </Td>
                  <Td>{item.book.title}</Td>
                  <Td>{item.book.description.substring(0,50)+" ..."}</Td>
                  <Td>
                    <Center>
                      <ButtonGroup spacing='2'>
                        <Button colorScheme='red' onClick={()=>removeBook(item.id, index)}>Delete</Button>
                        <Button colorScheme='blue' onClick={()=>makeLoan(item.id,item.user_id, item.book_id, index)}>Make Loan</Button>
                      </ButtonGroup>
                    </Center>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}

export default CartPage