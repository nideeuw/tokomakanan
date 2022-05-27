import React from "react";
import { Carousel } from 'react-carousel-minimal';
import Header from "./header";

function Home() {
    const data = [
        {
            image: "https://cdn.mallofindonesia.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-09-at-07.31.52.jpeg"
        },
        {
            image: "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/promo-mcd-5-potong-ayam-cuma-rp-49545.jpg"
        },
        {
            image: "https://nos.jkt-1.neo.id/mcdonalds/promos/April2020/IsUxsSwvQpwOrMOtZLLl.jpg"
        },
        {
            image: "https://nos.jkt-1.neo.id/mcdonalds/promos/March2022/inCvJkNgOTxXWdEULzSU.jpg"
        },
        {
            image: "https://nos.jkt-1.neo.id/mcdonalds/promos/April2020/aXeBrGj9gUZSyCtNMLmq.jpg"
        }
    ];

    return (
        <div className="App">
            <Header />
            <div style={{ textAlign: "center" }}>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="850px"
                        height="500px"
                        radius="10px"
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>

                <div className="2xl:container 2xl:mx-auto">
                    <div className="lg:px-20 md:px-6 px-4 md:py-20 py-8">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">Menu Favorit</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 md:mt-10">
                            <div className=" flex justify-center items-center mt-8 md:mt-24">
                                <img className="rounded-3xl" src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1639561518/ib68oh2grjwjcm4hincl.png" alt="cireng" />
                            </div>
                            <div className=" flex justify-center items-center mt-8 md:mt-24">
                                <img className="rounded-3xl" src="https://storage.googleapis.com/cdn-1.pintaria.com/wp/roti-burger-Pintaria-200806023904.jpg" alt="burger" />
                            </div>
                            <div className="flex justify-center items-center mt-8 md:mt-24">
                                <img className="rounded-3xl" src="https://asset.kompas.com/crops/K3yRtga4WYTNBr2kHKNe8GILyn0=/0x0:4044x2696/375x240/data/photo/2021/03/19/6054801497f35.jpg" alt="steak" />
                            </div>
                            <div className="flex justify-center items-center mt-8 md:mt-24">
                                <img className="rounded-3xl" src="https://www.milkmaid.in/sites/default/files/2022-03/Strawberry-IceCream-590x436.jpg" alt="eskrim stroberi" />
                            </div>
                            <div className="flex justify-center items-center mt-8 md:mt-24">
                                <img className="rounded-3xl" src="https://nos.jkt-1.neo.id/mcdonalds/foods/March2022/0QrbdlHXnfgbqxMAb8xu.png" alt="eskrim" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;