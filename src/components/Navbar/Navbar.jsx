import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems";
import './Navbar.css';


class Navbar extends Component{
    state = {clicked: false}

    handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavbarItems'>
                
                    <a href="/"><img className="navbar-logo" src="IMEE 2.png"></img></a>  
                
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                    
                                </a>
                                
                            </li>
                        )
                    })}
                </ul>
                <a href='/login' class="button"><Button id="nav_button">Iniciar sesión</Button></a>
                <a href='/register' class="button"><Button id="nav_button">Registro</Button></a>
            </nav>
        )
    }
}

export default Navbar;