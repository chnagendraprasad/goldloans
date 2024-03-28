import { CustomerQuery } from "../App";
import useData from "./useData";
import { Branch } from "./useBranches";

export interface LoanType {
  Id: number;
  Name: string;
  Type: string;
}

export interface Customer {
  CustId: number;
  CustCode: string;
  CustomerName: string;
  //parent_loantypes: { loantype: LoanType }[];
  MobileNumber: string;
  CustomerPhotoBase64String: string;
  MBRI_ID: number;
  TotalLoans: number;
  LoanAmount: string;
  CashAmount: string;
  BankAmount: string;
  ProcessingFee: string;
}

const useCustomers = (customerQuery: CustomerQuery) =>
  useData<Customer>(
    "/GetCustomers",
    {
        BranchId: customerQuery.branch?.Mbri_Id.toString(),
        LoanType: customerQuery.loantype?.Id.toString(),
        Ordering: customerQuery.sortOrder,
        Search: customerQuery.searchText
    },
    [customerQuery]
  );

export default useCustomers;
