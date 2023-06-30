import styled from 'styled-components';

import SedanSvg from '../../assets/icon-sedans.svg';
import SuvSvg from '../../assets/icon-suvs.svg';
import LuxurySvg from '../../assets/icon-luxury.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  > div {
    flex: 1; /* Each div will take an equal amount of available space */
    height: 50vh;
    padding: 16px;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  h1 {
    padding-top: 30px;
    color: white;
  }

  p {
    color: white;
  }

  #Sedan {
    background: url(${SedanSvg}) no-repeat;
    background-color: ${({ theme }) => theme.COLORS.BO};
  }

  #Suvs {
    background: url(${SuvSvg}) no-repeat;
    background-color: ${({ theme }) => theme.COLORS.DARKCY};
  }

  #Luxury {
    background: url(${LuxurySvg}) no-repeat;
    background-color: ${({ theme }) => theme.COLORS.VERYDARKCYAN};
  }
`;

