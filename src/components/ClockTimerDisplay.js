import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

import {
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "styled-components";

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
  border: none;
  font-size: 20px;
  padding: 10px 0px;
  width: 110px;
`;

const ResetButton = styled.button`
  background-color: white;
  color: #00796b;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  padding: 10px 25px;
`;

const Timer = styled.h1`
  ${(props) =>
    props.isSub60 &&
    css`
      color: #de4343;
    `}
`;

const TimerLabel = styled.h2``;

export const ClockTimerDisplay = ({
  breakTime,
  sessionTime,
  setBreakTime,
  setSessionTime,
}) => {
  const [currTimerLabel, setCurrTimerLabel] = useState("Session");
  const [currTime, setCurrTime] = useState(sessionTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalID, setIntervalID] = useState();

  const currTimeRef = useRef();
  currTimeRef.current = currTime;

  useEffect(() => {
    if (isPlaying) {
      setIntervalID(
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

  const handleZero = (currTimerLabel) => {
    if (currTimerLabel === "Session") {
      setCurrTimerLabel("Break");
      setCurrTime(breakTime);
    } else {
      setCurrTimerLabel("Session");
      setCurrTime(sessionTime);
    }
  };

  useEffect(() => {
    if (currTime === 0) {
      handleZero(currTimerLabel);
    }
  }, [currTime]);

  return (
    <div>
      <DisplayBox>
        <TimerLabel>{currTimerLabel}</TimerLabel>
        <Timer isSub60={currTimeRef.current < 60}>
          {formatTime(currTimeRef.current)}
        </Timer>
      </DisplayBox>
      <ButtonContainer>
        <PausePlayButton
          onClick={() => {
            setIsPlaying(!isPlaying); //same as if isPlaying === false then return true vice versa
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </PausePlayButton>
        <ResetButton
          onClick={() => {
            setIsPlaying(false);
            setCurrTime(25 * 60);
            setSessionTime(25 * 60);
            setBreakTime(5 * 60);
            setCurrTimerLabel("Session");
          }}
        >
          Reset
        </ResetButton>
      </ButtonContainer>
    </div>
  );
};
