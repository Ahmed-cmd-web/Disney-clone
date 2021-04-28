import React from 'react'
import {CContainer,Img} from './Category'
function Films(props) {
    return (
        <CContainer >
            <Img src={props.info.cardImg} alt={props.info.title} />
        </CContainer>
    )
}

export default Films
