import React, { useState } from 'react'
import classNames from 'classnames'

export enum AlertType {
    Default = 'default',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning'
}

interface BaseAlertProps {
    className?: string,
    alertVisiable?: boolean,
    alertType?: AlertType,
    alertTitle?: string,
    alertDescription?: string,
    closeable?: boolean,
    onClose?: (visible: string) => void;
}
export type AlertProps = BaseAlertProps
const Alert:React.FC<BaseAlertProps> = (props) => {
    let [visible, setVisiable] = useState(true)
    const { 
        closeable,
        className,
        alertType,
        alertVisiable,
        alertTitle,
        alertDescription,
        onClose
     } = props

     const handleClick = () => {
        setVisiable(false)
      }
     const classes = classNames('alert', className, {
        [`alert-${alertType}`]: alertType,
        'alert-visiable': alertVisiable
     })

     const closeclasses = classNames('alert-close', {
         'alert-showicon': closeable
     })
     return (
        visible ? 
         <>
            <div className={classes}>
                {alertTitle && <div className='alert-title'>{alertTitle}</div>}
                <span className='alert-discribe'>{alertDescription}</span>
                <div className={closeclasses} onClick={handleClick}></div>
            </div>
         </> : null
     )
}

Alert.defaultProps = {
    closeable: false,
    alertType: AlertType.Default
}

export default Alert
