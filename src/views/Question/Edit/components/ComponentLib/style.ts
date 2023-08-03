import styled from 'styled-components'

export const ComponentLibWrapper = styled.div`
  .item {
    .componentConfList {
      border: 1px solid #fff;
      border-radius: 3px;
      padding: 12px;

      &:hover {
        border-color: #d9d9d9;
      }

      &:active {
        user-select: none;
        border: 1px solid blue;
      }

      .component {
        pointer-events: none;
      }
    }
  }
`
