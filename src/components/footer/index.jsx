import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import logo from 'assets/images/logo.png';
import { GoLocation, GoMail } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { IconContext } from "react-icons";

class Footer extends Component {
    render() {
        return (
            <footer className="public-footer" style={{backgroundColor:'rgb(2,2,2)'}}>
                <Container>
                    <Grid direction="row" container spacing={4} className="containerFooter">
                        <Grid item sm="4" className="footerCol">
                            <Grid direction="column" container spacing={2}>
                                <Grid item className="titleRow">
                                    <div style={{display:'flex', flexDirection : 'row', justifyContent : 'left', alignItem:'center'}}>
                                        <div style={{height: '20px', width: '4px', marginRight: '3vh', backgroundColor: 'orange'}}/>About Med Screen Lab
                                    </div>
                                </Grid>
                                <Grid item className="logoRow">
                                    <img src={logo} />
                                    <br />
                                    <p className="logoRowP">
                                        Med Screen Laboratories is a state of the art high complexity
                                        toxicology laboratory dedicated to the monitoring and
                                        detection of addiction and substance misuse.
                                    </p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm="4" className="footerCol">
                            <Grid direction="column" container spacing={2}>
                                <Grid item className="titleRow">
                                    <div style={{display:'flex', flexDirection : 'row', justifyContent : 'left', alignItem:'center'}}>
                                        <div style={{height: '20px', width: '4px', marginRight: '3vh', backgroundColor: 'orange'}}/>Recent Posts
                                    </div>
                                </Grid>
                                <Grid item sm="12" className="recentRow">
                                    <font className="recentRowTitle">
                                        Welcome to MedScreen Media/News!
                                    </font>
                                    <font className="recentRowSubTitle">
                                        NOVEMBER 26, 2020/ 82 COMMENTS
                                    </font>
                                </Grid>
                                <Grid item sm="12" className="recentRow">
                                    <hr style={{ borderBottom: "1px solid white" ,width:"100%" }}/>
                                </Grid>
                                <Grid item sm="12" className="recentRow">
                                    <font className="recentRowTitle">Comming Soon</font>
                                    <font className="recentRowSubTitle">
                                        DECEMBER 12, 2020/ 45 COMMENTS
                                    </font>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm="4" className="footerCol">
                            <Grid direction="column" container spacing={2}>
                                <Grid item className="titleRow">
                                    <div style={{display:'flex', flexDirection : 'row', justifyContent : 'left', alignItem:'center'}}>
                                        <div style={{height: '20px', width: '4px', marginRight: '3vh', backgroundColor: 'orange'}}/>Contact
                                    </div>
                                </Grid>
                                <Grid item sm="12" className="contactRowMain recentRow">
                                    <div className="contactSubRow">
                                        <div className="contactBox">
                                            <IconContext.Provider value={{ color: "orange" }}>
                                                <GoLocation />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="recentRow">
                                            <font className="contactRowTitle">Location</font>
                                            <font className="contactRowSubTitle">
                                                <a href="https://www.google.com/maps/place/Med+Screen+Labs/@40.863395,-74.163967,15z/data=!4m5!3m4!1s0x0:0x95d8df79222c101c!8m2!3d40.863395!4d-74.163967">992 Clifton Ave, Clifton, NJ 07663</a>
                                            </font>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item sm="12" className="contactRowMain recentRow">
                                    <div className="contactSubRow">
                                        <div className="contactBox">
                                            <IconContext.Provider value={{ color: "orange" }}>
                                                <AiOutlinePhone />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="recentRow">
                                            <font className="contactRowTitle">Phone</font>
                                            <font className="contactRowSubTitle"><a href="tel:9733203237">Ph: (973) 320-3237</a></font>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item sm="12" className="contactRowMain recentRow">
                                    <div className="contactSubRow">
                                        <div className="contactBox">
                                            <IconContext.Provider value={{ color: "orange" }}>
                                                <GoMail />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="recentRow">
                                            <font className="contactRowTitle">Email</font>
                                            <font className="contactRowSubTitle"><a href="mailto:info@medscreenlabs.com">E: info@medscreenlabs.com</a></font>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <div style={{backgroundColor:'#222', color:'white', fontSize:'14px', paddingBottom: '1rem', paddingTop:'1rem'}}>
                    <Container style={{textAlign:'center'}}>
                        All rights reserved. <b>Med Screen Labs</b> &copy; {new Date().getFullYear()} - Designed by <b><a>KODERS</a></b>
                    </Container>
                </div>
            </footer>
        );
    }
}

export default Footer;
