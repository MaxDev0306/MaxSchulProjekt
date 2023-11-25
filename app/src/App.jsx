import {AppBar, Button, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import {SponsorBox} from "./SponsorBox";

export function App() {

    const sponsors = [
        {
            image: 'https://vonrheinefuerrheine.de/wp-content/uploads/2022/07/logo_klein.png',
            name: 'KA',
            text: 'BEEP'
        },
        {
            image: 'https://vonrheinefuerrheine.de/wp-content/uploads/2022/07/logo_klein.png',
            name: 'KA',
            text: 'BEEP'
        },
        {
            image: 'https://vonrheinefuerrheine.de/wp-content/uploads/2022/07/logo_klein.png',
            name: 'KA',
            text: 'BEEP'
        },
        {
            image: 'https://vonrheinefuerrheine.de/wp-content/uploads/2022/07/logo_klein.png',
            name: 'KA',
            text: 'BEEP'
        },
        {
            image: 'https://vonrheinefuerrheine.de/wp-content/uploads/2022/07/logo_klein.png',
            name: 'KA',
            text: 'BEEP'
        },
        {
            image: 'https://vonrheinefuerrheine.de/wp-content/uploads/2022/07/logo_klein.png',
            name: 'KA',
            text: 'BEEP'
        },
        {
            image: 'https://vonrheinefuerrheine.de/wp-content/uploads/2022/07/logo_klein.png',
            name: 'KA',
            text: 'BEEP'
        }
    ];


    function blurr() {
        let style = 'linear-gradient(0deg, ';

        for (let i = 0; i < 101; i++) {
            style += `rgba(255,255,255,${100 - i}) ${i}%, `;
        }

        style += ')';

        console.log(style);
        return style;
    }

    return (
        <div>
            <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", maxHeight: '800px', overflow: "hidden",
                }}>
                    <video
                        style={{maxWidth: '100%', zIndex: 0}}
                        src={'https://vonrheinefuerrheine.de/wp-content/uploads/2022/07/Rheine-Widerstand-ist-zwecklos.-online-video-cutter.com_.webm'}
                        muted={true}
                        autoPlay={true}
                        loop={true}
                    >
                    </video>
                    <h1 style={{position: "absolute", fontSize: '128px', color: '#0c598a'}}>
                        von Rheine für Rheine
                    </h1>

                    <div style={{
                        background: 'linear-gradient(0deg, rgba(255,255,255,100) 0%,rgba(255,255,255,0) 100%)',
                        position: "absolute",
                        width: '100%',
                        marginTop:'60%',
                        height: '10%'
                    }}>
                        dfdf
                    </div>
                </div>
                <div></div>
                <AppBar position="fixed">
                    <Toolbar style={{margin: 5}}>
                        <a href={'https://vonrheinefuerrheine.de/'}>
                            <img src={'https://vonrheinefuerrheine.de/wp-content/uploads/2022/07/bunt_logo.png'}/>
                        </a>
                    </Toolbar>
                </AppBar>
                <main style={{margin: 10, zIndex: 1, backgroundColor: "white"}}>
                    {
                        sponsors.map((value) => (
                            <SponsorBox {...value}/>
                        ))
                    }
                </main>
            </div>
        </div>
    )
}