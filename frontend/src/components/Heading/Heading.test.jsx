import { screen } from '@testing-library/react'
import 'jest-styled-components'
import { customRender } from '../../utils/test-utils'
import { Heading } from './index'


describe('<Heading />', () => {
    it('should render the heading component', () => {
        customRender(<Heading>Testando</Heading>)

        expect(screen.getByLabelText('heading')).toBeInTheDocument()
    })
})