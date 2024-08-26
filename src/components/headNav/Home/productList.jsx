import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import axios from "axios";

// Register Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const ProductList = () => {
    const [equipList, setEquipList] = useState([])
    useEffect(() => {
        const getListData = async () => {
            try {
                const getEquiList = await axios.get("https://fit-partner-backend-vyh9.vercel.app/listEquip")
                setEquipList(getEquiList.data)
            } catch (err) {
                console.log(err)
            }
        }
        getListData()
    }, [])
    console.log(equipList, "25")
    return (
        <div className=" w-3/4 mx-auto mt-96 md:mt-7">
            <Swiper
                autoplay={{
                    delay: 1300,
                    disableOnInteraction: false
                }}
                loop={true}
                breakpoints={{
                    100: {
                        with: 100,
                        slidesPerView: 1
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2
                    },
                    768: {
                        width: 768,
                        slidesPerView: 3
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 4
                    }

                }
                }
                modules={[Navigation, Autoplay,Pagination]}
                spaceBetween={56}
                slidesPerView={4}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {equipList.map((list) => (
                    <>
                        <SwiperSlide

                        >
                            <div className="border rounded-lg shadow  text-center relative">
                                <div className="px-2 py-2">
                                    <img src={list.imgUrl} alt="" className="rounded-md  w-48 h-48 opacity-60 hover:opacity-100 transition-all duration-500 border mx-auto" />

                                    <h1 className="text-sm"></h1>
                                    <div className="">
                                        <h1 className="text-[#EA3E69]">{list.toolName}</h1>
                                        <h1 className="text-xs">{list.price}</h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </>
                ))}
            </Swiper>
        </div>
    );

}

export default ProductList;
