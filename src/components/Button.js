import styled from 'styled-components';

export const ButtonContainer = styled.button`
color: ${ props => props.cart ? "var(--mainDark)" : "var(--mainGreen)"};
text-transform:capitalize;
font-size:1.4rem;
background : ${ props => props.cart ? "var(--mainGreen)" : "var(--mainBlue)"};
border:1px solid;
border-color: ${ props => props.cart ? "var(--mainGreen)" : "var(--mainGreen)"};
border-radius:25px;
padding:0.2rem 0.55rem;
cursor:pointer;
margin:0.2rem 0 0;
transition: all 0.5s ease-in-out;
&:hover {
    border:1px solid;
    border-color: ${ props => props.cart ? "var(--mainGreen)" : "var(--secDark)"};
    background:${ props => props.cart ? "var(--mainBlue)" : "var(--mainDark)"};
    color:${ props => props.cart ? "var(--mainGreen)" : "var(--mainWhite)"};
}
&:focus {
    outline:none;
}
`