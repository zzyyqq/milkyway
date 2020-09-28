import React from 'react'
import classNames from 'classnames'

export interface TabItemProps {
    disabled?: boolean;
    label: string | React.ReactElement
}

const TabItem: React.FC<TabItemProps> = ({children}) => {
    return (
        <div className="tab-item">
          {children}
        </div>
      )
}

TabItem.displayName = 'TabItem'

export default TabItem