import { Form, TextField } from '@redwoodjs/forms'

import Button from '../Shared/Button/Button'
import { getInputClasses, getInputErrorClasses } from '../Shared/Form'

interface ConnectToTeacherFormProps {
  onRequestConnectToTeacher: (email: string) => void
}

interface FormInput {
  email: string
}

const ConnectToTeacherForm = ({
  onRequestConnectToTeacher,
}: ConnectToTeacherFormProps) => {
  return (
    <Form<FormInput>
      onSubmit={(data) => {
        onRequestConnectToTeacher(data.email)
      }}
    >
      <TextField
        name="email"
        placeholder="Enter teacher's email"
        className={getInputClasses()}
        errorClassName={getInputErrorClasses()}
      />
      <Button overrides="mt-4" type="submit">
        Connect to Teacher
      </Button>
    </Form>
  )
}

export default ConnectToTeacherForm
