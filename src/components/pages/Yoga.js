import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Yoga() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles.backgroundYoga}>
            <h2 className={styles.fadeInHello}>Yoga and Meditation</h2>
            <nav>
                <div className={styles.hamMenu} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`${styles.offScreenMenu} ${isActive ? styles.active : ''}`}>
                    <li><a href="#">Yoga Videos</a></li>
                    <li><a href="#">Meditation Videos</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}




// import React from "react";
// import styles from "./styles.module.css"

// const hamMenu = document.getElementsByClassName(styles.hamMenu);

// const offScreenMenu = document.getElementsByClassName(styles.offScreenMenu);

// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// })

// export default function Yoga() {
//     return (
//         <body>
//             <div className={styles.backgroundYoga}>
//                 <h2 className={styles.fadeInHello}>Yoga and Meditation</h2>
//                 <div>
//                 <ul className={styles.offScreenMenu}>
//                         <li><a href="#">Yoga Videos</a></li>
//                         <li><a href="#">Meditation Videos</a></li>
//                         <li><a href="#">Gallery</a></li>
//                         <li><a href="#">Contact</a></li>
//                     </ul>
//                 </div>
//                 <nav>
//                 <div className={styles.hamMenu}>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//                 </nav>
//             </div>
//         </body>
//     )
// }