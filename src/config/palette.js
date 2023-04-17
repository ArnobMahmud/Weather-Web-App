import styled from "styled-components";

export const CurrentInfoStyle = styled.div`
  text-align: left;

  p {
    font-size: 22px;
  }

  .card {
    height: 250px;
  }
`;

export const CurrentInfoDetailsStyle = styled.div`
  .card {
    height: 300px;
  }
  .desc {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  h4 {
    font-size: 18px;
  }
  h1 {
    font-size: 25px;
  }
  .infocard {
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 200px;
    width: 150px;
    margin: 20px;
    border-radius: 20px;
    background: #473333;
    box-shadow: 5px 5px 5px #3c2b2b, -5px -5px 5px #523b3b;
  }
  .desc::-webkit-scrollbar {
    height: 12px;
  }

  .desc::-webkit-scrollbar-thumb,
  .desc::-webkit-scrollbar-track {
    border-radius: 92px;
  }

  .desc::-webkit-scrollbar-thumb {
    background: var(--darkred);
  }

  .desc::-webkit-scrollbar-track {
    background: var(--thumb);
  }

  .icon{
    font-size:40px ;
  }
`;

export const ForecastInfoStyle = styled.div`
  .card {
    height: 450px;
  }
`;

export const ForecastInfoDetailsStyle = styled.div`
  .card {
    height: 350px;
  }
`;
