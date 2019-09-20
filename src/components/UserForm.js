import React from "react";
import { Form, } from "semantic-ui-react";

class UserForm extends React.Component {
  state = { firstName: "", email: "", };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { firstName, email, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Button color="purple">Save</Form.Button>
      </Form>
    )
  }
}

export default UserForm;
