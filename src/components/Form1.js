import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
export default class Form1 extends Component {
    state = { email: "", password: "", description: "", city: "" }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit=()=>{
        alert(this.state.email)
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}> 
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">description</Label>
                        <Input type="description" name="description" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" onChange={this.handleChange}>
                            <option>istanbul</option>
                            <option>ankara</option>
                            <option>izmir</option>
                            <option>adana</option>
                            <option>diyarbakır</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        )
    }
}
