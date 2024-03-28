import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import CustomerGrid from "./components/CustomerGrid";
import CustomerHeading from "./components/CustomerHeading";
import BranchList from "./components/BranchList";
import NavBar from "./components/NavBar";
import LoanTypeSelector from "./components/LoanTypeSelector";
import SortSelector from "./components/SortSelector";
import { LoanType } from "./hooks/useCustomers";
import { Branch } from "./hooks/useBranches";

export interface CustomerQuery {
  branch: Branch ;
  loantype: LoanType ;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [customerQuery, setcustomerQuery] = useState<CustomerQuery>(
    {} as CustomerQuery
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setcustomerQuery({ ...customerQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <BranchList
            selectedBranch={customerQuery.branch}
            onSelectBranch={(branch) =>
              setcustomerQuery({ ...customerQuery, branch })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <CustomerHeading customerQuery={customerQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <LoanTypeSelector
                selectedLoanType={customerQuery.loantype}
                onSelectLoanType={(loantype) =>
                  setcustomerQuery({ ...customerQuery, loantype })
                }
              />
            </Box>
            <SortSelector
              sortOrder={customerQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setcustomerQuery({ ...customerQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <CustomerGrid customerQuery={customerQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
