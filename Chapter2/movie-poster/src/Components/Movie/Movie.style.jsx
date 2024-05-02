import styled from 'styled-components';

export const Body = styled.div`
    background-color: #242756;
`;

export const AppContainer = styled.div`
    display : flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const MovieContainer = styled.div`
    margin: 18px;
    background-color: #474c79;
    color :white;
    border-radius: 5px;
`;

export const MovieContainerImg = styled.img`
    max-width: 100%;
`;

export const MovieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`;

export const MovieInfoH5 = styled.h5`
    margin: 0;
    color: white;
`;

export const MovieInfoSpan = styled.span`
    color: white;
    margin-left: auto;
`;

export const HoverInfo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s;
`

export const HoverInfoH5 = styled.h5`
    color: white;
    margin: 5px;
`
export const HoverInfoSpan = styled.span`
    color: white;
    margin: 5px;
`

export const HoverInfoP = styled.p`
    color: white;
    margin: 5px;
`