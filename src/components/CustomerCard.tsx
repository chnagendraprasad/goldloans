import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Customer } from "../hooks/useCustomers";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import LoanTypeIconList from "./LoanTypeIconList";

interface Props {
  customer: Customer;
}

const CustomerCard = ({ customer }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(customer.CustomerPhotoBase64String)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Heading fontSize="2xl">{customer.CustCode}</Heading>
          {/* <LoanTypeIconList loantypes={customer.CustCode} /> */}
          <CriticScore score={customer.TotalLoans} />
        </HStack>
        <Heading fontSize="2xl">{customer.CustomerName}</Heading>
      </CardBody>
    </Card>
  );
};

export default CustomerCard;
