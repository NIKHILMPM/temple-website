import React from 'react'

const beste = () => {
    return (
        <div>
            <div className="block md:hidden ">
                <div
                    className="w-screen h-screen flex justify-center items-end bg-center bg-cover"
                    style={{ backgroundImage: "url('/background/committebg.jpg')" }}
                >
                    <div className="h-[90%] w-[70%] flex justify-around items-center bg-opacity-90 rounded-xl overflow-hidden shadow-lg">
                        <div className="h-[85%] w-full mb-10">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={70}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                loop={true}
                                className="h-full w-full flex justify-center"
                            >
                                {committeeList.map((committegroup, index) => (
                                    <SwiperSlide key={index}>
                                        {/* <div className="h-full w-full backdrop-blur-2xl font-bold font-serif rounded-lg p-6 overflow-y-auto flex flex-col justify center items-center"> */}
                                        <div className="h-full w-full bg-black/20 text-white font-bold font-serif rounded-lg p-6 overflow-y-auto flex flex-col justify center items-center">

                                            <div className="h-[20%] w-full flex justify-center items-center">
                                                <h2 className="text-xl mb-4 text-center">{committegroup.title}</h2>
                                            </div>
                                            <div className="h-[60%] w-full flex justify-start items-start overflow-y-auto">
                                                <table className="w-full text-[20%] table-fixed border-collapse">
                                                    <thead>
                                                        <tr className="h-12 ">
                                                            <th className="px-2 py-1 text-center">Name</th>
                                                            <th className="px-2 py-1 text-center">Phone No.</th>
                                                            <th className="px-2 py-1 text-center">Designation</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {committegroup.items.map((item) => (
                                                            <tr key={item.name} className="h-12">
                                                                <td className="px-2 py-1 text-center align-middle h-12">{item.name}</td>
                                                                <td className="px-2 py-1 text-center align-middle h-12 truncate">{item.phone}</td>
                                                                <td className="px-2 py-1 text-center align-middle h-12">{item.designation}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>


                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div >
                    </div >
                </div >
            </div>
        </div>
    )
}

export default beste