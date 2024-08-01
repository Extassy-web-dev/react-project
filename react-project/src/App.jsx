import './App.scss'
import logo from './assets/logo.svg'
import image1 from './assets/image 1.png'
import videoImg from './assets/video.png'
import sofa from './assets/sofa.png'
import livingroom from './assets/livingroom.png'
import workspace from './assets/workspace.png'
import library from './assets/library.png'
import klamby from './assets/klamby.png'
import mayoutlit from './assets/mayoutlit.png'
import zalora from './assets/zalora.png'
import geulis from './assets/geulis.png'
import rectangle from './assets/Rectangle 18.png'


function App() {


    return (
        <>
            <div className="main">
                <header>
                    <div className="container">
                        <div className="box">
                            <div className="left">
                                <img src={logo} alt="logo" />
                                <h1>Locus</h1>
                            </div>
                            <div className="center">
                                <nav>
                                    <a href="#">Home</a>
                                    <a href="#">Contact</a>
                                    <a href="#">Location</a>
                                    <a href="#">About Us</a>
                                </nav>
                            </div>
                            <div className="right">
                                <button>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="inspiration">
                    <div className="container">
                        <div className="inspiration__box">
                            <div className="inspiration__elem1">
                                <h1>Get the inspiration
                                    of interior design
                                    here</h1>
                                <p>architecture not only about engineering, it even
                                    lands to art and aesthetics. With us, you will get
                                    a residentical design with an extraordinary touch
                                    of art.</p>
                                <button>Let’s go</button>
                            </div>
                            <div className="inspiration__elem2">
                                <div>
                                    <img src={image1} alt="img1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="works">
                    <div className="container">
                        <div className="works__box">
                            <h1>How it works    </h1>
                            <p className='work'>Spice up your space even simpler
                                than you think</p>

                            <div className="box__video">
                                <img src={videoImg} alt="video" />
                                <div>
                                    <p>We provide design and build
                                        for commercial building,
                                        interior and furniture to improve
                                        the better life. </p>
                                    <p>S E E  V I D E O</p>
                                </div>
                            </div>
                        </div>

                        <div className="miss__box">
                            <img src={sofa} alt="sofa" />
                            <div className="text">
                                <p>Our mission is to
                                    deliver aesthetic visual
                                    for your home</p>
                                <p>By applying bacis psychology principles,
                                    we are going to explain how perception
                                    works and how we can use this understanding
                                    to maximise the space that we occupy in
                                    our homes.</p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="our-project">
                    <div className="container">
                        <div className="our-project__box">
                            <h1>Our project </h1>
                            <p className='descr'>Introducing our first official project</p>
                            <div className="lines">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>

                            <div className="box">
                                <div className="elem1">
                                    <p>Project Livingroom</p>
                                    <p>A simple guide to create the perfect livingro-
                                        om for . Night Watc works beautifully in a wi-
                                        de gamut of arrangements.</p>
                                    <img src={livingroom} alt="livingroom" />
                                </div>
                                <div className="elem2">
                                    <img src={workspace} alt="workspace" />
                                    <p>Project workspace</p>
                                    <p>A simple guide to create the perfect livingro-
                                        om for . Night Watc works beautifully in a wi-
                                        de gamut of arrangements.</p>
                                </div>
                                <div className="elem3">
                                    <p>Library</p>
                                    <p>A simple guide to create the perfect livingro-
                                        om for . Night Watc works beautifully in a wi-
                                        de gamut of arrangements.</p>
                                    <img src={library} alt="library" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="test">
                    <div className="container">
                        <div className="test__box">
                            <h1>Testimonial</h1>
                            <div className="imgs">
                                <img src={klamby} alt="klamby" />
                                <img src={mayoutlit} alt="mayoutlit" />
                                <img src={zalora} alt="zalora" />
                                <img src={geulis} alt="geulis" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rectangle">
                    <div className="container">
                        <div className="rectangle__box">
                            <div className="rectangle__elem1">
                                <img src={rectangle} alt="rectangle" />
                            </div>
                            <div className="rectangle__elem2">
                                <div className="ex">
                                    <div>
                                        <h1>105</h1>
                                        <p>project done</p>
                                    </div>
                                    <div>
                                        <h1>12</h1>
                                        <p>years of experience</p>
                                    </div>
                                    <div>
                                        <h1>10+</h1>
                                        <p>big company partnership</p>
                                    </div>
                                </div>
                                <div className="context">
                                    <p>"Not able to tell you how happy I am with interior design.
                                        Interior design has completely surpassed our expectations.
                                        Interior design saved my business. Interior design is worth
                                        much more than I paid."</p>
                                <label><i> - Roscue</i></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-us">
                    <div className="container">
                        <div className="contact-us__box">
                        <div className="text">
                            <h1>Contact Us</h1>
                            <p>Have any questions? Want help
                            before getting started?</p>
                            <div>
                            <div className="line"></div>
                            <div className="line"></div>
                            </div>
                        </div>
                        <form>
                            <input placeholder='Full name' type="text" name="" id="" required/>
                            <div className="line"></div>
                            <input placeholder='Email address'  type="email" name="" id="" required/>
                            <div className="line"></div>
                            <textarea placeholder='Description' name="" id="" required></textarea>
                            <div className="btn">
                            <button type='submit'>Send now</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default App
