import styled from 'styled-components/native'

export const Title = 
    styled.Text`
    color: ${props => props.theme.color};
    font-size: 20px;
    margin-bottom: 10px;
`

export const ListArea = styled.View`
    margin-bottom: 15px;

`

export const Item = styled.View`
    display: flex;
    align-items: center;
    margin-right: 10px;
    height: 200px;
    max-width: 100px;
    overflow: hidden;
    background: ${props => props.theme.color};
`

export const Image = styled.Image`
    opacity: 1;
    width: 100px;
    height: 150px;
`

export const List = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 9999999px;
`
export const StyledText = styled.Text`
    color: ${props => props.theme.primaryColor};
    font-size: 11px;
`