import styled from "styled-components";

export const Container = styled.div<{ isOpenMenu: boolean }>`
  width: ${({isOpenMenu}) => isOpenMenu ? '325px' : '100px'};
  height: calc(100vh - 55px);
  box-sizing: border-box;
  padding: 10px 10px 10px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 1;
  position: sticky;
  top: 55px;

  &:hover {
    overflow-y: auto;
  }
`;

export const MenuItem = styled.div<{isOpenMenu: boolean}>`
  width: 90%;
  min-height: ${({isOpenMenu}) => isOpenMenu ? '40px' : '70px'};
  margin-bottom: 8px;
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 17px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({isOpenMenu}) => isOpenMenu ? 'row' : 'column'};
  align-items: center;
  justify-content: ${({isOpenMenu}) => isOpenMenu ? 'none' : 'center'};
  
  span {
    font-weight: 400;
    margin-left: ${({isOpenMenu}) => isOpenMenu ? '20px' : 'none'};
    font-size: ${({isOpenMenu}) => isOpenMenu ? '16px' : '12px'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img<{isOpenMenu: boolean, width?: string}>`
  width: ${({ width }) => width ? width : '24px'};
  margin-bottom: ${({isOpenMenu}) => isOpenMenu ? 'none' : '7px'};
`;

export const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 5px 0;
  width: 90%;
`;

export const OpenMenuSectionTitle = styled.h2`
  color: #0f0f0f;
  font-size: 1.3rem;
  font-weight: 400;
  margin-left: 30px;
  align-self: self-start;
`;

export const AvatarContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  text-overflow: ellipsis;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -10px;
`;

export const NameContainer = styled.div`
  flex: 2;
  overflow: hidden;
  margin-left: -10px
`;

export const AvatarImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5)
`;

export const AvatarName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FooterLinks = styled.span`
  align-self: self-start;
  margin-left: 30px;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  display: inline-flex;
  cursor: pointer;
`;

export const FooterDivider = styled.div`
  width: 100%;
  padding: 8px;
`;

export const FooterCopyright = styled.span`
  align-self: self-start;
  margin-left: 30px;
  font-size: 14px;
  color: #909090;
`;