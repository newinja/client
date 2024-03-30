import React from 'react'

const Service = () => {
    return (
        <div className='container mx-auto lg:px-40'>
            <div className='md:grid grid-cols-2  items-center justify-items-center p-6' >
                <img src="/deforestation-concept-illustration_114360-8696.avif" alt="img_service_content" className='p-4' />
                <div className="Service-content  border-gray-600">
                    <h1 className='text-4xl px-10 py-4 text-green-800 font-bold'>WHO WE ARE</h1>
                    <h3 >
                        <p className='text-2xl  md:text-3xl font-bold'>10 ปี ประสบการณ์การบริหาร  </p>
                        <p className='text-2xl  md:text-3xl font-bold'>จัดการภูมิทัศน์ และดูแลต้นไม้ใหญ่</p>
                    </h3>
                    <p className=' text-justify py-2 text-2xl font-normal' >PATCHA GREEN บริษัทดูแลสวนผู้นำด้านการบริหารจัดการงานภูมิทัศน์ ดูแลสวนบริษัท รับตัดต้นไม้ใหญ่ มายาวนานกว่า 10 ปี ด้วยการจัดการคนสวนกว่า 1,000 คนและให้บริการตัดต้นไม้ใหญ่ที่ถูกต้องตามหลักพฤกษศาสตร์</p>
                    <p className='text-2xl  md:text-3xl font-bold'>“ให้ PATCHA GREEN สร้างคุณค่าให้พื้นที่สีเขียวของคุณ”</p>
                </div>
            </div>
                    <div className='text-3xl text-center border-b-2 p-3 text-green-800 md:text-5xl'>บริการของเรา</div>
                <div className='mx-8 md:grid grid-cols-2'>
                    <img src='https://www.sogreen.asia/wp-content/uploads/2023/11/service-garden2-1024x1024.webp' alt=''/>
                    <div className='md:p-14'>
                        <div className='font-bold text-3xl pt-5 pb-5 md:mt-10'>บริษัทดูแลสวนและภูมิทัศน์ครบวงจร</div>
                        <p className='text-xl text-left pb-4'>เราให้บริการดูแลสวนบริษัท องค์กร หน่วยงานรัฐ โรงงานอุตสาหกรรมด้วยคนสวนขั้นต่ำ 10 คนขึ้นไป สามารถส่งมอบแรงงานคนสวนได้ครบถ้วนตามสัญญาหมดปัญหาเรื่องสวน</p>
                        <p className='p-5 text-lg text-center border-l-4 border-green-800'>บริษัทดูแลสวน และภูมิทัศน์ครบวงจร เรามีความพร้อมในด้านการให้บริการรับดูแลสวนขนาดใหญ่ด้วยความสามารถในการจัดการคนสวนมากกว่า 1,000 คน</p>
                        <a  href='/contact-me'>
                        <p className='text-center p-2 rounded-md bg-green-700 mx-20 font-bold text-white mb-5' >สนใจบริการ</p>
                        </a>
                        <div className='border w-16 border-green-800 '></div>
                    </div>
                </div>

            <div className='exmple_portfolio'>
                <div>ตัวอย่างผลงานการดูแลสวนของเรา</div>
            </div>
        </div>
    )
}

export default Service