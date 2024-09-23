import { ApiResponseWithData } from "@/types/Response.type";
import { useEffect, useState } from "react";
import { UseQueryResult, useQuery } from "react-query";

export const useReactQuery = <P>(
  queryKey: string[],
  queryFn: (a?: any) => any,
  options?: any
): {
  response: P;
  isLoading: UseQueryResult["isLoading"];
  error: UseQueryResult["error"];
  refetch: UseQueryResult["refetch"];
  isRefetching: UseQueryResult["isRefetching"];
} => {
  console.log('EJECUTANDING....');
  const {
    data,
    isLoading,
    isRefetching,
    error,
    refetch,
  }: UseQueryResult<ApiResponseWithData<P>, unknown> = useQuery(
    queryKey,
    queryFn,
    options
  );
  console.log('GUARDANDING...');
  console.log('Data:', data);
  const [response, setResponse] = useState<any>();

  useEffect(() => {
    if (data) {
      setResponse(data?.data);
    }
  }, [data]);

  return {
    response,
    isLoading,
    error,
    refetch,
    isRefetching,
  };
};
