import { SimpleGrid, Text } from "@chakra-ui/react";
import { CustomerQuery } from "../App";
import useCustomers, { LoanType } from "../hooks/useCustomers";
import { Branch } from "../hooks/useBranches";
import CustomerCard from "./CustomerCard";
import CustomerCardContainer from "./CustomerCardContainer";
import CustomerCardSkeleton from "./CustomerCardSkeleton";
import { Customer } from "../hooks/useCustomers";

interface Props {
  customerQuery: CustomerQuery;
}

const CustomerGrid = ({ customerQuery }: Props) => {
  const { data, error, isLoading } = useCustomers(customerQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <CustomerCardContainer key={skeleton}>
            <CustomerCardSkeleton />
          </CustomerCardContainer>
        ))}
      {data.map((customer) => (
        <CustomerCardContainer key={customer.CustId}>
          <CustomerCard customer={customer} />
        </CustomerCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default CustomerGrid;
