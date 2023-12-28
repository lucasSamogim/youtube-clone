import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => margin ? margin : 0};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.div`
  border-radius: 0 40px 40px 0;
  height: 35px;
  width: 70px;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  width: 300px;
  display: flex;
`;

export const LoginButton = styled.button`
  /* width: 120px; */
  height: 36px;
  border-radius: 18px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  cursor: pointer;
  transition: .1s ease-in-out;
  margin-left: 10px;
  outline: none;
  border: 1px solid rgba(0,0,0,0.1);

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
`;