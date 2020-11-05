import React, { FC } from 'react'
import classNames from 'classnames'


export type ButtonType = 'primary' | 'default' | 'danger' | 'link' 
export type ButtonSize = 'lg' | 'sm'

interface BaseButtonProps {
    className?: string;
    /** 设置Button是否禁用 */
    disable?: boolean;
    /**
     * 设置Button的尺寸
     */
    size?: ButtonSize;
    /**
     * 设置button的类型
     */
    btnType?: ButtonType;
    href?: string;
    children?: React.ReactNode
}


type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 页面中最常用的按钮元素，适用于完成特定的交互
 */
export const Button: FC<ButtonProps> = (props) => {
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
        'disable': (btnType === 'link') && disable
    })

    if(btnType === 'link' && href) {
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
    btnType: 'default'
}

export default Button;