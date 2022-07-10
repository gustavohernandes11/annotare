/* eslint-disable no-unused-vars */
import * as Styled from './styles.js'
import P from 'prop-types'
import { IconButton } from '../../IconButton/index.jsx'
import { Expand, TrashAlt, PencilAlt } from '@styled-icons/fa-solid'
import { useDataContext } from '../../../hooks/useDataContext.jsx'
import { useGlobalContext } from '../../../hooks/useGlobalContext.jsx'

const sizeProps = {
    widht: 15,
    height: 15
}

export const CardFooter = ({ isActive, data }) => {
    const [dataState, dataActions] = useDataContext();
    const [globalState, globalActions] = useGlobalContext();


    const handleEdit = () => {
        globalActions.setSelectedAnnotation(data);
        globalActions.setEditMode(true);
    }

    return (
        <Styled.Container style={{ opacity: isActive ? '1' : '0' }}>
            <span>
                <IconButton disabled >
                    <Expand {...sizeProps} />
                </IconButton>
                <IconButton onClick={() => dataActions.removeAnnotation(data)}>
                    <TrashAlt {...sizeProps} />
                </IconButton>
                <IconButton onClick={handleEdit}>
                    <PencilAlt {...sizeProps} />
                </IconButton>
            </span>
        </Styled.Container>


    )
}

CardFooter.propTypes = {
    children: P.node
}

