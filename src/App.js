import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from './android-chrome-192x192.png';
import {Row, Col} from 'antd';

const portraitURL = "https://media-exp1.licdn.com/dms/image/C4D03AQGJgS3-NoeylA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=qKhW2fqbowRVzjUwYSO3W0FcGP8XHiQPoCpfuSrbenw";

function App() {
    return (
        <div className="App">
            <div className={"App-header"}>
                <img className={"logo"} src={Logo} alt={"Logo"}/>
                <div className={"headerLinks"}>
                    <AnchorLink href='#things' className={"hvr-float"}>About</AnchorLink>
                    <AnchorLink href='#things' className={"hvr-float"}>Experience</AnchorLink>
                    <AnchorLink href='#things' className={"hvr-float"}>Projects</AnchorLink>
                </div>
            </div>
            <div className="App-body">
                <div className={"contentContainer"}>
                    <div className={"InfoBox"}>
                        <img src={portraitURL} alt={"portrait"} className={"portrait"}/>
                    </div>
                    <div className={"nameDisplay"}>
                        Anthony Lachhman <br/>
                        <div className={"dot"}/>
                        <br/>
                        NYC Based QA Engineer
                    </div>
                    <div className={"socialLinks"}>
                        <a href={"https://www.github.com/alachhman"} className={"hvr-float"}>
                            <i className="fab fa-github"/>
                        </a>
                        <a href={"https://www.linkedin.com/in/anthony-lachhman-a9216b123/"} className={"hvr-float"}>
                            <i className="fab fa-linkedin"/>
                        </a>
                        <a href={"mailto: lachhman.anthony@gmail.com"} className={"hvr-float"}>
                            <i className="fas fa-envelope"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={"App-bottom"}>
                <div className={"arrowPrompt"}>
                    <i className="fas fa-arrow-down"/>
                </div>
            </div>
            <div className={"Content-body"} id={"things"}>
                <div className={"Content-category"}>
                    <Fade>
                        <h2>Projects</h2>
                        <div style={{border: "1px solid white", marginBottom: "32px"}}/>
                    </Fade>
                    <Fade>
                        <Row style={{textAlign: "left"}}>
                            <div style={{borderRadius: "25px", padding: "3px"}}>
                                Title Lorem Ipsum Dolor Set
                            </div>
                        </Row>
                        <Row style={{marginBottom: "32px"}}>
                            <Col xs={24} sm={24} md={24} lg={16} xl={16} style={{textAlign: "left", fontSize: "16px", padding: "16px"}}>
                                {lorem}
                                <div className={"socialLinks"} style={{width: "50%", margin: "0 auto", display: "flex", justifyContent:"center", padding: "16px"}}>
                                    <a href={"https://www.github.com/alachhman"} className={"hvr-float"}>
                                        <i className="fab fa-github"/>
                                    </a>
                                    <a href={"https://www.linkedin.com/in/anthony-lachhman-a9216b123/"} className={"hvr-float"}>
                                        <i className="fab fa-linkedin"/>
                                    </a>
                                    <a href={"mailto: lachhman.anthony@gmail.com"} className={"hvr-float"}>
                                        <i className="fas fa-envelope"/>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                <input src={"https://i.imgur.com/B64INWt.png"} alt={"slimeRL1"}
                                     style={{maxWidth: "300px", border: "1px solid white"}}
                                     className={"hvr-float"} type={"image"}/>
                            </Col>
                        </Row>
                        <div style={{border: "1px solid white", marginBottom: "32px", width: "50%", margin: "0 auto"}}/>
                    </Fade>
                    <Fade>
                        <Row style={{textAlign: "left", marginTop: "24px"}}>
                            <div style={{borderRadius: "25px", padding: "3px"}}>
                                Title Lorem Ipsum Dolor Set
                            </div>
                        </Row>
                        <Row style={{marginBottom: "32px"}}>
                            <Col xs={24} sm={24} md={24} lg={16} xl={16} style={{textAlign: "left", fontSize: "16px", padding: "16px"}}>
                                {lorem}
                                <div className={"socialLinks"} style={{width: "50%", margin: "0 auto", display: "flex", justifyContent:"center", padding: "16px"}}>
                                    <a href={"https://www.github.com/alachhman"} className={"hvr-float"}>
                                        <i className="fab fa-github"/>
                                    </a>
                                    <a href={"https://www.linkedin.com/in/anthony-lachhman-a9216b123/"} className={"hvr-float"}>
                                        <i className="fab fa-linkedin"/>
                                    </a>
                                    <a href={"mailto: lachhman.anthony@gmail.com"} className={"hvr-float"}>
                                        <i className="fas fa-envelope"/>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                <input src={"https://i.imgur.com/B64INWt.png"} alt={"slimeRL1"}
                                       style={{maxWidth: "300px", border: "1px solid white"}}
                                       className={"hvr-float"} type={"image"}/>
                            </Col>
                        </Row>
                        <div style={{border: "1px solid white", marginBottom: "32px", width: "50%", margin: "0 auto"}}/>
                    </Fade>
                    <Fade>
                        <Row style={{textAlign: "left", marginTop:"24px"}}>
                            <div style={{borderRadius: "25px", padding: "3px"}}>
                                Title Lorem Ipsum Dolor Set
                            </div>
                        </Row>
                        <Row style={{marginBottom: "32px"}}>
                            <Col xs={24} sm={24} md={24} lg={16} xl={16} style={{textAlign: "left", fontSize: "16px", padding: "16px"}}>
                                {lorem}
                                <div className={"socialLinks"} style={{width: "50%", margin: "0 auto", display: "flex", justifyContent:"center", padding: "16px"}}>
                                    <a href={"https://www.github.com/alachhman"} className={"hvr-float"}>
                                        <i className="fab fa-github"/>
                                    </a>
                                    <a href={"https://www.linkedin.com/in/anthony-lachhman-a9216b123/"} className={"hvr-float"}>
                                        <i className="fab fa-linkedin"/>
                                    </a>
                                    <a href={"mailto: lachhman.anthony@gmail.com"} className={"hvr-float"}>
                                        <i className="fas fa-envelope"/>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                <input src={"https://i.imgur.com/B64INWt.png"} alt={"slimeRL1"}
                                       style={{maxWidth: "300px", border: "1px solid white"}}
                                       className={"hvr-float"} type={"image"}/>
                            </Col>
                        </Row>
                        <div style={{border: "1px solid white", marginBottom: "32px", width: "50%", margin: "0 auto"}}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default App;

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et urna efficitur, volutpat turpis quis, rhoncus turpis. Donec maximus enim neque, nec aliquam sem scelerisque sit amet. Ut in suscipit mi. Praesent quis congue mauris. Morbi vel gravida nunc. Maecenas sit amet venenatis tortor. Pellentesque at ultricies tellus, eget rhoncus nulla. Mauris dapibus tempor ligula id congue. Donec fermentum gravida fermentum. Duis sed est erat. Pellentesque vel posuere velit.\n"
