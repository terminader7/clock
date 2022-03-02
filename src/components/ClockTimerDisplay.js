import React, { useState } from "react";

import styled from "styled-components";

const DisplayBox = styled.div`
  border: 2px;
  border-color: black;
  border-style: solid;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const PausePlayButton = styled.button``;

const ResetButton = styled.button``;

const Timer = styled.h1``;

const TimerLabel = styled.h2``;

export const ClockTimerDisplay = ({ breakTime, sessionTime }) => {
  const [currTimerLabel, setCurrTimerLabel] = useState("Session");
  const [currTime, setCurrTime] = useState(sessionTime);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (seconds) => {
    return `${seconds / 60}:${(seconds % 60).toString().padStart(2, "0")}`;
  };
  return (
    <div>
      <DisplayBox>
        <TimerLabel>{currTimerLabel}</TimerLabel>
        <Timer>
          {currTimerLabel === "Session"
            ? formatTime(sessionTime)
            : formatTime(breakTime)}
        </Timer>
      </DisplayBox>
      <ButtonContainer>
        <PausePlayButton
          onClick={() => {
            setIsPlaying(!isPlaying); //same as if isPlaying === false then return true vice versa
          }}
        >
          Play/Pause
        </PausePlayButton>
        <ResetButton>Reset</ResetButton>
      </ButtonContainer>
    </div>
  );
};
