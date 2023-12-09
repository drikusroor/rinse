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
import Teachers from '../Teachers/Teachers'

export const QUERY = gql`
  query FindEditUserQuery($id: Int!) {
    editUser(id: $id) {
      id
      email
      firstName
      lastName
      teachers {
        id
        teacher {
          id
          email
          firstName
          lastName
        }
      }
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

const REQUEST_CONNECT_TO_TEACHER_MUTATION = gql`
  mutation RequestConnectToTeacherMutation(
    $input: RequestConnectToTeacherInput!
  ) {
    requestConnectToTeacher(input: $input) {
      id
      accepted
      teacher {
        id
        email
        firstName
        lastName
      }
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

  const [requestConnectToTeacher] = useMutation(
    REQUEST_CONNECT_TO_TEACHER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Connected to teacher')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      refetchQueries: [{ query: QUERY, variables: { id } }],
    }
  )

  return (
    <>
      <EditUserForm
        user={editUser}
        onSave={(input) => {
          updateUser({ variables: { id, input } })
        }}
        error={error}
        loading={loading}
      />
      <Teachers
        teachers={editUser.teachers}
        onRequestConnectToTeacher={(email) =>
          requestConnectToTeacher({ variables: { input: { email, id } } })
        }
      />
    </>
  )
}
