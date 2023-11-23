import { EditUser } from 'types/graphql'

import { EmailField, Form, RWGqlError, TextField } from '@redwoodjs/forms'

import Button from '../Shared/Button/Button'
import { getInputClasses, getInputErrorClasses } from '../Shared/Form'

interface EditUserFormProps {
  user: EditUser
  onSave: (user: EditUser) => void
  error?: RWGqlError
  loading?: boolean
}

const EditUserForm = ({ user, onSave, loading, error }: EditUserFormProps) => {
  const onSubmit = (data) => {
    console.log({ data })
    onSave(data)
  }

  return (
    <Form<EditUser>
      onSubmit={onSubmit}
      error={error}
      className="space-y-6 bg-white shadow sm:rounded-lg sm:px-10 sm:py-8"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1">
          <EmailField
            name="email"
            id="email"
            defaultValue={user.email}
            className={getInputClasses()}
            errorClassName={getInputErrorClasses()}
            placeholder="Email"
            disabled={loading}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First name
        </label>
        <div className="mt-1">
          <TextField
            name="firstName"
            id="firstName"
            defaultValue={user.firstName}
            className={getInputClasses()}
            errorClassName={getInputErrorClasses()}
            placeholder="First name"
            disabled={loading}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last name
        </label>
        <div className="mt-1">
          <TextField
            name="lastName"
            id="lastName"
            defaultValue={user.lastName}
            className={getInputClasses()}
            errorClassName={getInputErrorClasses()}
            placeholder="Last name"
            disabled={loading}
          />
        </div>
      </div>
      <div>
        <Button type="submit" disabled={loading}>
          Save
        </Button>
      </div>
    </Form>
  )
}

export default EditUserForm
