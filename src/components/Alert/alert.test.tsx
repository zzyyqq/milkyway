import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert, { AlertType } from './alert'

const defaultProps = {
    onClose: jest.fn()
}

const testProps = {
    alertType: AlertType.Default,
    className: 'kclass'
}
let span: HTMLElement

describe('test component alert', ()=> {
    it('should render correct default alert', () => {
        const wrapper = render(<Alert {...defaultProps} alertDescription='this is a cat'>this is a cat</Alert>)
        const element = wrapper.getByText('this is a cat')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('SPAN')
        expect(element).toHaveClass('alert-discribe')
    })
})