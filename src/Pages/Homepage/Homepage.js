 import videoHome from '../../video/hero-video-home.mp4'
 import imgWhoWeAre from '../../img/img-who-we-are.svg'
 import imgOurSolutions from '../../img/img-our-solutions.svg'
 import imgRoboticType from '../../img/img-robotics-type.svg'
 import imgWhyAdroid from '../../img/why-adroid.svg'
 import imgUniversalRobots from '../../img/img-partner-universal-robots.svg'
 import imgFanuc from '../../img/img-logo-fanuc.svg'
 import imgKuka from '../../img/img-partner-kuka.svg'
 import imgAbb from '../../img/logo-partner-abb.svg'
 import imgNews from '../../img/img-news.svg'
 import './style.css'
export const Homepage = () => {
    return (
        <>
            <div className='ad-hero-home'>
                <video className="w-100" autoPlay loop playsInline muted>
                    <source src={ videoHome }></source>
                </video>
    
                <div className="ad-hero-text">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-2"><u>The future technology</u></div>
                                <h1 className='text-white h1_xxlarge'>Automation solutions <span className='text-gradient'>powered by AI</span></h1>
                                <p className='text-white'>Discover the Future of Robotics with ADROID.</p>
                                <a href="/" className='btn btn-primary btn-lg'>Try us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="py-80">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>The future technology</u></div>
                            <h2 className='mb-2'>We’re Changing the Way the World Thinks About Robots</h2>
                            <p className='mb-3'>At ADROID, we envision a future where robots work alongside humans to create a safer, more productive world. Our mission is to democratize robotics and make it accessible to businesses of all sizes, by providing automation solutions that are cost-effective, scalable, and easy to implement.</p>
                            <a href="/" className='btn btn-primary btn-with-arrow'>Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"/></svg></a>
                        </div>

                        <div className="col-lg-5">
                            <figure>
                                <img src={ imgWhoWeAre } alt="We’re Changing the Way the World Thinks About Robots" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-80">
                <div className="container">
                    <div className="row align-items-center justify-content-between flex-lg-row-reverse">
                        <div className="col-lg-5">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>Our Solutions</u></div>
                            <h2 className='mb-2'>We Deliver Exceptional Robotics Products and Services Around the World</h2>
                            <p className='mb-3'>ADROID offers a range of Autonomous Mobile Robots (AMRs) that can navigate complex environments with ease, making them ideal for a variety of applications, such as material handling, logistics, and cleaning.</p>
                            <a href="/" className='btn btn-primary btn-with-arrow'>Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"/></svg></a>
                        </div>

                        <div className="col-lg-5">
                            <figure>
                                <img src={ imgOurSolutions } alt="We’re Changing the Way the World Thinks About Robots" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pe-lg-4">
                            <div className="ad-card bg-grey">
                                <div className="ad-card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-7">
                                            <h4>Cloud Based Robotics</h4>
                                            <p className='text-medium pb-0 pe-lg-4'>Our cloud-based Robotics as a Service (RAAS) platform allows businesses to access the latest automation technology without the need for upfront capital expenditure.</p>
                                        </div>
                                        <div className="col-md-5">
                                            <figure className='mb-0'><img src={ imgRoboticType } alt="Rototic type"/></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 ps-lg-4">
                            <div className="ad-card bg-grey">
                                <div className="ad-card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-7">
                                            <h4>Robotics Consulting</h4>
                                            <p className='text-medium pb-0 pe-lg-4'>ADROID offers consulting services to help businesses identify areas where automation can improve their operations.</p>
                                        </div>
                                        <div className="col-md-5">
                                            <figure className='mb-0'><img src={ imgRoboticType } alt="Rototic type"/></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>WHY ADROID</u></div>
                            <h2 className='mb-2'>Revolutionizing the Robotics Industry with RAAS</h2>
                            <p className='mb-3'>At ADROID, we believe that Robotics should be accessible to everyone, regardless of their technical expertise or financial resources. That's why we've developed a Robotics as a Service (RAAS) platform that makes it easy for businesses to adopt automation technology and scale their operations as needed.</p>
                            <a href="/" className='btn btn-primary btn-with-arrow'>Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"/></svg></a>
                        </div>

                        <div className="col-lg-5">
                            <figure>
                                <img src={ imgWhyAdroid } alt="We’re Changing the Way the World Thinks About Robots" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>FUN FACTS</u></div>
                            <h2 className='mb-2'>ADROID in Numbers</h2>
                            <p className='mb-3'>It starts with our first meeting and continues from deployment through successful adoption and operation.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">100+</div>
                                    <p className='pb-0'>Robot Models</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">50+</div>
                                    <p className='pb-0'>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">10M$+</div>
                                    <p className='pb-0'>Investment Raised</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">20+</div>
                                    <p className='pb-0'>Countries Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ad-fun-facts py-80">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>OUR PARNERS</u></div>
                            <h2 className='mb-2'>Industry Leaders</h2>
                            <p className='pb-0'>ADROID partners with leading Robotics and AI companies to bring you the latest technology and expertise in the field. Together, we're working to create a safer, more productive world with Robotics.</p>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='pb-2'><img src={ imgAbb } alt="Universal Robots" /></figure>
                                            <p className='text-white pb-0'>ABB</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='pb-2'><img src={ imgUniversalRobots } alt="Universal Robots" /></figure>
                                            <p className='text-white pb-0'>UNIVERSAL ROBOTS</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='pb-2'><img src={ imgFanuc } alt="Universal Robots" /></figure>
                                            <p className='text-white pb-0'>FANUC</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="ad-card bg-dark text-center py-4">
                                        <div className="ad-card-body">
                                            <figure className='pb-2'><img src={ imgKuka } alt="Universal Robots" /></figure>
                                            <p className='text-white pb-0'>KUKA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row align-items-center justify-content-between flex-lg-row-reverse">
                        <div className="col-lg-4">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>NEWS</u></div>
                            <h2 className='mb-2'>Our News</h2>
                            <p className='mb-3'>It starts with our first meeting and continues from deployment through successful adoption and operation.</p>
                            <a href="/" className='btn btn-primary btn-with-arrow'>Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"/></svg></a>
                        </div>

                        <div className="col-lg-7">
                            <figure>
                                <img src={ imgNews } alt="We’re Changing the Way the World Thinks About Robots" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage