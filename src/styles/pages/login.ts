import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  flex: 1;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.form`
  width: 100%;
  max-width: 380px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    width: 100%;
    color: ${props => props.theme.colors.text};
  }

  input {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    background: transparent;
    color: ${props => props.theme.colors.text};
  }

  button {
    width: 100%;
    margin: 10px 0 0;
    padding: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    transition: all 0.3s;
    letter-spacing: 1.2px;

    &:hover {
      background: ${props => darken(0.1, props.theme.colors.secondary)};
    }
  }
`
