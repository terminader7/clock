import React from "react";
import styled from "styled-components";

const BreakButtonLabel = styled.h1``;

const SessionLength = styled.h1``;

export const ClockTimerLength = () => {
  return (
    <div>
      <BreakButtonLabel>Break Length</BreakButtonLabel>
      <SessionLength>Session Length</SessionLength>
    </div>
  );
};
