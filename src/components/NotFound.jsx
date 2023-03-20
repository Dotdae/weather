import styled from "styled-components"

const ErrorContainer = styled.div`

    width: 100%;
    text-align: center;
    margin-top: 50px;
    

    img{
        width: 70%;
    }

    p{
        color: #CCC;
        font-size: 36px;
        font-weight: 500;
    }

`;

export default function NotFound() {
  return (
    <ErrorContainer>
        <img src="https://i.ibb.co/6H7BXK6/404.png"/>
        <p>Oops! Invalid location</p>
    </ErrorContainer>
  )
}
