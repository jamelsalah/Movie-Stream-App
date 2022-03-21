import styled from 'styled-components/native'

export const Featured = styled.View`
    margin-bottom: 25px;
`

export const Image = styled.Image`
    height: 300px;
    width: 100%;
    background: white;
`

export const Text1 = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.color};
    position: absolute;
    top: 120px;
    padding: 5px;
`

export const Text2 = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.color};
    position: absolute;
    top: 170px;
    max-height: 130px;
    padding: 5px;
`

export const Text3 = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.color};
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
`