import styled from 'styled-components';


export const Container = styled.button`
    width: 30%;
    background-color: white;
    color: ${({ theme }) => theme.COLORS.BO};

    height: 56px;
    border: 10;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 30px;
    font-weight: 400;

     &:disabled {
        opacity: 0.5s;
     }
`;