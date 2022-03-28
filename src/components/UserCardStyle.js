import styled from "styled-components";
export const InfoContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  /* background: #00adb5; */
  /* min-height: calc(100vh - 75px); */
  /* height: fit-content; */
  padding: 5px;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  /* border: 1px solid white; */
  border-radius: 5px;
  /* background-color: #e1f1dd; */
  /* height: calc(100vh - 300px); */
  /* @media (max-width: 1250px) { */
    /* justify-content: center;
    background-color: red;
    border: 1px solid red; */

    img {
      /* border: 1px solid black; */
      border-radius: 50%;
      display: flex;
      background-color: #e1f1dd;
      padding:10px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;


      height: 4rem;
      width: 4rem;
    }
  }
`;
export const ImgContainer = styled.div`
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    border-radius: 50%;
    border: 3px solid white;

    display: flex;

    height: 10rem;
    width: 10rem;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
  font-size: 3rem;
  button {
    height: 2.5rem;
    width: 10rem;
    font-size: 1.5rem;
    border-radius: 10px;
    color: white;
    background-color: purple;
    border: none;
  }
  h1 {
    font-size: 3rem;
  }
  img {
    width: 200px;
  }
  button:hover {
    background-color: orange;
    transition: background-color 0.5s ease;
  }
`;
