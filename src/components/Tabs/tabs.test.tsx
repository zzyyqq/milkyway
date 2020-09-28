import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import Tabs, {TabsProps} from './tabs'
import TabItem from './tabItem'

const testProps: TabsProps = {
    defaultIndex: 1,
    onSelect: jest.fn()
}

let wrapper: RenderResult

describe('test Tabs Component', () => {
    beforeEach(() => {
        wrapper = render (
            <Tabs { ...testProps }>
                <TabItem label="tab1">content1</TabItem>
                <TabItem label="tab2">content2</TabItem>
                <TabItem label="disabled" disabled>content3</TabItem>
            </Tabs>
        )
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should render the correct default Tabs', () => {
        const { queryByText, container} = wrapper
        expect(container.querySelector('tabs')).toHaveClass('tabs-line')
        const activeElement = queryByText('tab2')
        expect(activeElement).toBeInTheDocument()
        expect(activeElement).toHaveClass('is-active')
        expect(queryByText('tab1')).not.toHaveClass('is-active')
        expect(queryByText('content1')).not.toBeInTheDocument()
        expect(queryByText('content2')).toBeInTheDocument()
    })
})