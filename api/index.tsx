import React from "react";
import axios from "axios";

// Generic hook result types
type UseQueryHookResult<ResultT> = {
  data: ResultT | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
};

type UseMutationHookResult<InputT, ResultT> = [
  (input: InputT) => Promise<ResultT>,
  { data: ResultT | null; loading: boolean; error: Error | null },
];

// Base API client class
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = "/api") {
    this.baseUrl = baseUrl;
  }

  protected async post<T>(path: string, data: any): Promise<T> {
    const response = await axios.post(`${this.baseUrl}${path}`, data);
    return response.data;
  }

  protected async get<T>(path: string, params?: any): Promise<T> {
    const response = await axios.get(`${this.baseUrl}${path}`, {
      params: params,
    });
    return response.data;
  }
}

// Example input and output types
interface GetUserInput {
  id: string;
}

interface GetUserResult {
  id: string;
  name: string;
  email: string;
}

interface CreateUserInput {
  name: string;
  email: string;
}

interface CreateUserResult {
  id: string;
  name: string;
  email: string;
}

// API Client implementation with example methods
class ExampleApiClient extends ApiClient {
  async getUser(input: GetUserInput): Promise<GetUserResult> {
    return this.get("/users", input);
  }

  async createUser(input: CreateUserInput): Promise<CreateUserResult> {
    return this.post("/users", input);
  }
}

// Custom hooks
export function useQuery<ResultT>(fn: () => Promise<ResultT>): UseQueryHookResult<ResultT> {
  const [data, setData] = React.useState<ResultT | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);

  const fetchData = React.useCallback(() => {
    setError(null);
    fn()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fn]);

  React.useEffect(() => fetchData(), [fetchData]);

  const refetch = React.useCallback(() => {
    setLoading(true);
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
}

export function useMutation<InputT, ResultT>(
  fn: (input: InputT) => Promise<ResultT>,
): UseMutationHookResult<InputT, ResultT> {
  const [data, setData] = React.useState<ResultT | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

  const execute = async (input: InputT): Promise<ResultT> => {
    try {
      setLoading(true);
      setError(null);
      const result = await fn(input);
      setData(result);
      return result;
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return [execute, { data, loading, error }];
}

// Example usage of hooks
const defaultApiClient = new ExampleApiClient();

export function useGetUser(input: GetUserInput): UseQueryHookResult<GetUserResult> {
  return useQuery(() => defaultApiClient.getUser(input));
}

export function useCreateUser(): UseMutationHookResult<CreateUserInput, CreateUserResult> {
  return useMutation((input) => defaultApiClient.createUser(input));
}

export default {
  default: defaultApiClient,
  useGetUser,
  useCreateUser,
};
