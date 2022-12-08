import React from 'react';
import { CDBBox, CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/Intro" className="d-flex align-items-center p-0 text-dark">
              <img 
              alt=""
              src="https://cdn-www.bluestacks.com/bs-images/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP.png"
              width="30px" />
              <span className="ml-3 h5 font-weight-bold">Minecraft For ioT</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              YAH
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/Intro">Resources</CDBFooterLink>
              <CDBFooterLink href="/Intro">About Us</CDBFooterLink>
              <CDBFooterLink href="/Intro">Contact</CDBFooterLink>
              <CDBFooterLink href="/Intro">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/Intro">Support</CDBFooterLink>
              <CDBFooterLink href="/Intro">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/Intro">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/Intro">Windframe</CDBFooterLink>
              <CDBFooterLink href="/Intro">Loop</CDBFooterLink>
              <CDBFooterLink href="/Intro">Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5">&copy; Devwares, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};