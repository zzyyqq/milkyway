import React, { useState } from 'react'
import classNames from 'classnames'
import { TabItemProps } from './tabItem'

type TabsMode = 'line' | 'card'
type SelectCallback = (selectIndex: number) => void
export interface TabsProps {
    defaultIndex?: number;
    className?: string;
    mode?: TabsMode;
    onSelect?: SelectCallback;
}

const Tabs: React.FC<TabsProps> = (props) => {
    const { className, defaultIndex, mode, onSelect, children } = props

    const [currentActive, setActive] = useState(defaultIndex)

    const navclasses = classNames('tabs', className, {
        'tabs-card': mode === 'card',
        'tabs-line': mode === 'line'
    })

    const handleClick = (index: number, disabled: boolean | undefined) => {
        if (!disabled) {
            setActive(index)
            if (onSelect) {
                onSelect(index)
            }
        }

    }


    const renderNavLinks = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabItemProps>

            const { label, disabled } = childElement.props

            const { displayName } = childElement.type

            const classes = classNames('tab-item', className, {
                'is-active': currentActive === index,
                'disabled': disabled
            })

            if (displayName !== 'TabItem') {
                console.error('Warning: Tabs has a child whitch is not a TabsItem')
            }
            return (
                <li className={classes} key={`nav-item-$index`} onClick={(e) => { handleClick(index, disabled) }}>{label}</li>
            )

        })
    }

    const renderContent = () => {
        return React.Children.map(children, (child, index) => {

            if (index === currentActive) {
                return child
            }

        })
    }

    return (
        <div className={className}>
            <ul className={navclasses}>
                {renderNavLinks()}
            </ul>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>

    )

}

Tabs.defaultProps = {
    defaultIndex: 0,
    mode: "line"
}

export default Tabs