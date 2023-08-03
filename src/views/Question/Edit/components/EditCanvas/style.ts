import styled from 'styled-components'

export const EditCanvasWrapper = styled.div`
  min-height: 100%;
  background-color: #fff;
  overflow: hidden;

  .component-wrapper {
    margin: 12px;
    border: 1px solid #fff;
    padding: 12px;
    border-radius: 3px;

    &:hover {
      border-color: #d9d9d9;
    }

    &.active {
      border: 1px solid blue;
    }
  }

  /* 阻止鼠标事件 */
  .component {
    pointer-events: none;
  }
`
