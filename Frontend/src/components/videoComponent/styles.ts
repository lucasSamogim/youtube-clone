import styled from "styled-components";

export const Component = styled.div`
  width: 100%;
`;

export const ImageBanner = styled.img`
  width: 100%;
  /* height: 210px; */
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  cursor: pointer;
`;

export const TitleCOntainer = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
`;

export const ChannelIMage = styled.div`
  background-color: beige;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  margin: 12px 12px 0 0;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 12px 0 0;
  /* padding: 0 14px 0 0; */
`;

export const Title = styled.span`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #0f0f0f;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

export const TextCard = styled.span`
  color: #8c8c8c;
  font-size: 14px;
`;