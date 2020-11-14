        import React from 'react'
        import "./index.css"

        function Home(){
                return(
                    <div>

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            <li data-target="" data-slide-to="0" class="active"></li>
            <li data-target="" data-slide-to="1"></li>
            <li data-target="" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src=" https://res.cloudinary.com/toniaclara/image/upload/c_scale,h_160/v1598785397/hospi1_trzqby.jpg" className="d-block w-100" alt=""/>
            <div className="carousel-caption d-none d-md-block">
                <h5 className="hstyle">ABOUT US</h5>
                <p className="pstyle">The Augustine's Hospital has been newly built on nine floors, on the same site as the Cardiac Centre<br/> next to Mega Plaza, <br/>and provides care in all fields of Internal Medicine</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://res.cloudinary.com/toniaclara/image/upload/c_scale,h_160/v1598727865/face_onsqsw.jpg" className="d-block w-100" alt=""/>
            <div className="carousel-caption d-none d-md-block">
                <h5>ABOUT US</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://res.cloudinary.com/toniaclara/image/upload/c_scale,h_160/v1598727865/face_onsqsw.jpg" className="d-block w-100" alt=""/>
            <div className="carousel-caption d-none d-md-block">
                <h5>ABOUT US</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions"  role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
                    </div>
                )
            }
        export default Home