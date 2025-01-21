import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  createUser: User;
  deleteTodo: Todo;
  deleteUser: User;
  updateTodo: Todo;
  updateUser: User;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID']['input'];
  input: NewTodo;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: NewUser;
};

export type NewTodo = {
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type NewUser = {
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getTodo: Todo;
  getUser: User;
  listTodos: Array<Todo>;
  listUsers: Array<User>;
};


export type QueryGetTodoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateTodoMutationVariables = Exact<{
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, text: string, done: boolean, user: { __typename?: 'User', id: string, name: string } } };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, text: string, done: boolean, user: { __typename?: 'User', id: string, name: string } } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'Todo', id: string, text: string, done: boolean, user: { __typename?: 'User', id: string, name: string } } };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, name: string } };

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { __typename?: 'Query', listUsers: Array<{ __typename?: 'User', id: string, name: string }> };

export type GetTodoQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTodoQuery = { __typename?: 'Query', getTodo: { __typename?: 'Todo', id: string, text: string, done: boolean, user: { __typename?: 'User', id: string, name: string } } };

export type ListTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTodosQuery = { __typename?: 'Query', listTodos: Array<{ __typename?: 'Todo', id: string, text: string, done: boolean, user: { __typename?: 'User', id: string, name: string } }> };


export const CreateTodoDocument = gql`
    mutation CreateTodo($text: String!, $userId: String!) {
  createTodo(input: {text: $text, userId: $userId}) {
    id
    text
    done
    user {
      id
      name
    }
  }
}
    `;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: ID!, $text: String!, $userId: String!) {
  updateTodo(id: $id, input: {text: $text, userId: $userId}) {
    id
    text
    done
    user {
      id
      name
    }
  }
}
    `;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    id
    text
    done
    user {
      id
      name
    }
  }
}
    `;
export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
  }
}
    `;
export const ListUsersDocument = gql`
    query ListUsers {
  listUsers {
    id
    name
  }
}
    `;
export const GetTodoDocument = gql`
    query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    text
    done
    user {
      id
      name
    }
  }
}
    `;
export const ListTodosDocument = gql`
    query ListTodos {
  listTodos {
    id
    text
    done
    user {
      id
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateTodo(variables: CreateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTodoMutation>(CreateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateTodo', 'mutation', variables);
    },
    UpdateTodo(variables: UpdateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTodoMutation>(UpdateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateTodo', 'mutation', variables);
    },
    DeleteTodo(variables: DeleteTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteTodoMutation>(DeleteTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteTodo', 'mutation', variables);
    },
    GetUser(variables: GetUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUser', 'query', variables);
    },
    ListUsers(variables?: ListUsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListUsersQuery>(ListUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ListUsers', 'query', variables);
    },
    GetTodo(variables: GetTodoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTodoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTodoQuery>(GetTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTodo', 'query', variables);
    },
    ListTodos(variables?: ListTodosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListTodosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListTodosQuery>(ListTodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ListTodos', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;