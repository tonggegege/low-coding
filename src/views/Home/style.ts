import styled from 'styled-components'

export const HomeWrapper = styled.div`
  height: calc(100vh - 64px - 65px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

  .info {
    text-align: center;

    button {
      height: 60px;
      font-size: 24px;
    }
  }
`
