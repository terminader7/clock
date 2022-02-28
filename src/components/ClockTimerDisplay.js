import React from "react";

import styled from "styled-components";

const displayBox = styled.div``;

const timer = styled.h2``;

const timerLabel = styled.h2``;

export const ClockTimerDisplay = (breakTime, sessionTime) => {
  return (
    <displayBox>
      <timerLabel />
      <timer />
    </displayBox>
  );
};
