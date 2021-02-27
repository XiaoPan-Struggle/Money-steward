import styled from 'styled-components';

const Label = styled.label`
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
      font-size: 18px;
    }
`
export {Label}