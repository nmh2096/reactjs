import styled from "styled-components";

export const AuthLayoutContainer = styled.div`
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    .background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
}
`