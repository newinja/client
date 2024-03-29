import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_over justify-between text-center container mx-auto grid grid-cols-1 md:grid-cols-2 m-3">
      <div className="Footer_Logo "><p className="font-bold text-3xl m-5" >LOGO</p></div>
      <div className="Footer_Address">
        <p>ที่อยู่ : 90/140 หมู่ที่ 3 ตำบลบางบัวทอง</p>
        <p>อำเภอบางใหญ่ จังหวัดนนทบุรี 11110</p>
        <p>เบอร์ติดต่อ : 080-000-0000</p>
      </div>
      {/* <div className="Footer_Map"></div> */}
      </div>
      <div className="Footer_Copyright border-t-4 border-green-700 ">
        <p className="text-center text-green-700 font-bold mt-5 ">Copyright 2024 @ WIN DESIGN All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
