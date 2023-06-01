import React from 'react';
import { usePublicLayoutStyles } from './hero.style';
import heroImg from '../../../../assets/images/statics/bg-hero.jpg';
// import heroBg from '../../../../assets/images/statics/bg-hero.jpg';

const HeroComponent = () => {
    const classes = usePublicLayoutStyles();
  return (
    <div className={classes.hero}>
        <img src={heroImg} className={classes.hero_img} alt=''/>
        <div className='container'>
            hero
        </div>
    </div>
  );
};

export default HeroComponent;