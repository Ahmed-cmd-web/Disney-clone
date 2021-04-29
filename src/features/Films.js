import React from 'react'
import { CContainer, Img } from './Category'
import {useDispatch} from 'react-redux'
import { view } from './reducer'
import { useHistory } from "react-router-dom";

function Films(props) {
    const dispatch = useDispatch();
    const history=useHistory()
    const filminfo = () => {
        dispatch(view(props.info))
        history.push('/filminfo')
    
    }

    return (
        <CContainer onClick={filminfo} >
            <Img src={props.info.cardImg} alt={props.info.title} />
        </CContainer>
    )
}

export default Films
