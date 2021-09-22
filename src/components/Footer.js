import React from "react";
import "../assets/css/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container2">
        <p className="footerTitle">Questions? Contact us.</p>
        <div className="break"></div>
        <div className="footerRow">
          <div className="footerCol">
            <a className="footerLink" href="#">
              FAQ
            </a>
            <a className="footerLink" href="#">
              Investor Relations
            </a>
            <a className="footerLink" href="#">
              Ways to Watch
            </a>
            <a className="footerLink" href="#">
              Corporate Information
            </a>
          
          </div>

          <div className="footerCol">
            <a className="footerLink" href="#">
              Help Centre
            </a>
            <a className="footerLink" href="#">
              Jobs
            </a>
            <a className="footerLink" href="#">
              Terms of Use
            </a>
            <a className="footerLink" href="#">
              Contact Us
            </a>
          </div>

          <div className="footerCol">
            <a className="footerLink" href="#">
              Account
            </a>
            <a className="footerLink" href="#">
              Redeem gift cards
            </a>
            <a className="footerLink" href="#">
              Privacy
            </a>
            <a className="footerLink" href="#">
              Speed Test
            </a>
          </div>

          <div className="footerCol">
            <a className="footerLink" href="#">
              Media Centre
            </a>
            <a className="footerLink" href="#">
              Buy gift cards
            </a>
            <a className="footerLink" href="#">
              Cookie Preferences
            </a>
            <a className="footerLink" href="#">
              Legal Notices
            </a>
          </div>
        </div>
        <div className="break"></div>
        <p className="footerText">©2020 Anyash LLP. & Akkaara</p>
      </div>
    </div>
  );
}

export default Footer;
