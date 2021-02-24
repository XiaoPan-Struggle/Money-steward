import styled from 'styled-components';

const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    background: #fb9a7f;
    color: #fff;
    text-align: right;
    line-height: 72px;
    padding: 0 16px;
    font-size: 36px;
    box-shadow: inset 0 -6px 6px -5px rgba(0,0,0,0.25),
                inset 0 6px 6px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
      float: left;
      width: 25%;
      height: 64px;
      background: transparent;
      border: 1px solid #eee;
      font-weight: 600;
      font-size: 16px;
      &.ok{
       height: 128px;
       float: right; 
      }
      &.zero{
        width: 50%;
      }
    }
  }
`
export {NumberPadSection}