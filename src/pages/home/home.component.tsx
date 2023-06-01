import HeroComponent from './components/hero/hero.component';
import { usePublicLayoutStyles } from './home.style';
function HomeComponent() {
    const classes = usePublicLayoutStyles();
    return (
        <div className={classes.home}> 
            <HeroComponent/>
        </div>
    );
}

export default HomeComponent;
