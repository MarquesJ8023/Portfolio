 import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
/*
class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null
        };
    }

    handleChange = (event) => {

       const target = event.target;
       const value = target.type === 'checkbox' ? target.checked : target.value;
       const name = target.name;

       this.setState({
           [name]: value
       })

    }

    handleSubmit =(event) => {
        event.preventDefault();

        this.setState({
            default: true,
        });

    }


    render() {
        return(
            <div>
                <Hero title={this.props.title}/>
                <Content>
                    <form onSubmit={this.handleSubmit} action="https://formspree.io/xoqarzog" method="POST">
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="d-inline-block" varient="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </form>
                </Content>
            </div>
        );
    }
}

export default ContactPage;
*/


function ContactPage(props) {
    return(
        <div>
         <Hero title={props.title}/>  
            <Content fluid={true}> 
                <Form action="https://formspree.io/xoqarzog"
                    method="POST">
                        <label> 
                            Your name:
                                <input type="text" name="name" />
                        </label>        
                        <label className="justify-space-around" > 
                            Your email:
                            <input type="text" name="_replyto" />
                        </label>
                        <label>
                            Your message:
                            <textarea name="message"></textarea>
                        </label>
                    <Button type="submit">Send</Button>
                </Form>
            </Content>
        </div>
    );    
}
export default ContactPage;