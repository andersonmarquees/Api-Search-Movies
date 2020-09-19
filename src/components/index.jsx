import styled from 'styled-components';


export const DivComponent = styled.div`
    margin: auto;
    max-width: 60rem;
    padding: 100px;

    background-color: var(--background-container);

    display: flex;
    flex-direction: column;

    padding: 2rem;
    margin-top: 10%;
    border-radius: 3rem;
    border: 1.2rem solid rgba(0,0,0,0.65);
`;

export const TitleComponent = styled.h1`
    font-size: 4.4em;
    color: var(--font-color-title);
    text-align: center;
`;

export const FormComponent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 2rem;
`;

export const LabelComponent = styled.label`
    font-size: 3em;
    color: var(--font-color);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3rem;


`;

export const InputComponent = styled.input`
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: capitalize;
    line-height: 2.8rem;

    color: var(--input-button);

    border: 1px solid #ddd;
    border-radius: 6rem;
    padding: 1rem 2rem;
    margin-bottom: 1rem;

`;

export const ButtonComponent = styled.button`
    padding: 1rem;
    background-color: rgba(0,0,0,0.75);

    color: var(--font-color);
    font-size: 1.8rem;
    text-transform: capitalize;

    border: 1px solid rgba(0,0,0,0.75);
    border-radius: 5rem;

    cursor: pointer;

    transition: background-color 250ms;

    &:hover {
        background-color: rgba(0,0,0,0.85);
    }

`;
