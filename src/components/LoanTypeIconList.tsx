import { FaFileUpload, FaArrowCircleUp } from "react-icons/fa";
import { MdAutorenew } from "react-icons/md";
import { HStack, Icon } from "@chakra-ui/react";
import { LoanType } from "../hooks/useCustomers";
import { IconType } from "react-icons";

interface Props {
  loantypes: LoanType[];
}

const LoanTypeIconList = ({ loantypes = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    L: FaFileUpload,
    T: FaArrowCircleUp,
    A: MdAutorenew,
  };

  return (
    <HStack marginY={1}>
      {loantypes.map((loantypes) => (
        <Icon key={loantypes.Id} as={iconMap[loantypes.Type]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default LoanTypeIconList;
