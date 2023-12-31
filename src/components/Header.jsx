import style from "@/app/style/Header.module.css"
// import style from "@/app/style/Footer.module.css"
function Header() {
    return (
        <>
            <header className="bg-dark">
                <div className="container-fluid">
                    <div className="container">
                        <nav id={style.navbar} className="navbar navbar-expand-lg justify-content-between shadow-sm">
                            <div className={`${style.logo}`}>
                                <img src="./asset/homeImg/image 1.png" alt="" />
                            </div>
                            <a href="" className={`fw-bold text-decoration-none text-white`}>Home</a>
                            <a href="" className={`fw-bold text-decoration-none text-white`}>About Us</a>
                            <a href="" className={`fw-bold text-decoration-none text-white`}>Blog</a>
                            <a href="" className={`fw-bold text-decoration-none text-white`}>Gallery</a>
                            <a href="" className={`fw-bold text-decoration-none text-white`}>Rooms</a>
                            <a href="" className={`fw-bold text-decoration-none text-white`}>Amenities</a>
                            <a href="" className={`fw-bold text-decoration-none text-white`}>Contact Us</a>
                            <div className="btn text-white border border-1 border-warning d-flex">
                                Order Now <img src="asset/homeImg/Frame.jpg" alt="" className="ms-2" />
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header