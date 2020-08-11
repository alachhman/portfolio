import React from 'react';
import './App.css';

const portraitURL = "https://media-exp1.licdn.com/dms/image/C4D03AQGJgS3-NoeylA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=qKhW2fqbowRVzjUwYSO3W0FcGP8XHiQPoCpfuSrbenw";

function App() {
    return (
        <div className="App">
            <div className="App-body">
                <div className={"contentContainer"}>
                    <div className={"InfoBox"}>
                        <img src={portraitURL} alt={"portrait"} className={"portrait"}/>
                    </div>
                    <div className={"nameDisplay"}>
                        Anthony Lachhman - QA Engineer
                    </div>
                    <div className={"socialLinks"}>
                        <a href={"https://www.github.com/alachhman"}>
                            <i className="fab fa-github"/>
                        </a>
                        <a href={"https://www.linkedin.com/in/anthony-lachhman-a9216b123/"}>
                            <i className="fab fa-linkedin"/>
                        </a>
                        <a href={"mailto: lachhman.anthony@gmail.com"}>
                            <i className="fas fa-envelope"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={"App-bottom"}>
                <i className="fas fa-arrow-down"/>
            </div>
            {/*<div style={{height:"10000px"}}/>*/}
        </div>
    );
}

export default App;
