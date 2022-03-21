import styled from 'styled-components/native'

export const HeaderContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Text1 = styled.Text`
    font-size: 25px;
`

export const TextInput = styled.TextInput`
    width: 150px;
    height: 30px;
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.color};
    border-radius: 5px;
`

export const Icon = styled.Image`
    background: ${props => props.theme.color}
`