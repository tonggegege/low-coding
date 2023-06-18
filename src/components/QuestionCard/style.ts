import styled from 'styled-components'

export const QuestionCardWrapper = styled.div`
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 3px;
  background-color: #fff;

  &:hover {
    box-shadow: 0 4px 10px #e8e8e8;
  }

  .title {
    display: flex;

    .left {
      flex: 1;
    }

    .right {
      flex: 1;
      text-align: right;
      font-size: 12px;
    }
  }

  .button-container {
    display: flex;

    .left {
      flex: 1;
    }

    .right {
      flex: 1;
      text-align: right;

      button {
        color: #999;
      }
    }
  }
`
