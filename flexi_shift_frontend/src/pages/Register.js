import { Form } from "react-router-dom";

function Register(props) {
  return <div>
    <h3>Register</h3>
    <Form action="/register" method="POST">
      <input type="text" name="username" id="username" placeholder="Username"/>
      <input type="password" name="password" id="password" placeholder="Password"/>
      <input type="submit" value="Register" />
    </Form>
  </div>
}

export default Register;