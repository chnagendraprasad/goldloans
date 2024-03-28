import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

  interface FetchResponse<T> {
   results: T[];
  }

 interface CustomerReq {
   BranchId: string ;
   LoanType: string ;
  Ordering: string;
   Search: string;
 }

const useData = <T>(endpoint: string, requestConfig?: CustomerReq, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .post(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
       // console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
       // console.log(err.message);
        setLoading(false);
      });

   return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;