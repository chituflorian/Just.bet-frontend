### toSnake

Converts camelCase object keys to snake_case recursively.

```ts
const camelData = { userName: "John", emailAddress: "john@example.com" };
const snakeData = toSnake(camelData);
// Result: { user_name: "John", email_address: "john@example.com" }
```

## API Client

### Base Client

The `ApiClient` class provides the foundation for API interactions:

```ts
const client = new ApiClient("/api"); // Default base URL is "/api"
```

Protected methods available for extending:

- `get<T>(path: string, params?: any): Promise<T>`
- `post<T>(path: string, data: any): Promise<T>`

### Extending the Base Client

Create custom API clients by extending the base class:

```ts
class CustomApiClient extends ApiClient {
  async getUser(input: GetUserInput): Promise<GetUserResult> {
    return this.get("/users", input);
  }
}
```

## React Hooks

### useQuery

Hook for data fetching with built-in state management:

```ts
function Component() {
  const { data, loading, error, refetch } = useQuery(() => api.getUser({ id: "123" }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>User: {data?.name}</div>;
}
```

### useMutation

Hook for handling mutations with state management:

```ts
function Component() {
  const [createUser, { loading, error }] = useMutation(api.createUser);

  const handleSubmit = async (userData: CreateUserInput) => {
    try {
      const result = await createUser(userData);
      console.log("User created:", result);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };
}
```

## Usage Examples

### Setting Up the Client

```typescript
import api from "./api";

// Use the default client
const defaultClient = api.default;

// Or create a custom instance
const customClient = new ExampleApiClient("https://api.example.com");
```

### Using Query Hooks

```typescript
function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error, refetch } = useGetUser({ id: userId });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading user</div>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
```

### Using Mutation Hooks

```typescript
function CreateUserForm() {
  const [createUser, { loading, error }] = useCreateUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createUser({
        name: "John Doe",
        email: "john@example.com",
      });
      console.log("User created:", result);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create User"}
      </button>
      {error && <div>Error: {error.message}</div>}
    </form>
  );
}
```

## Type Definitions

### Query Hook Result

```typescript
type UseQueryHookResult<ResultT> = {
  data: ResultT | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
};
```

### Mutation Hook Result

```typescript
type UseMutationHookResult<InputT, ResultT> = [
  (input: InputT) => Promise<ResultT>,
  {
    data: ResultT | null;
    loading: boolean;
    error: Error | null;
  },
];
```
