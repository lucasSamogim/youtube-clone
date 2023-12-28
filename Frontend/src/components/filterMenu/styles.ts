import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30px;
  margin-top: -40px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar { 
	display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 15px 12px;
  margin: 0 12px 12px 0;
  border-radius: 8px;
  background-color: #f2f2f2;
  transition: 0.2s ease-in;

  span {
    font-weight: 400;
    font-size: 14px;
    color: #0f0f0f;
    white-space: nowrap;
  }

  &:hover {
    background-color: #E5E5E5;
  }
`;