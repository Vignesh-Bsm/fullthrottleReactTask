
import React from'react'
import 'materialize-css';
import { Navbar,Icon,NavItem } from 'react-materialize';

function Nav(){
    return (
        <Navbar
  alignLinks="left"
  
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="">
    <h5>FullThrottle Labs -- React Js Task</h5>
  </NavItem>
  
</Navbar>
    )
}
export default Nav
{/* <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Logo</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="">
    Getting started
  </NavItem>
  <NavItem href="components.html">
    Components
  </NavItem>
</Navbar> */}