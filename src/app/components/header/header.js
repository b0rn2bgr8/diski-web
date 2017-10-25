import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const logo = require('../../assets/img/logo.jpg');

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
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
          console.log(this.props);
        return (
          <div>
            <Navbar color="faded" light expand="md">
              <Link className="nav-link" to="/"><NavbarBrand>
                <img src={logo} style={{height: 40, width: 'auto'}} />
              </NavbarBrand></Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
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
                  <Link className="nav-link" to="/showcase">Showcase</Link>
                  </NavItem>
                  <NavItem>
                  <Link className="nav-link" to="/gallery">Gallery</Link>
                  </NavItem>
                  <NavItem>
                  <Link className="nav-link" to="/social">Social</Link>
                  </NavItem>
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
            <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                <ModalBody>
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
}

function matchStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(matchStateToProps)(HeaderComponent);
