import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from './android-chrome-192x192.png';
import {Row, Col} from 'antd';

const portraitURL = "/portrait.jpg";

const projects = [
    {
        title: "lorem ipsum dolor set",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et urna efficitur, volutpat turpis quis, rhoncus turpis. Donec maximus enim neque, nec aliquam sem scelerisque sit amet. Ut in suscipit mi. Praesent quis congue mauris. Morbi vel gravida nunc. Maecenas sit amet venenatis tortor. Pellentesque at ultricies tellus, eget rhoncus nulla. Mauris dapibus tempor ligula id congue. Donec fermentum gravida fermentum. Duis sed est erat. Pellentesque vel posuere velit.\n",
        links: [
            {
                url: "www.google.com",
                logo: "fab fa-github"
            },
            {
                url: "www.google.com",
                logo: "fab fa-linkedin"
            },
            {
                url: "www.google.com",
                logo: "fas fa-envelope"
            }
        ],
        imageUrl: "https://i.imgur.com/B64INWt.png"
    }
]

function Header() {
    return (
        <div className={"App-header"} id={"header"}>
            <img className={"logo"} src={Logo} alt={"Logo"}/>
            <div className={"headerLinks"}>
                <AnchorLink href='#about' className={"hvr-float"}>About</AnchorLink>
                <AnchorLink href='#experience' className={"hvr-float"}>Experience</AnchorLink>
                <AnchorLink href='#projects' className={"hvr-float"}>Projects</AnchorLink>
            </div>
        </div>
    )
}

function AtfContent() {
    return (
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
    )
}

function SectionName(props) {
    return (
        <Fade>
            <h2>{props.title}</h2>
            <div style={{border: "1px solid white", marginBottom: "32px"}}/>
        </Fade>
    )
}

function AboutSection() {
    return (
        <div className={"Content-category"} id={"about"}>
            <SectionName title={"About"}/>
        </div>
    )
}

function LanguageBlocks() {
    return (
        <div>
            <div className={"languageBlocks"}>
                <i className="devicon-java-plain-wordmark"/>
                <i className="devicon-nodejs-plain"/>
                <i className="devicon-go-line"/>
            </div>
            <div className={"languageBlocks"}>
                <i className="devicon-flutter-plain"/>
                <i className="devicon-cucumber-plain-wordmark"/>
                <i className="devicon-csharp-line"/>

            </div>
        </div>

    )
}

function ExperienceSection() {
    return (
        <div className={"Content-category"} id={"experience"}>
            <SectionName title={"Experience"}/>
            <LanguageBlocks/>
        </div>
    )
}

function ProjectLink(props) {
    let link = props.link;
    return (
        <a href={link.url} className={"hvr-float"}>
            <i className={link.logo}/>
        </a>
    )
}

function Project(props) {
    let project = props.project;
    return (
        <Fade>
            <Row style={{textAlign: "left"}}>
                <div style={{borderRadius: "25px", padding: "3px"}}>
                    {project.title}
                    <div className={"socialLinks"}>
                        |{project.links.map(x => <ProjectLink link={x}/>)} |
                    </div>
                </div>
            </Row>
            <Row style={{marginBottom: "32px"}}>
                <Col xs={24} sm={24} md={24} lg={16} xl={16}
                     style={{textAlign: "left", fontSize: "16px", padding: "8px"}}>
                    {project.desc}
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <input src={project.imageUrl} alt={"alt"}
                           style={{maxWidth: "275px", border: "1px solid white"}}
                           className={"hvr-float"} type={"image"}/>
                </Col>
            </Row>
            <div style={{border: "1px solid white", marginBottom: "32px", width: "50%", margin: "0 auto"}}/>
        </Fade>
    )
}

function ProjectsSection() {
    return (
        <div className={"Content-category"} id={"projects"}>
            <SectionName title={"Projects"}/>
            {projects.map(x => <Project project={x}/>)}
        </div>
    )
}

function BtfContent() {
    return (
        <div className={"Content-body"}>
            {/*Website Under Construction*/}
            <div style={{marginBottom: "64px"}}>
                <AboutSection/>
                <ExperienceSection/>
                <ProjectsSection/>
                <AnchorLink href='#header' className={"hvr-float"}
                            style={{border: "1px solid white", padding: "4px", borderRadius: "5%"}}>
                    ↑ Back to the Top ↑
                </AnchorLink>
            </div>
        </div>
    )
}

function BottomArrow() {
    return (
        <div className={"arrowPrompt"}>
            <i className="fas fa-arrow-down"/>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="App-body">
                <AtfContent/>
            </div>
            <div className={"App-bottom"}>
                <BottomArrow/>
            </div>
            <BtfContent/>
        </div>
    );
}

export default App;
