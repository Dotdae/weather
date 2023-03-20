import styled from "styled-components"

const Box = styled.div`

  text-align: center;
  

  img{

    width: 30%;
    margin-top: 30px;

  }

  .fadeIn{
        animation: 0.5s fadeIn forwards;
        animation-delat: 0.5s;
    }

    @keyframe fadeIn{
        to{
            scale: 1;
            opacity: 1;
        }
  }

`;

const Temperature = styled.p`

  position: relative;
  color: #06283D;
  font-size: 4rem;
  font-weight: 800;
  margin-top: 30px;
  margin-left: -16px;

  span{

    position: absolute;
    margin-left: 4px;
    font-size: 1.5rem;

  }

`
const Description = styled.p`

  color: #06283D;
  font-size: 22px;
  font-weight: 500;
  text-trasnform: capitalize;

`

export default function WeatherBox({temp, desc, fade, image}) {
  return (
    <Box className={fade}>
      <img src={image}/>
      <Temperature>{temp}</Temperature>
      <Description>{desc}</Description>
    </Box>
  )
}
