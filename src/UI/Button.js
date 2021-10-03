import {memo} from 'react';
const Button = memo(({children, bgColor, textColor , padding , onClick , radius , fontSize , margin, display, direction, ariaLabel }) => {
    const ButtonStyle = {
        backgroundColor:bgColor,
        color:textColor,
        padding:padding,
        borderRadius:radius,
        fontSize:fontSize,
        margin:margin,
        display:display,
        flexDirection:direction,
        alignItems:"center",
        justifyContent:"center",

    }
    return (
        <button style={ButtonStyle} aria-label={ariaLabel} onClick={onClick}>{children}</button>
    )
})

export default Button;