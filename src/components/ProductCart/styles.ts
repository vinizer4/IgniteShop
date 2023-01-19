import { styled } from "../../styles";

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },
    a: {
        height: 'calc(100% - 7.375rem)'
    } ,

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.24rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0,0,0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$lg',
            color: '$gray100'
        },
        
        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    },

    div: {
        display: 'flex',
        flexDirection: 'column'
    }
})