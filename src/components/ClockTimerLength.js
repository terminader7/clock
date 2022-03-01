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

export const ClockTimerLength = ({ setTime, time }) => {
  const incrementTime = () => {
    setTime(time + 1);
  };
  const decrementTime = () => {
    setTime(time - 1);
  };
  return (
    <div>
      <Title>Title</Title>
      {time !== 60 && <UpArrow onClick={incrementTime}></UpArrow>}
      <Length>{time}</Length>
      {time !== 1 && <DownArrow onClick={decrementTime}></DownArrow>}
    </div>
  );
};
