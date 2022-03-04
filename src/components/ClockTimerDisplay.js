import React, { useState, useEffect, useRef } from "react";
import {
  isPlayingUseEffect,
  sessionTimeBreakTimeUseEffect,
} from "../useEffect";

import styled from "styled-components";

const DisplayBox = styled.div`
  border: 5px;
  border-color: black;
  border-style: solid;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  width: 250px;
  font-size: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  padding-top: 10px;
`;

const PausePlayButton = styled.button`
  background-color: #00796b;
  color: white;
  border-radius: 5px;
  height: 35px;
`;

const ResetButton = styled.button`
  background-color: #e81e1e;
  color: white;
  border-radius: 5px;
`;

const Timer = styled.h1``;

const TimerLabel = styled.h2``;

export const ClockTimerDisplay = ({ breakTime, sessionTime }) => {
  const [currTimerLabel, setCurrTimerLabel] = useState("Session");
  const [currTime, setCurrTime] = useState(sessionTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalID, setIntervalId] = useState();

  const currTimeRef = useRef();
  currTimeRef.current = currTime;

  useEffect(() => {
    if (isPlaying) {
      setIntervalId(
        setInterval(() => {
          console.log(currTimeRef.current);
          setCurrTime(currTimeRef.current - 1);
        }, 1000)
      );
    } else {
      clearInterval(intervalID);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currTimerLabel === "Session") {
      setCurrTime(sessionTime);
    } else {
      setCurrTime(breakTime);
    }
  }, [sessionTime, breakTime]);

  const formatTime = (seconds) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (currTime === 0) {
      currTimerLabel === "Session"
        ? setCurrTimerLabel("Break") && setCurrTime(breakTime)
        : setCurrTimerLabel("Session") && setCurrTime(sessionTime);
    }
  }, [currTime]);

  return (
    <div>
      <DisplayBox>
        <TimerLabel>{currTimerLabel}</TimerLabel>
        <Timer>{formatTime(currTimeRef.current)}</Timer>
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
