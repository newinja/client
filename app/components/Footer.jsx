import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid-cols-2 gap-5 md:grid-flow-col">
        <a className="link link-hover" href="/">หน้าแรก</a>
        <a className="link link-hover" href="/garden-service">บริการของเรา</a>
        <a className="link link-hover" href="/blogs">บทความ</a>
        <a className="link link-hover" href="/portfolio">ผลงาน</a>
        <a className="link link-hover" href="/contact-me">ติดต่อเรา</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Win</p>
      </aside>
    </footer>
  );
};

export default Footer;
