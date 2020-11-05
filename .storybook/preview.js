import "../src/styles/index.scss"
import "./fix_info_style.scss"
import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import "./fix_info_style.scss"

const wrapperStyle = {
    padding: '20px 40px',
    width: '500px'
}

const storyWrapper = (stroyFn) => ( <
    div style = { wrapperStyle } >
    <
    h3 > 组件演示 < /h3> {stroyFn()} < /
    div >
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({ info: { inline: true, header: false } })