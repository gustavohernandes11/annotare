 import * as Styled from './styles.js'
 import P from 'prop-types'
 import { EditorHeader } from '../EditorHeader'
 export const Editor = () => {
     return (
         <Styled.Container>
             <EditorHeader />
         </Styled.Container>
     )
 }
 
 Editor.propTypes = {
     children: P.node.isRequired
 }
 
 