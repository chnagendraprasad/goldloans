import branches from "../data/branches";
import useData from "./useData";

export interface Branch {
  Mbri_Id: number;
  Mbri_Name: string;
  Mbri_Code: string;
  Mbri_Branch_Type: string;
  Mbri_Address: string;
  Mbri_Phone_No: string;
  Mbri_Email_ID: string;
  Mbri_BM_Phone_No: string;
  BranchFormationDate: string;
  BranchTransDate: string;
  BranchopeningDate: string;
  image_branch: string;
}

//const useBranches = () => ({ data: branches, isLoading: false, error: null })
const useBranches = () =>
  useData<Branch>(
    "/GetBranches",
  );

export default useBranches;