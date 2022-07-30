import './App.css';
import AddTransaction from  './components/AddTransaction'
import TransactionList from  './components/TransactionList'
import { Container, Box, Text, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import useLocalStorage from './useLocalStorage';

function App() {

  const [listOfTransaction, setListOfTransaction] = useLocalStorage('transactions', []);

  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem("transactions"));
    transactions ? setListOfTransaction(transactions) : setListOfTransaction([]);
  },[])

  const balance = listOfTransaction.reduce((bal, curr)=> {
    if(curr.transactionType == "Credit") {
      return bal + Number(curr.transactionAmount);
    } else {
      return bal - Number(curr.transactionAmount);
    }
      
  }, 0)


  return (
    <div className="App">
      <Container maxW="xl" centerContent>
        <Box padding={3} bgColor={'white'} w="100%" borderRadius="lg" borderWidth="1px" m="40px 0 15px 0">
          <Text fontSize="3xl" color='black' fontFamily="Work sans">
            Transactions
          </Text>
        </Box>
        <Box padding={2} bgColor={'white'} w="100%" borderTopRadius="lg" borderWidth="1px">
          <Text fontSize="2xl" color='black' fontFamily="Work sans">
            Balance : {balance}
          </Text>
        </Box>
        <Box d="flex" padding={3} bgColor={'white'} w="100%" borderBottomRadius="lg" borderWidth="1px" fontFamily="Work sans">
          <Tabs variant='soft-rounded'>
            <TabList>
              <Tab width="50%">Add Transactions</Tab>
              <Tab width="50%">Transactions List</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AddTransaction transactionList={listOfTransaction} setTransactionList={setListOfTransaction}/>
              </TabPanel>
              <TabPanel>
              <TransactionList transactionList={listOfTransaction}/>
              </TabPanel>
            </TabPanels>
        </Tabs>
        </Box>
      </Container>
    </div>
  );
}

export default App;
