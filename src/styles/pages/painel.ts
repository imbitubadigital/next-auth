import styled from 'styled-components'
export const Container = styled.div`
  flex: 1;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    width: 100%;
    color: ${props => props.theme.colors.text};
  }
`
