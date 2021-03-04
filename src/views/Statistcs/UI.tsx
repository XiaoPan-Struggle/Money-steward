import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  background: #feae97;

  > .note {
    margin-right: auto;
    margin-left: 18px;
    font-size: 16px;
    color: #888;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  background: #f9e1bb;
`;

export {Item, Header};