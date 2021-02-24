import styled from 'styled-components';
import React from 'react';

const _NumberPadSection = styled.section`
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

const NumberPadSection: React.FC = () => {
  return(
    <_NumberPadSection>
      <div className="output">100</div>
      <div className="pad clearfix">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </_NumberPadSection>
  )
}
export {NumberPadSection}