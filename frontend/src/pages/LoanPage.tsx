import {
  Box, Button, Container, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, ButtonGroup, Center 
} from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';
const LoanPage = () => {
  const [loan, setLoan] = useState<any[]>([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData = async()=>{
    await axios.post('http://localhost:5000/v1/api/loan/history',{
      userId: localStorage.getItem("ID")
    }).then(response=>setLoan(response.data));
  }
  const getUrlImage = (image: any) => {
    const Url = `http://localhost:5000/v1/api/books/image/${image}`;
    return Url;
  };
  const getStatus = (status: any)=>{
    if(status){
      return "Return on "+moment(status).format('lll'); 
    }else{
      return "On Loan"
    }
  }
  const returnBook = async (id:any) => {
    await axios.put(`http://localhost:5000/v1/api/loan/return/${id}/${localStorage.getItem("ID")}`).then(response=>setLoan(response.data));
  }
  return (
    <Container maxW='-moz-max-content' mt={4}>
      <Text fontSize='2xl' fontWeight='bold' align='center'>
        Loan Transaction List
      </Text>
      <Box border='1px' borderColor='gray.200' borderRadius='lg' my={5}>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th><Center>Cover</Center></Th>
                <Th>Title</Th>
                <Th>Start Loan</Th>
                <Th>Max Return</Th>
                <Th>Status</Th>
                <Th><Center>Action</Center></Th>
              </Tr>
            </Thead>
            <Tbody>
              {loan.map((item)=>(
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
                  <Td>{item.book.title.substring(0,25)+" ..."}</Td>
                  <Td>{moment(item.start_loan_date).format('lll')}</Td>
                  <Td>{moment(item.max_return_date).format('lll')}</Td>
                  <Td>{getStatus(item.return_date)}</Td>
                  <Td>
                    <Center>
                      <ButtonGroup spacing='2'>
                        {!item.return_date && (
                          <Button colorScheme='green' onClick={()=>returnBook(item.id)}>Return Book</Button>
                        )}
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

export default LoanPage