import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './App.css';

import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import Footer from './components/Footer';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Marques Johnson",
      headerLinks: [
        {title: "Home", path:"/"},
        {title: "Skills", path:"/skills"},
        {title: "About", path:"/about"},
        {title: "Contact", path:"/contact"}
      ],

      home: {
        title: "Progress",
        subTitle: "Projects that Matter",
        text: "Check out my projects"
      },

      skills: {
        title: "Technical Skills",
      },

      about: {
        title: "About Me",
      },

      contact: {
        title: "Let's Talk",
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Marques Johnson</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/skills">Skills</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/skills" render={() => <SkillsPage title={this.state.skills.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
        </Container>
      <Footer />
      </Router>
    );
  }
}

export default App;
