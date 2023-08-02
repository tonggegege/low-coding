import styled from 'styled-components'

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f2f5;

  .bottom {
    padding: 12px 0;
    height: 100%;

    .content-wrapper {
      margin: 0 24px;
      display: flex;
      height: 100%;

      .left {
        width: 295px;
        background-color: #fff;
        padding: 0 12px;
      }

      .main {
        flex: 1;
        position: relative;
        overflow: hidden;

        .canvas-wrapper {
          position: absolute;
          width: 30vw;
          height: 85%;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          overflow: auto;
          box-shadow: 0 2px 10px #0000001f;
          background-color: #fff;
        }
      }

      .right {
        width: 300px;
        background-color: #fff;
        padding: 0 12px;
      }
    }
  }
`
