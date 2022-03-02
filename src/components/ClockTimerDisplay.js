import React, { useState } from "react";

import styled from "styled-components";

const DisplayBox = styled.div`
  border: 2px;
  border-color: black;
  border-style: solid;
  display: flex;
  width: 50px;
  border-radius: 5px;
`;

const PlayButton = styled.div`
  width: 74px;
  height: 74px;
  border-style: solid;
  border-width: 37px;
  border-color: #202020;
`;

const PauseButton = styled.div``;

const ResetButton = styled.div``;

const Timer = styled.h2``;

const TimerLabel = styled.h2``;

export const ClockTimerDisplay = ({ breakTime, sessionTime }) => {
  const [currTimer, setCurrTimer] = useState("Session");

  const formatTime = (seconds) => {
    return `${seconds / 60}:${(seconds % 60).toString().padStart(2, "0")}`;
  };
  return (
    <DisplayBox>
      <TimerLabel>{currTimer}</TimerLabel>
      <Timer>
        {currTimer === "Session"
          ? formatTime(sessionTime)
          : formatTime(breakTime)}
      </Timer>
    </DisplayBox>
  );
};
