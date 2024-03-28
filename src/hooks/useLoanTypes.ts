import loantypes from "../data/loantypes";

interface LoanType {
  Id: number;
  Name: string;
  Type: string;
}

const useLoanTypes = () => ({ data: loantypes, isLoading: false, error: null });

export default useLoanTypes;
