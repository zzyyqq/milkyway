import React, { useState, FC } from 'react'
import classNames from 'classnames'

export type AlertType = 'default' | 'success' | 'danger' | 'warning'

interface BaseAlertProps {
    className?: string,
    // alertVisiable?: boolean,
    /**类型 */
    alertType?: AlertType,
    /**标题*/
    alertTitle?: string,
    /**描述*/
    alertDescription?: string,
    /**是否显示关闭图标*/
    closeable?: boolean,
    /**关闭弹窗事件 */
    onClose?: () => void;
}
export type AlertProps = BaseAlertProps
export const Alert: FC<BaseAlertProps> = (props) => {
    let [visible, setVisible] = useState(true)
    const { 
        closeable,
        className,
        alertType,
        // alertVisiable,
        alertTitle,
        alertDescription,
        onClose
     } = props

     const handleClick = (e: React.MouseEvent) => {
        if (onClose) {
            onClose()
          }
          setVisible(false)
      }
     const classes = classNames('alert', className, {
        [`alert-${alertType}`]: alertType,
        // 'alert-visiable': alertVisiable
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
    alertType: 'default'
}

export default Alert;
