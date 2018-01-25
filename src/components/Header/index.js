import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    logout() {
        window.location = '/'
    }

    render() {

        return (
            <header className="app-header">
                <div className="logo"><img src={'/assets/images/logo-stroked.svg'} alt="Pupil" /></div>
                <nav>
                    <ul>
                        <li><NavLink to="/sales">Sales</NavLink></li>
                        <li><NavLink to="/lettings">Lettings</NavLink></li>
                        <li><NavLink to="/admin">Admin</NavLink></li>
                    </ul>
                </nav>
                <div className="user">
                    <div className="avatar">
                        <img src={'/assets/images/avatar.png'} alt="User" />
                    </div>
                    <div className="userinfo">
                        <div className="name">Flora Owens</div>
                        <div className="desc">Faux Properties</div>
                    </div>

                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle>
                            <span className="icon-chevron-down"></span>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem header>Lettings</DropdownItem>
                            <DropdownItem>Profile</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={this.logout.bind(this)}>Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </header>
        )
    }
}

export default Header;
