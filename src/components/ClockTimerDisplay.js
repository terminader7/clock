import React from "react";

import styled from "styled-components";

const DisplayBox = styled.div``;

const Timer = styled.h2``;

const TimerLabel = styled.h2``;

export const ClockTimerDisplay = ({ breakTime, sessionTime }) => {
  return (
    <DisplayBox>
      <TimerLabel />
      <Timer />
    </DisplayBox>
  );
};
