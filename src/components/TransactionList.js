import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const TransactionList = ({transactionList}) => {
    return(
        <div>
           <TableContainer fontFamily="Work sans" fontSize="xs">
            <Table variant='simple' colorScheme='teal' >
                <TableCaption>Transaction Details</TableCaption>
                <Thead height="10px">
                <Tr>
                    <Th>Date</Th>
                    <Th>Transaction Name</Th>
                    <Th>Amount</Th>
                    <Th>Type</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {transactionList.map(transaction => (
                    <Tr height="10px" key={transaction.id}>
                    <Td>{transaction.transactionDate} </Td>
                    <Td>{transaction.transactionName} </Td>
                    <Td>{transaction.transactionAmount} </Td>
                    <Td>{transaction.transactionType} </Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default TransactionList;