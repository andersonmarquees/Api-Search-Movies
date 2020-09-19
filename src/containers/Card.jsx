import styled from 'styled-components';

export const DivCard = styled.div`
    padding: 4rem;
    background-color: linear-gradient(to left, var(--background-low-opacity), var(--background-hight-opacity) 60%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardComponent = styled.div`
    /* box-shadow: 1px 1px 5px rgba(0,0,0,0.25); */
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
                2px 2px 6px rgba(0,0,0,1);
    padding: 4rem;
    background: var(--background-card);
    margin-bottom: 1rem;
    border: 0.6rem solid rgba(0,0,0,0.65);
    border-radius: 2rem;
    width: 60rem;
`;

export const ImgCard = styled.img`
    margin-bottom: 1rem;
    display: block;
    margin-left: 16rem;
    border: 1rem solid rgba(0,0,0,0.65);
    border-radius: 1rem;
`;

export const Card = styled.div`
    padding: 2rem 4rem;
    border-radius: 10px;
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
                2px 2px 6px rgba(0,0,0,0.8);
    margin-bottom: 2rem;
`;

export const CardP = styled.p`
    font-size: 1.5rem;
    font-weight: 500;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    margin-top:2rem;
`;

export const CardH3 = styled.h3`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

`;

