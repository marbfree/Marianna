import React from 'react';
import styles from './styles.module.css'

const RainbowDress = ({ rainbowDress }) => {
  const embedUrl = `https://youtu.be/1cmynELA_2E?feature=shared${rainbowDress}`;

  return ( 
    <div className={styles.videoContainer}>
    <iframe width="560" 
    height="315" 
    src="https://www.youtube.com/embed/1cmynELA_2E?si=if7bG5sk_bERwOBK" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
    </iframe>
    </div>
  );
};

export default RainbowDress;