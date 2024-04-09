import React from 'react';
import styles from '../pages/styles.module.css';
import NavTabs from '../layout/Header';

const Home = () => {
    return (
        <div>
        <header className={styles.background}>
        <h1 className={styles.fadeInHello}>Marianna</h1> 
        <NavTabs></NavTabs>
        </header>
        </div>
    )
}

export default Home;