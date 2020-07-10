import React, {Component} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {Carousel} from 'react-responsive-carousel';
import slide1 from 'assets/images/slide1.jpg';
import slide2 from 'assets/images/slide2.jpg';
import slide3 from 'assets/images/slide3.jpg';
import slide4 from 'assets/images/slide4.jpg';
import ImageText from "../../components/imagetext/ImageText";


const img1 ="https://i.ya-webdesign.com/images/beaker-gif-png-9.gif"
const img2="https://thumbs.gfycat.com/DecentSomeGrouper-size_restricted.gif"
const text1="Med Screen Laboratories is a state of the art high complexity toxicology laboratory dedicated to the monitoring and detection of addiction and substance misuse. Founded by an executive team with over 40 years of experience and a personal connection to the cause, MSL fills a void that was needed in the laboratory testing industry. A sound connection between premier personalized customer service and flawless operational efficiency."

class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel
                    autoPlay infiniteLoop interval={4000} transitionTime={1000} showStatus={false} showThumbs={false} stopOnHover={false} >
                    <div><img alt="" src={slide1}/></div>
                    <div><img alt="" src={slide2}/></div>
                    <div><img alt="" src={slide3}/></div>
                    <div><img alt="" src={slide4}/></div>
                </Carousel>
                <br/><br/><br/>
                <ImageText title="Who are We" description={text1} imageUrl={img1} imagePosition="left"/>
                <br/><br/><br/>
                <ImageText title="Why Us" description={text1} imageUrl={img2} imagePosition="right"/>
                <br/><br/><br/>
                <ImageText title="Our Moto" description={text1} imageUrl={img1} imagePosition="left"/>
                <br/><br/><br/>
                <ImageText title="Lumber One Lab" description={text1} imageUrl={img2} imagePosition="right"/>
                <br/><br/><br/>
            </div>

        );
    }
}

export default HomePage;
