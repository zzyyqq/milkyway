import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from './icon'
import Button from '../Button/button'

const defaultIcons = () => (
    <>
      <Icon icon="check" size="3x"/>
      <Icon icon="times" size="3x"/>
      <Icon icon="anchor" size="3x"/>
      <Icon icon="trash" size="3x"/>
      <Button size="lg" btnType="primary"><Icon icon="check"/> check </Button>
    </>
)

const themeIcons = () => (
    <>
      <Icon icon="check" size="3x" theme="success"/>
      <Icon icon="times" size="3x" theme="danger"/>
      <Icon icon="anchor" size="3x" theme="primary"/>
      <Icon icon="exclamation-circle" size="3x" theme="warning" />
    </>
)

const customIcons = () => (
    <>
      <Icon icon="check" size="3x" theme="warning" spin/>
      <Icon icon="times" size="3x" theme="info" pulse/>
    </>
)

storiesOf('Icon', module)
    .add('各类icon', defaultIcons)
    .add('不同主题的icon', themeIcons)
    .add('更多行为的icon', customIcons)