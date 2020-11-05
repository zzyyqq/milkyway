import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button'

const defaultButton = () => (
    <Button onClick={action('clicked')}>default button</Button>
)

const buttonWithSize = () => (
    <>
     <Button size='lg'> large button </Button>
     <Button size='sm'> small button </Button>
    </>
)


const buttonWithTyp = () => (
    <>
        <Button btnType="primary"> primary button </Button>
        <Button btnType="primary" disable> disable button </Button>
        <Button btnType="danger"> danger button </Button>
        <Button btnType="link" href="#"> link button </Button>
    </>
)

storiesOf('按钮', module)
    .add('默认按钮', defaultButton)
    .add('不同尺寸的button', buttonWithSize)
    .add('不同类型的button', buttonWithTyp)