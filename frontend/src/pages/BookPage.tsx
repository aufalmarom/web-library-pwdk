import { Container, Flex, Grid, Text, Box, Spacer, Select, Button, Center } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import BookCard from "../cards/BookCard";
import FailedModal from '../components/FailedModal';
import SuccessModal from '../components/SuccessModal';
import '../pagination.css';

const BookPage = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const [titleFailedModal, setTitleFailedModal] = useState('');
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [titleSuccessModal, setTitleSuccessModal] = useState('');
  const [message, setMessage] = useState('');
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState<any[]>([]);
  const [categoryId, setCategoryId] = useState('');
  const [sortMethod, setSortMethod] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');
  const [searchSortMethod, setSearchSortMethod] = useState('');
  const [searchSortCriteria, setSearchSortCriteria] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(()=>{
    getBook();// eslint-disable-next-line
  },[page, searchCategory, searchSortCriteria, searchSortMethod]);
  const getBook = async () => {
    await axios.get(`http://localhost:5000/v1/api/books?searchCategory=${searchCategory}&page=${page}&searchSortMethod=${searchSortMethod}&searchSortCriteria=${searchSortCriteria}`).then(response=>{
      setBooks(response.data.data);
      setPage(response.data.page);
      setPages(response.data.totalPage);
      setRows(response.data.totalRows);
    });    
    await axios.get(`http://localhost:5000/v1/api/category`).then(response=>setCategory(response.data));
  }
  const addToCart = async(id : any)=>{
    if(localStorage.getItem("status") !==  "1"){
      setOpenModalFailed(true);
      setTitleFailedModal("Add book to cart failed!");
      setMessage(`Please check your email ${localStorage.getItem(`email`)} to verify your account first!`);
    }else{
      await axios.post('http://localhost:5000/v1/api/cart',{
        id, userId: localStorage.getItem("ID")
      }).then(response=>{
        setMessage(response.data.message);
        setTitleSuccessModal("Success");  
        setOpenModalSuccess(true);
      })
      .catch(error=>{        
        setMessage(error.response.data.message);
        setTitleFailedModal("Add book to cart failed!");
        setOpenModalFailed(true);
      });
    }
  }
  const changePage = (event:any) => {
    setPage(event.selected);
  };
  const search = ()=>{
    setSearchCategory(categoryId);
    setSearchSortCriteria(sortCriteria);
    setSearchSortMethod(sortMethod);
    setPage(0);
  }
  return (
      <Container maxW='-moz-max-content' mt={4}>
        <Flex my={4} align='center'>
          <Box>
            <Text>Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}</Text>
          </Box>
          <Spacer />
          <Box>
            <Flex justify='flex-end' align='center' gap={2}>
              <Text minWidth='max-content'>Filter By</Text>
              <Select minWidth='max-content' maxWidth='fit-content' placeholder='All Category' onChange={(e)=>setCategoryId(e.target.value)}>
                {category.map(item=>(
                  <option value={item.id} key={item.id}>{item.name}</option>
                ))}
              </Select>
              <Text minWidth='max-content'>Sort By</Text>
              <Select minWidth='max-content' maxWidth='fit-content' placeholder='Sort Criteria' onChange={(e)=>setSortCriteria(e.target.value)}>
                <option value='title'>Title</option>
                <option value='createdAt'>Date Created</option>
              </Select>
              <Select minWidth='max-content' maxWidth='fit-content' placeholder='Sort Method' onChange={(e)=>setSortMethod(e.target.value)}>
                <option value='ASC'>Ascending</option>
                <option value='DESC'>Descending</option>
              </Select>
              <Button colorScheme='blue' borderRadius='full' onClick={search} ><Search2Icon /></Button>
            </Flex>
          </Box>
        </Flex>
        <Center>
          <Text>
            <ReactPaginate
                previousLabel={"< Prev"}
                nextLabel={"Next >"}
                pageCount={pages}
                onPageChange={changePage}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
              />
          </Text>
        </Center>
        <FailedModal isOpen={openModalFailed} title={titleFailedModal} message={message} close={()=>setOpenModalFailed(false)}/>
        <SuccessModal isOpen={openModalSuccess} title={titleSuccessModal} message={message} close={()=>setOpenModalSuccess(false)}/>
        <Grid templateColumns='repeat(5, 1fr)' gap={5} my={5}>
          {books.map((item)=>(
            <BookCard key={item.id} id ={item.id} title={item.title} description={item.description} image={item.image} addCart={()=>addToCart(item.id)}/>
          ))}
        </Grid>
      </Container>
  )
}

export default BookPage