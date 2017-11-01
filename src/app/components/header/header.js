import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Form, FormGroup
} from 'reactstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {TextField} from 'material-ui';

const logo = require('../../assets/img/logo.jpg');

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.login = this.login.bind(this);
        this.doLogout = this.doLogout.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.state = {
          isOpen: false,
          modal: false,
          dropdownOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      
      modalToggle(){
          this.setState({
            modal: !this.state.modal
          })
      }

      dropdownToggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
      render() {
          //console.log(this.props);
        return (
          <div>
            <Navbar color="faded" light expand="md">
              <Link className="nav-link" to="/">
                <img src={logo} style={{height: 40, width: 'auto'}} />
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                      {(()=>{
                          if(this.props.auth){
                              return(
                                <span>
                                  
                                  <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                                          <DropdownToggle caret>
                                              {this.props.auth.displayName}
                                          </DropdownToggle>
                                          <DropdownMenu>
                                          <DropdownItem>Profile</DropdownItem>
                                          
                                          <DropdownItem onClick={this.doLogout}>Logout</DropdownItem>
                                          </DropdownMenu>
                                      </Dropdown>
                                  </NavItem>
                                </span>
                              )
                          }else{
                              return(
                            <NavItem>
                                <NavLink onClick={this.modalToggle}>Login</NavLink>
                            </NavItem>
                            )
                          }
                      })()}
                </Nav>
              </Collapse>
            </Navbar>
            <header className="headerTop">
              <Container>
                <Nav>
                    <NavItem>
                      <Link className="nav-link" to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/news">News</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/fixture">Fixture</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/result">Result</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/table">Table</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/">Players</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/">Teams</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/">Coaches</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/showcase">Showcase</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/gallery">Gallery</Link>
                    </NavItem>
                    {(()=>{
                      if(this.props.auth){
                        return(
                          <NavItem>
                          <Link className="nav-link" to="/social">Social</Link>
                        </NavItem>
                        )
                      }
                    })()}
                    
                  </Nav>
                </Container>
            </header>
            <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.login}>
                    <FormGroup>
                      <TextField fullWidth={true} type="email" onChange={this.handleEmailChange} label="Email" />
                    </FormGroup>
                    <FormGroup>
                      <TextField fullWidth={true} type="password" onChange={this.handlePasswordChange} label="Password" />
                    </FormGroup>
                    <FormGroup>
                      <Button raised type="submit">Login</Button>
                    </FormGroup>
                </Form>
                    <a href="/user/google/login" className="btn btn-danger outline">Login With Google</a>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.modalToggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
          </div>
        );
      }
      doLogout(){
          console.log("fired");
          this.props.logout();
      }
      login(){

      }
}

function matchStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(matchStateToProps)(HeaderComponent);
