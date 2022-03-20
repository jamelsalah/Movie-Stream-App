import styled from 'styled-components/native'

export const StyledText = styled.Text`
  color: ${props => props.theme.color};
  font-size: 20px;
  display: flex;
`
export const Content = styled.View`
  background: ${props => props.theme.primaryColor};
  margin-top: 20px;
  padding: 10px;
`