import React from "React"
import { render } from "react-dom"
import { withFormik, Form, Field } from "formik"
import Yup from "yup"

const SignUpForm = ({ values, handleChange }) => {
  return (
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Submit</button>
    </Form>
  )
}

const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: "",
    }
  },
  handleSubmit(values) {
    //Make GraphQL request
  },
})(SignUpForm)

export default FormikForm
