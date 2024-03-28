import { Heading } from '@chakra-ui/react'
import { CustomerQuery } from '../App'

interface Props {
  customerQuery: CustomerQuery
}

const CustomerHeading = ({ customerQuery }: Props) => {
  const heading = `${customerQuery.loantype?.Name || ''} ${customerQuery.branch?.Mbri_Name || ''} Customers`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default CustomerHeading