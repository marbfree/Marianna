import React from 'react';
import styles from './styles.module.css'

const YouTubeVideo = ({ happyBirthday }) => {
  const embedUrl = `https://youtu.be/5a2Wf3-dhnI?feature=shared${happyBirthday}`;

  return (
    <div className={styles.videoContainer}>
      <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/5a2Wf3-dhnI?si=QvmvErN8WhsmMqxu" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
      </iframe>
    </div>
  );
};

export default YouTubeVideo;