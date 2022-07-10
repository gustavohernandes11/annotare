import * as Styled from './styles.js'
import P from 'prop-types'
import { IconButton } from '../../IconButton/index.jsx'
import { Expand, TrashAlt, PencilAlt } from '@styled-icons/fa-solid'
import { useDataContext } from '../../../hooks/useDataContext.jsx'


const sizeProps = {
    widht: 15,
    height: 15
}

export const CardHeader = ({ isActive, id }) => {
    // eslint-disable-next-line no-unused-vars
    const [dataState, dataActions] = useDataContext();
    return (
        <Styled.Container style={{ opacity: isActive ? '1' : '0' }}>
            <span>
                <IconButton >
                    <Expand {...sizeProps} />
                </IconButton>
                <IconButton onClick={() => dataActions.removeAnnotation(id)}>
                    <TrashAlt {...sizeProps} />
                </IconButton>
                <IconButton>
                    <PencilAlt {...sizeProps} />
                </IconButton>
            </span>
        </Styled.Container>


    )
}

CardHeader.propTypes = {
    children: P.node
}

