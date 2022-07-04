import * as Styled from './styles.js'
import P from 'prop-types'
import { IconButton } from '../../IconButton/index.jsx'
import { Expand, Marker, Star, TrashAlt, PencilAlt } from '@styled-icons/fa-solid'

export const CardHeader = ({ isActive }) => {
    return (
        <Styled.Container style={{opacity: isActive ? '1' : '0'}}>
            <span>
                <IconButton>
                    <Star />
                </IconButton>
                <IconButton>
                    <Marker />
                </IconButton>
            </span>
            <span>
                <IconButton>
                    <Expand />
                </IconButton>
                <IconButton>
                    <TrashAlt />
                </IconButton>
                <IconButton>
                    <PencilAlt />
                </IconButton>
            </span>
        </Styled.Container>
        
        
    )
}

CardHeader.propTypes = {
    children: P.node
}

