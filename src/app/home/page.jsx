import Btn from '@/components/btn'
import React from 'react'
import style from '@/app/style/Home.module.css'
// import img from '../../../public/asset/homeImg/leaf.png'



const Home = () => {
    return (
        <>
            {/* MainBanner Start */}
            <div className="container-fluid bg-dark vh-100">
                <div className="container">
                    <div className="row p-6 align-items-center">
                        <div className="col-6 text-white">
                            <h1>Healthy Eating is important part of lifestyle</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting  type specimen Maker including versions .</p>
                            <button className="btn text-white border border-1 border-warning d-flex">
                                Order Now <img src="asset/homeImg/Frame.jpg" alt="" className="ms-2" />
                            </button>
                            <p className={`${style.scroll} mt-6`}>Scroll</p>
                        </div>
                        <div className="col-6">
                            <div className="img p-6">
                                <img src="./asset/homeImg/Rectangle25.jpg" className={`${style.imag} border border-4`} />
                                <div className="d-flex position-relative">
                                    <div className="img me-6 ">
                                        <img src="./asset/homeImg/Ellipse1.jpg" className={`${style.ell1} rounded-circle position-absolute border border-4`} alt="" />
                                    </div>
                                    <div className="img me-6">
                                        <img src="./asset/homeImg/Ellipse2.jpg" className={`${style.ell2} rounded-circle position-absolute border border-4`} alt="" />
                                    </div>
                                    <div className="img me-6">
                                        <img src="./asset/homeImg/Ellipse3.jpg" className={`${style.ell3} rounded-circle position-absolute border border-4`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* MainBanner End */}

            {/* AboutUs Start */}
            <div className="about mt-6 p-6">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row  align-items-center">
                            <div className="col-6">
                                <div className="img position-relative">
                                    <img src="/asset/homeImg/rec2.jpg" className={`${style.rec2}`} alt="" />
                                    <img src="/asset/homeImg/rec3.jpg" className={`${style.rec3} border border-4 border-white`} alt="" />
                                </div>
                            </div>
                            <div className="col-6 ">
                                <h2>About Us</h2>
                                <p>The Weekend Address, is a hotel has opened in this textile as well as diamond hub of India, Offering 274 rooms, 2 multi cuisine restaurant, fitness center, swimming pool, kids play area conference, lawn and banquet. Recognized as a pioneer and an icon amongst luxury hotels in Surat. Its exquisite interiors.</p>
                                <p>he Weekend Address, Surat is ideally located near to the Surat international airport and hotel.</p>
                                <Btn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* AboutUs Start */}

            {/* Project Amenities Start */}
            <div className="ProjAmenities">
                <div className="container-fluid">
                    <div className="container">
                        <div className="title p-6 mt-6 text-center">
                            <h2 className={`${style.h2}`}>Project  Amenities</h2>
                            <img src="../asset/homeImg/line.jpg" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit magna at dui commodo facilisis. Vestibulum viverra risus id diam hendrerit vehicula.</p>
                        </div>
                        <div className="row">
                            <div className={`${style.card} col-3 p-6`}>
                                <div className="img ">
                                    <img src="../asset/homeImg/PA/5.jpg" className='rounded-4' alt="" />
                                </div>
                                <div className={`${style.txt} txt d-flex align-items-center p-2 rounded-4`}>
                                    <div>
                                        <h4>Swimming Pool</h4>
                                        <span>Amenities</span>
                                    </div>
                                    <div className={`${style.mag}`}>
                                        <img src="../asset/homeImg/PA/mag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.card} col-3 p-6`}>
                                <div className="img ">
                                    <img src="../asset/homeImg/PA/2.jpg" className='rounded-4' alt="" />
                                </div>
                                <div className={`${style.txt} txt d-flex align-items-center p-2 rounded-4`}>
                                    <div>
                                        <h4>Discotheque</h4>
                                        <span>Amenities</span>
                                    </div>
                                    <div className={`${style.mag}`}>
                                        <img src="../asset/homeImg/PA/mag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.card} col-3 p-6`}>
                                <div className="img ">
                                    <img src="../asset/homeImg/PA/3.jpg" className='rounded-4' alt="" />
                                </div>
                                <div className={`${style.txt} txt d-flex align-items-center p-2 rounded-4`}>
                                    <div>
                                        <h4>Game Zone</h4>
                                        <span>Amenities</span>
                                    </div>
                                    <div className={`${style.mag}`}>
                                        <img src="../asset/homeImg/PA/mag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.card} col-3 p-6`}>
                                <div className="img ">
                                    <img src="../asset/homeImg/PA/4.jpg" className='rounded-4' alt="" />
                                </div>
                                <div className={`${style.txt} txt d-flex align-items-center p-2 rounded-4`}>
                                    <div>
                                        <h4>Mini Theater</h4>
                                        <span>Amenities</span>
                                    </div>
                                    <div className={`${style.mag}`}>
                                        <img src="../asset/homeImg/PA/mag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Amenities End */}

            {/* Rooms Start */}
            <div className={`${style.rooms}`}>
                <div className="container-fluid">
                    <div className="container">
                        <div className=" p-6 mt-6 text-center">
                            <h2 className={`${style.h2}`}>Rooms</h2>
                            <img src="../asset/homeImg/line.jpg" alt="" />
                            <p>Comfortable accommodation directly in the hotel with extensive Wellness and exceptional gastronomy.</p>
                            <div className="row">
                                <div className="col-6">
                                    <div className="card">
                                        <div className={`${style.imgr} img-fluid`}>
                                            <img src="../asset/homeImg/rooms/room1.jpg" alt="" />
                                        </div>
                                        <div className={`${style.txt}`}>
                                            <div className="card p-6 ">
                                                <img src="../asset/homeImg/rooms/1.jpg" alt="" />
                                                <h5>Single Room</h5>
                                                <Btn />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className={`${style.imgr} img-fluid`}>
                                            <img src="../asset/homeImg/rooms/room2.jpg" alt="" />
                                        </div>
                                        <div className={`${style.txt}`}>
                                            <div className="card p-6 ">
                                                <img src="../asset/homeImg/rooms/2.jpg" alt="" />
                                                <h5>Delux Room</h5>
                                                <Btn />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Rooms End */}

            {/* Blog Start */}
            <div className="blog">
                <div className="congtainer-fluid">
                    <div className="container">
                        <div className="title  p-6 mt-6 text-center">
                            <h2 className={`${style.h2}`}>Blog</h2>
                            <img src="../asset/homeImg/line.jpg" alt="" />
                            <p>Comfortable accommodation directly in the hotel with extensive Wellness and exceptional gastronomy.</p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img src="../asset/homeImg/blog/1.jpg" className="card-img-top" alt="..." />
                                    <div className={`${style.blg}`}>
                                        <img src="../asset/homeImg/blog/4.png" alt="" />
                                        <h5 clasnameclassNames="card-title">Julie Christie</h5>
                                        <span className='fl 
                                        '>jun 03/2023</span>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src="../asset/homeImg/blog/2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src="../asset/homeImg/blog/3.jpg" className="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}
        </>
    )
}

export default Home