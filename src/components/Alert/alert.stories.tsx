import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Alert from './alert'


const defaultAlert = () => (
    <Alert alertDescription="弹窗描述"></Alert>
)

const styleAlert = () => (
    <>
        <Alert alertDescription="成功弹窗" alertType='success'></Alert>
        <Alert alertDescription="危险弹窗" alertType='danger'></Alert>
        <Alert alertDescription="警告弹窗" alertType='warning'></Alert>
    </>

)


const descAlert = () => {
    return <Alert alertTitle="提示标题欧亲" alertDescription="this is a long description" onClose={action('closed')}></Alert>
  }


storiesOf('弹窗', module)
    .add('默认弹窗', defaultAlert)
    .add('弹窗种类', styleAlert)
    .add('弹窗描述', descAlert)