import React from "react";

const Intro = () => (
    <section id="intro" className="s-intro">

        <div className="s-intro__bg"/>

        <div className="row s-intro__content">
            <div className="column lg-12">

                <div className="counter">
                    <div className="counter__time">
                        <span className="ss-days">30</span>
                        <span>days</span>
                    </div>
                    <div className="counter__time">
                        <span className="ss-hours">01</span>
                        <span>hours</span>
                    </div>
                    <div className="counter__time minutes">
                        <span className="ss-minutes">12</span>
                        <span>mins</span>
                    </div>
                    <div className="counter__time">
                        <span className="ss-seconds">55</span>
                        <span>secs</span>
                    </div>
                </div>


                <div className="s-intro__content-bottom">
                    <h1 className="s-intro__content-title">Our site is launching soon.</h1>
                    <p>
                        This website will contain my portfolio and other details. <br/>
                        You will be also be able to perform bookings and view my work here. <br/>
                    </p>
                </div>
            </div>

            <div className="s-intro__scroll">
                <p className="scroll-text">Scroll For More</p>
                <a href="#info" className="smoothscroll">
                    <div className="mouse"/>
                </a>
                <div className="end-top"/>
            </div>
        </div>
    </section>
)

export default Intro;