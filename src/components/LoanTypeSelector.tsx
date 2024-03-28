import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { LoanType } from "../hooks/useCustomers";
import useLoanTypes from "../hooks/useLoanTypes";

interface Props {
  onSelectLoanType: (loantype: LoanType) => void;
  selectedLoanType: LoanType | null;
}

const LoanTypeSelector = ({ onSelectLoanType, selectedLoanType }: Props) => {
  const { data, error } = useLoanTypes();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedLoanType?.Name || "LoanTypes"}
      </MenuButton>
      <MenuList>
        {data.map((loantype) => (
          <MenuItem
            onClick={() => onSelectLoanType(loantype)}
            key={loantype.Id}
          >
            {loantype.Name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LoanTypeSelector;
