import styled from 'styled-components'

const getFontSize = (level: number): string => {
  if (level === 1) {
    return '24px'
  } else if (level === 2) {
    return '20px'
  } else if (level === 3) {
    return '16px'
  } else {
    return '16px'
  }
}

export const QuestionTitleWrapper = styled.div`
  .title {
    text-align: ${(props) => (props.theme.isCenter ? 'center' : 'start')};
    margin-bottom: 0;
    font-size: ${(props) => getFontSize(props.theme.level)};
  }
`
