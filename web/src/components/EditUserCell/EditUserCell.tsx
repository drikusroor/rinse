import type {
  FindEditUserQuery,
  FindEditUserQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EditUserForm from '../EditUserForm/EditUserForm'

export const QUERY = gql`
  query FindEditUserQuery($id: Int!) {
    editUser(id: $id) {
      id
      email
      firstName
      lastName
    }
  }
`

const UPDATE_USER_MUTATION = gql`
  mutation UpdateAccountMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      email
      firstName
      lastName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  id,
  editUser,
}: CellSuccessProps<FindEditUserQuery, FindEditUserQueryVariables>) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('Account updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query: QUERY, variables: { id } }],
  })

  return (
    <EditUserForm
      user={editUser}
      onSave={(input) => {
        updateUser({ variables: { id, input } })
      }}
      error={error}
      loading={loading}
    />
  )
}
