import HeaderRightComponent from '../header-right/header-right.component';
import {useHeaderNavbarStyles} from './header-navbar.style';
import {NavLink} from 'react-router-dom';
import {Routes} from '../../../../../router/routes';
import  logo  from '../../../../../assets/images/statics/logo.svg';

const HeaderNavbarComponent = () => {
    const classes = useHeaderNavbarStyles();

    return (
        <div className={`${classes.navbar} pt-60`}>
            <div className='row align-center'>
                <div className='col-3'>
                    <div className={classes.left}>
                        <NavLink to={Routes.default}>
                            <img src={logo} alt='logo'/>
                        </NavLink>
                    </div>
                </div>
                <div className='col-8'>
                    <HeaderRightComponent/>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavbarComponent;
