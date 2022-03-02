import React from "react";
import styled from "styled-components";

const TimerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h1``;

const Length = styled.h1``;

const UpArrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  width: 10px;
  height: 10px;
`;

const DownArrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 10px;
  height: 10px;
`;

const ArrowContainer = styled.div`
  display: flex;
  padding: 5px;
`;

export const ClockTimerDetails = ({ setTime, time, title }) => {
  const incrementTime = () => {
    setTime(time + 60);
  };

  const decrementTime = () => {
    setTime(time - 60);
  };

  return (
    <TimerDetailsContainer>
      <Title>{title} Length</Title>
      <ContentContainer>
        {time !== 3600 && (
          <ArrowContainer onClick={incrementTime}>
            <UpArrow></UpArrow>
          </ArrowContainer>
        )}
        <Length>{time / 60}</Length>
        {time !== 60 && (
          <ArrowContainer onClick={decrementTime}>
            <DownArrow></DownArrow>
          </ArrowContainer>
        )}
      </ContentContainer>
    </TimerDetailsContainer>
  );
};
