import styled from "styled-components"

const Details = styled.div`

  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  .humidity, .wind{

    display: flex;
    align-items: center;
    width: 50%;
    height: 100px;

  }

  i{

    color: #06283D;
    font-size: 26px;
    margin-right: 10px;
    margin-top: 6px;

  }

  span{

    color: #06283D;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;

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

const Humidity = styled.div`

  padding-left: 20px;
  justify-content: flex-start;

`;

const Wind = styled.div`

  padding-left: 20px;
  justify-content: flex-end;

`;

export default function WeatherDetails({hum, speed, fade}) {
  return (
    <Details className={fade}>
      <Humidity className="humidity">
        <i className="fa-solid fa-water"></i>
        <div className="text">
          <span>{hum}</span>
          <p>Humidity</p>
        </div>
      </Humidity>
      <Wind className="wind">
        <i className="fa-solid fa-wind"></i>
        <div className="text">
          <span>{speed}</span>
          <p>Wind Speed</p>
        </div>
      </Wind>
    </Details>
  )
}
