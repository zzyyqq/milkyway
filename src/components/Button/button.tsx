import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disable?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?: string;
    children?: React.ReactNode
}


type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
    const { 
        btnType,
        className,
        disable,
        size,
        href,
        children,
        ...restProps
     } = props

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disable': (btnType === ButtonType.Link) && disable
    })

    if(btnType === ButtonType.Link && href) {
        return (
        <a className={classes} href={href} {...restProps}>
            {children}
        </a>
        )
    } else {
        return (
            <button className={classes} disabled={disable} {...restProps}>{children}</button>
        )
    }
}

Button.defaultProps = {
    disable: false,
    btnType: ButtonType.Default
}

export default Button