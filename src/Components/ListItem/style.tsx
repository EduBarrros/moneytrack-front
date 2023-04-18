import styled from "styled-components";

export const Tr = styled.tr``;

type TdProps = {
  alignCenter?: boolean;
};

export const Td = styled.td.attrs((props: TdProps) => ({
  alignCenter: props.alignCenter,
}))<TdProps>`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  svg {
    width: 18px;
    height: 18px;
  }
`;