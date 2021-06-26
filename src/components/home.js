import { Link } from "react-router-dom";

const HomeComponent = props => {

    return (
        <div>
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><a href="index.html">Filmy Upkaran</a></h1>

                    <nav id="navbar" className="navbar">
                        <ul>

                            <li><Link className="nav-link scrollto active" to="/app/login">Login</Link></li>
                            <li><Link className="nav-link scrollto active" to="/app/register">Register</Link></li>

                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            
                            <li><a className="nav-link scrollto " href="#portfolio">Product gallery</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
        
                            <li className="dropdown"><a href="#"><span>Services</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><Link className="nav-link" to="/app/listequipments">View Equipment</Link></li>
                                    
                                    <li><Link className="nav-link" to="/app/listcrew">View Crew Member</Link></li>
                                    
                                    <li><a href="#">Manage Order</a></li>
                                    
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

            <section id="hero">
                <div className="hero-container">
                    <h3>Welcome to <strong>Filmy Dunia</strong></h3>
                    <h1>We're Creative Agency</h1>
                    <h2>We are team of talented proffesionals we are here to help in showcasing your skills.</h2>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>

            <main id="main">

                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2>About</h2>
                            <h3>Learn More <span>About Us</span></h3>
                            <p>We filmy upkaran help you to find best equipments and services to led you to sucess.</p>
                        </div>

                        <div className="row content">
                            <div className="col-lg-6">
                                <p>
                                 We provide you the best suitable equipments according to your need and a professional crew support for proper guidence.Some of key features youi get:
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line"></i> 24*7 customer support to assist you.</li>
                                    <li><i className="ri-check-double-line"></i> Best products and proffesionals trainers.</li>
                                    <li><i className="ri-check-double-line"></i> Enjoy services at affordable rates.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                  Making it easy for content creators and also unproffesional users to create informative and entertaining videos and help them reaching their goals.
                                </p>
                                <a href="#" className="btn-learn-more">Learn More</a>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title">
                            <h2>Services</h2>
                            <h3>We do offer awesome <span>Services</span></h3>
                            <p>We come with some amazing features to make things easier for you.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4 className="title"><a href="">Globally Recognized</a></h4>
                                    <p className="description">we provide the best renting and buying services globally.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxs-tachometer"></i></div>
                                    <h4 className="title"><a href="">Fast delivery</a></h4>
                                    <p className="description">We provide you everything  what you need in least time.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-support"></i></div>
                                    <h4 className="title"><a href="">Crew support</a></h4>
                                    <p className="description">We have professionals to give you right path to start.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-user-voice"></i></div>
                                    <h4 className="title"><a href="">Support</a></h4>
                                    <p className="description">24*7 User support to help you throught each problem.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="cta" className="cta">
                    <div className="container">

                        <div className="text-center">
                            <h3>Call To Action</h3>
                            <p> In serach of incredible.</p>
                            <a className="cta-btn" href="#">Lets begin </a>
                        </div>

                    </div>
                </section>

                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title">
                            <h2>Product Gallery</h2>
                            <h3>Check our <span>Awesome Products</span></h3>
                            <p>we have the best services for everyone some of them are listed down.</p>
                        </div>


                        <div className="row portfolio-container">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <img src="assets/img/portfolio/portfol1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                
                                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <img src="assets/img/portfolio/portfol2.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                   
                                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <img src="assets/img/portfolio/portfol3.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    
                                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <img src="assets/img/portfolio/portfol4.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    
                                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <img src="assets/img/portfolio/portfol5.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                  
                                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <img src="assets/img/portfolio/portfol6.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                   
                                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <img src="assets/img/portfolio/portfol7.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                   
                                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <img src="assets/img/portfolio/portfol8.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    
                                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <img src="assets/img/portfolio/portfol9.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                  
                                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="pricing" className="pricing">
                    <div className="container">

                        <div className="section-title">
                            <h2>Pricing</h2>
                            <h3>Things you need at affordable<span> Prices</span></h3>
                            <p>Services you can rely and trust easily.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="box">
                                    <h3>Microphone</h3>
                                    <img src="assets/img/pricing/price2.jpg" className="img-fluid" alt="" />
                                    <h4><sup>₹</sup>500<span> / month</span></h4>
                                    <h3>Noise cancelation microphone at best prices for Rent/Buy</h3>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                <div className="box">
                                    <h3>Camera</h3>
                                    <img src="assets/img/pricing/price1.jpg" className="img-fluid" alt="" />
                                    <h4><sup>₹</sup>1500<span> / month</span></h4>
                                    <h5>Capture the best in you in affordable price.A camera ehich fulfils all your needs.</h5>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                <div className="box">
                                    <h3>Crerw support</h3>
                                    <img src="assets/img/pricing/price3.jpg" className="img-fluid" alt="" />
                                    <h4><sup>₹</sup>2000<span> / month</span></h4>
                                   <h5>Get professional support for you. A guidance to start and achieve your dreams.</h5>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="faq" className="faq">
                    <div className="container">

                        <div className="section-title">
                            <h2>F.A.Q</h2>
                            <h3>Frequently Asked <span>Questions</span></h3>
                        </div>

                        <ul className="faq-list">

                            <li>
                                <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">What is filmy Upkaran? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                    Filmy upkaran is a website where we offer renting and buying equipments for making professional and entertaining videos. And also providing professional crew support for proper guidance at applicable rates.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Is the equipments only available for rent service? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        No, buying and and renting both are available for everyone.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Is there any support service to help me if i face any sortproblem? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                       24*7 customer service is available to solve all your problems.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Is filmy upkaran safe? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                       Filmy upkaran follows all safety steps and keeps user data safe.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">When was filmy upkaran found? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                       It was found on 20th June 2021.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Who is the founder of filmy upkaran? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Filmy upkaran was developed by Prashant Rao and Prakhar Gupta under the guidence of Mohammad Mubassir Sir
                                    </p>
                                </div>
                            </li>

                        </ul>

                    </div>
                </section>

                <section id="team" className="team">
                    <div className="container">

                        <div className="section-title">
                            <h2>Team</h2>
                            <h3>Our Hardworking <span>Team</span></h3>
                            <p>Our tined and hard working team to get you what you need.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/img/team/gupta.jpeg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Prakhar Gupta</h4>
                                        <span>Developer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                             
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/img/team/rao.jpeg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Prashant Rao</h4>
                                        <span>Developer</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <h2>Contact</h2>
                            <h3>Contact <span>Us</span></h3>
                            <p>Wanna get in touch with us you are welcomed.</p>
                        </div>

                        <div>
                            <iframe style={{ border: 0, width: '100%', height: '270px' }} src="assets/img/map.png" frameborder="0" allowfullscreen></iframe>
                        </div>

                        <div className="row mt-5">

                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>Lucknow , Uttar Pradesh</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>prashantunofficial09.com , prakharji2020@gmail.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>Will be available soon...</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0">

                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>

                            </div>

                        </div>

                    </div>
                </section>

            </main>

            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Tempo</h3>
                                <p>
                                    Lucknow <br />
                                   Uttar Pradesh<br />
                                    India<br /><br />
                                    <strong>Phone:</strong> Will be available soon..<br />
                                    <strong>Email:</strong> prashantunofficial09@gmail.com<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">24*7 support</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Buy Equipments</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Rent Equipments</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Rent Crew members</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Globally recognized</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Filmy-upkaran</span></strong>. All Rights Reserved
                        </div>

                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomeComponent;