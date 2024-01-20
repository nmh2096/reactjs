import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .login-form{
        width: 550px;
        border: 1px solid rgba(128, 128, 128, 0.3);
        padding: 20px;
        position: relative;
        top: 270px;
        backdrop-filter: blur(20px);
        box-shadow: 0 0 10px #062339;
        border-radius: 10px;
        .title{
          display: flex;
          justify-content: center;
        }
        .title-input{
          padding-bottom: 5px;
        }
    }
    .group-btn{
      padding: 20px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    .login{
      display: flex;
      justify-content: flex-end;
    }
    .inputPassword{
      color: white;
    }
`