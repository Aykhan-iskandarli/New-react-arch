import {createUseStyles} from 'react-jss';

const styles = {
    hero: {
        width:'100%',
        position:'absolute',
        top:'calc(100% - 160px)'
    },
    hero_img:{
 
    },
    content: {
        // marginLeft: rem(sizes.leftMenu),
        minHeight: 'calc(100vh - 50px) !important',
        //  padding: rem(110) +' '+ rem(20) +' '+ rem(0),
    },
    active: {marginLeft: 0,},

};


export const usePublicLayoutStyles = createUseStyles(styles);
