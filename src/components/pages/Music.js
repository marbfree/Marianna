import React from "react";
import styles from "./styles.module.css"
import YouTubeVideo from './happyBirthdayVideo';
import RainbowDress from "./RainbowDress";


export default function Music() {

    const happyBirthday = '5a2Wf3-dhnI'; 
    const rainbowDress = 'cmynELA_2E';

    return (
        <body>
            <div className={styles.backgroundMusic}>
                <h1 className={styles.fadeInHello}>Music</h1>
                <p>Writing sweet and silly songs inspired by those I love.</p>  
                <p>Enjoy some piano and violin pieces, as well, below.</p>
            </div>
            <div className={styles.backgroundColor}>
            <h2>Happy Birthday</h2>
              <YouTubeVideo happyBirthday={happyBirthday} />
            <h2>Rainbow Dress</h2>
              <RainbowDress rainbowDress={rainbowDress}/>
             </div>
            
        </body>
    )
}


// export default Music;
