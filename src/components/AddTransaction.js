import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import {useEffect, useState} from "react";
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';


const AddTransaction = ({transactionList, setTransactionList}) => {
    const [transactionName, setTransactionName] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    const [transactionDate, setTransactionDate] = useState('');
    const [transactionType, setTransactionType] = useState('');
    //const [transactionList, setTransactionList] = useState([]);


    const addTransaction = (e) => {

    e.preventDefault();
    const newTransaction = {
      id: transactionList.length,
      transactionName : transactionName,
      transactionAmount: transactionAmount,
      transactionDate: transactionDate,
      transactionType: transactionType
    }

    const newTransactions = [...transactionList, newTransaction];
    setTransactionList(newTransactions);
    setTransactionName('');
    setTransactionAmount('');
    setTransactionDate('');
    setTransactionType('');
    }


    // useEffect(() => {
    //     localStorage.setItem('transaction', JSON.stringify(transactionList));
    //   },[transactionList]);

  return (
    <VStack spacing="10px" fontFamily="Work sans">
      <FormControl id="transactionName" isRequired>
        <FormLabel fontWeight="bold">Transaction Name</FormLabel>
        <Input
          value={transactionName}
          type="text"
          placeholder="Enter Transaction Name"
          onChange={(e) => setTransactionName(e.target.value)}
        />
      </FormControl>
      <FormControl id="transactionAmount" isRequired>
        <FormLabel fontWeight="bold">Transaction Amount</FormLabel>
        <Input
          value={transactionAmount}
          type="Number"
          placeholder="Enter Transaction Amount"
          onChange={(e) => setTransactionAmount(e.target.value)}
        />
      </FormControl>
      <FormControl id="amount" isRequired>
        <FormLabel fontWeight="bold">Transaction Date</FormLabel>
        <Input
          value={transactionDate}
          type="date"
          placeholder="Enter Transaction Date"
          onChange={(e) => setTransactionDate(e.target.value)}
        />
      </FormControl>
      <RadioGroup onChange={setTransactionType} value={transactionType}>
        <Stack direction='row'>
            <Radio value='Debit'>Debit</Radio>
            <Radio value='Credit'>Credit</Radio>
        </Stack>
        </RadioGroup>
        <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={addTransaction}
      >
        Add
      </Button>
    </VStack>
  );
};

export default AddTransaction;
