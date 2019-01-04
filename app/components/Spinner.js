import React from 'react'
import styled , {keyframes} from 'styled-components';

const spin = keyframes`
from{
    transform:rotate(0deg);
}
to {
    transform:rotate(30deg);
}
`;

const Image = styled.img`
    animation : ${spin} 4s infinite linear
`;

const Spinner = ()=> <Image src="/public/img/loading.png" alt="loading image display"/>
    

export default Spinner;