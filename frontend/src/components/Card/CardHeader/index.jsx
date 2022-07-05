import * as Styled from './styles.js'
import P from 'prop-types'
import { IconButton } from '../../IconButton/index.jsx'
import { Expand, Marker, Star, TrashAlt, PencilAlt } from '@styled-icons/fa-solid'

const sizeProps = {
    widht: 15,
    height: 15
}

export const CardHeader = ({ isActive }) => {
    return (
        <Styled.Container style={{opacity: isActive ? '1' : '0'}}>
            <span>
                <IconButton>
                    <Star {...sizeProps} />
                </IconButton>
                <IconButton>
                    <Marker {...sizeProps} />
                </IconButton>
            </span>
            <span>
                <IconButton>
                    <Expand {...sizeProps}/>
                </IconButton>
                <IconButton>
                    <TrashAlt {...sizeProps}/>
                </IconButton>
                <IconButton>
                    <PencilAlt {...sizeProps}/>
                </IconButton>
            </span>
        </Styled.Container>
        
        
    )
}

CardHeader.propTypes = {
    children: P.node
}

