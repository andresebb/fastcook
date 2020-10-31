import styled, { css } from "styled-components";

export const Category = styled.button`
  width: 100px;
  border-radius: 12px;
  padding: 4px;
  box-shadow: 4px 3px 13px -10px #666565;
  margin: 4px 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  ${(props) => props.centrado && css``}
`;
export const ImgContainer = styled.div`
  width: 100%;
`;
export const Img = styled.img`
  width: 100%;
`;
export const TextCategory = styled.p`
  margin: 4px;
  font-weight: bold;
  text-align: center;
  color: #000000;
`;
