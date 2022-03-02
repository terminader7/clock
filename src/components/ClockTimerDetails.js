import React from "react";
import styled from "styled-components";

const Title = styled.h1``;

const Length = styled.h1``;

const UpArrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

const DownArrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export const ClockTimerDetails = ({ setTime, time, title }) => {
  const incrementTime = () => {
    setTime(time + 60);
  };

  const decrementTime = () => {
    setTime(time - 60);
  };

  return (
    <div>
      <Title>{title} Length</Title>
      {time !== 3600 && <UpArrow onClick={incrementTime}></UpArrow>}
      <Length>{time / 60}</Length>
      {time !== 60 && <DownArrow onClick={decrementTime}></DownArrow>}
    </div>
  );
};
