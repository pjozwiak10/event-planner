import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me: MeResponse;
  offers: Array<OffersResponse>;
};


export type QueryOffersArgs = {
  category: Scalars['String'];
  filters?: Maybe<Array<FilterObject>>;
};

export type MeResponse = {
  __typename?: 'MeResponse';
  user?: Maybe<User>;
  messages?: Maybe<Array<FieldMessage>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  offers: Array<Offer>;
};

export type Offer = {
  __typename?: 'Offer';
  id: Scalars['ID'];
  type: Scalars['Float'];
  name: Scalars['String'];
  mails: Array<Scalars['String']>;
  phones: Array<Scalars['String']>;
  street: Scalars['String'];
  houseNumber: Scalars['Float'];
  flatNumber: Scalars['Float'];
  city: Scalars['String'];
  zipCode: Scalars['String'];
  country: Scalars['String'];
  advantage: Scalars['String'];
  shortDescription: Scalars['String'];
  longDescription: Scalars['String'];
  priceListType: PriceListType;
  facebookLink: Scalars['String'];
  instagramLink: Scalars['String'];
  pinterestLink: Scalars['String'];
  companyLink: Scalars['String'];
  rewards: Array<Reward>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
  galleries: Array<Gallery>;
  place: Place;
  organizer: Organizer;
  photographer: Photographer;
  attributes: Array<AttributeValue>;
};

export type PriceListType = {
  __typename?: 'PriceListType';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Reward = {
  __typename?: 'Reward';
  id: Scalars['ID'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Gallery = {
  __typename?: 'Gallery';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  offer: Offer;
  photos: Array<Photo>;
  videos: Array<Video>;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['ID'];
  url: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  gallery: Gallery;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['ID'];
  url: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  gallery: Gallery;
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  offer: Offer;
};

export type Organizer = {
  __typename?: 'Organizer';
  id: Scalars['ID'];
  name: Scalars['String'];
  quantityEvents: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  offer: Offer;
};

export type Photographer = {
  __typename?: 'Photographer';
  id: Scalars['ID'];
  name: Scalars['String'];
  equipment: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  offer: Offer;
};

export type AttributeValue = {
  __typename?: 'AttributeValue';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['Float'];
  attribute: Attribute;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Attribute = {
  __typename?: 'Attribute';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['Float'];
  value: Scalars['Float'];
  values: Array<AttributeValue>;
  filter: Filter;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['String'];
  type: Scalars['Float'];
  name: Scalars['String'];
  character: Scalars['String'];
  attribute: Attribute;
  values: Array<FilterValue>;
};

export type FilterValue = {
  __typename?: 'FilterValue';
  id: Scalars['String'];
  from: Scalars['Float'];
  to: Scalars['Float'];
  filter: Filter;
};

export type FieldMessage = {
  __typename?: 'FieldMessage';
  field: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type OffersResponse = {
  __typename?: 'OffersResponse';
  offerId: Scalars['String'];
  offerType: Scalars['Float'];
  offerName: Scalars['String'];
  subjectName: Scalars['String'];
};

export type FilterObject = {
  filterType: Scalars['String'];
  filterCharacter: Scalars['String'];
  filterValue: Scalars['String'];
  filterValueValue: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: Array<FieldMessage>;
  login: LoginResponse;
  confirmUser: Array<FieldMessage>;
  forgotPassword: Array<FieldMessage>;
  changePassword: Array<FieldMessage>;
  logout: Array<FieldMessage>;
};


export type MutationRegisterArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user?: Maybe<User>;
  messages?: Maybe<Array<FieldMessage>>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )>, messages?: Maybe<Array<(
      { __typename?: 'FieldMessage' }
      & Pick<FieldMessage, 'message' | 'field'>
    )>> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'MeResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )>, messages?: Maybe<Array<(
      { __typename?: 'FieldMessage' }
      & Pick<FieldMessage, 'field' | 'message' | 'success'>
    )>> }
  ) }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      username
      email
    }
    messages {
      message
      field
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    user {
      id
      username
      email
    }
    messages {
      field
      message
      success
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;