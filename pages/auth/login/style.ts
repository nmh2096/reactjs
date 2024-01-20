import styled from "styled-components";
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .login-form{
        width: 550px;
        border: 2px solid rgba(6,35,57,5);
        padding: 20px;
        position: relative;
        top: 270px;
        backdrop-filter: blur(20px);
        box-shadow: 0 0 10px #062339;
        border-radius: 10px;
        .title{
            display: flex;
            justify-content: center;
            font-size: 36px;
            font-weight: bolder;
            text-align: center;
            text-transform: uppercase;
        }
    }
    .remember-forgot{
      display: flex;
      justify-content: space-between;
    }
    .group-btn{
      margin: 20px 0;
      .btn{
        width: 100%;
      }
    }
    .go-sign-up{
        display: flex;
        justify-content: flex-end;
    }
    .register{
      color: white;
    }
    .inputPassword{
      color: white;
    }
    .color-input{
      color: white;
    }
`;