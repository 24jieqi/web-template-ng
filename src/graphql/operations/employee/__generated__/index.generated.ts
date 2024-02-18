import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AccountPageQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.AccountPageInput>;
}>;


export type AccountPageQuery = { accountPage?: { __typename?: 'AccountPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'AccountPayload', roleIdList?: Array<string>, accountName?: string, id?: string, phone?: string, status?: SchemaTypes.EnableEnum, roleList?: Array<{ __typename?: 'RolePayload', appType?: SchemaTypes.AppTypeEnum, roleId?: string, roleName?: string, roleStatus?: SchemaTypes.EnableEnum }> }> } };


export const AccountPageDocument = gql`
    query accountPage($input: AccountPageInput) {
  accountPage(input: $input) {
    pageCurrent
    pageSize
    records {
      roleIdList
      roleList {
        appType
        roleId
        roleName
        roleStatus
      }
      accountName
      id
      phone
      status
    }
    totalRecords
  }
}
    `;

/**
 * __useAccountPageQuery__
 *
 * To run a query within a React component, call `useAccountPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountPageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAccountPageQuery(baseOptions?: Apollo.QueryHookOptions<AccountPageQuery, AccountPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountPageQuery, AccountPageQueryVariables>(AccountPageDocument, options);
      }
export function useAccountPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountPageQuery, AccountPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountPageQuery, AccountPageQueryVariables>(AccountPageDocument, options);
        }
export type AccountPageQueryHookResult = ReturnType<typeof useAccountPageQuery>;
export type AccountPageLazyQueryHookResult = ReturnType<typeof useAccountPageLazyQuery>;
export type AccountPageQueryResult = Apollo.QueryResult<AccountPageQuery, AccountPageQueryVariables>;