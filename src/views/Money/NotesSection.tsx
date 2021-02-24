import styled from 'styled-components';

const NotesSection = styled.section`
  background: #bea39c;
  padding: 10px 16px;
  font-size: 14px;
  > label{
    display: flex;
    align-items: center;
    > span{
      font-size: 16px;
      margin-right: 16px;
      white-space: nowrap;
    }
    > input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`
export {NotesSection}