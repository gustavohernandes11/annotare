import { screen } from '@testing-library/react'
import 'jest-styled-components'
import { customRender } from '../../utils/test-utils'
import { LargeButton } from './index'

describe('<LargeButton />', () => {
    it('should render the large button', () => {
        customRender(<LargeButton>LargeButton</LargeButton>)
        expect(screen.getByLabelText('large-button')).toBeInTheDocument()
    })
})
