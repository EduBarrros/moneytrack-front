import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #323238;
  padding: 20px;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  color: #ccc;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

type ThProps = {
  alignCenter?: boolean;
  width?: number;
}

export const Th = styled.th.attrs((props: ThProps) => ({
  alignCenter: props.alignCenter,
}))<ThProps>`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;