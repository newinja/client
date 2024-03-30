import React from 'react'

const Service = () => {
    return (
        <div className='container mx-auto lg:px-40'>

            <div className='md:grid grid-cols-2  items-center justify-items-center p-6' >
                <img src="/deforestation-concept-illustration_114360-8696.avif" alt="img_service_content" className='p-4' />
                <div className="Service-content  border-gray-600">
                    <h1 className='text-4xl px-10 py-4 text-green-800 font-bold'>WHO WE ARE</h1>
                    <h3 >
                        <p className='text-2xl  md:text-3xl font-bold'>47 ปี ประสบการณ์การบริหาร  </p>
                        <p className='text-2xl  md:text-3xl font-bold'>จัดการภูมิทัศน์ และดูแลต้นไม้ใหญ่</p>
                    </h3>
                    <p className=' text-justify py-2 text-2xl font-normal' >SO GREEN บริษัทดูแลสวนผู้นำด้านการบริหารจัดการงานภูมิทัศน์ ดูแลสวนบริษัท รับตัดต้นไม้ใหญ่ มายาวนานกว่า 40 ปี ด้วยการจัดการคนสวนกว่า 1,000 คนและให้บริการตัดต้นไม้ใหญ่ที่ถูกต้องตามหลักพฤกษศาสตร์</p>
                    <p className='text-2xl  md:text-3xl font-bold'>“ให้ SO GREEN สร้างคุณค่าให้พื้นที่สีเขียวของคุณ”</p>
                </div>
            </div>
            <div className='text-3xl text-center border-b-2 p-3 text-green-800'>บริการของเรา</div>

        </div>
    )
}

export default Service