import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #E4E9EF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol{
    display: flex;
    margin: 0 -12px;
    > li{
      background: #e3a7aa;
      border-radius: 18px;
      padding: 3px 16px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button{
    background: none;
    border: none;
    border-bottom: 1px solid #9e9ea5;
    color: #9e9ea5;
    padding: 2px 4px;
    margin: 8px 0;
  }
`
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
const CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    justify-content: space-between;
    background: #bdd067;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        width: 100%;
        background: #707175;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`
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
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注：</span>
          <input type="text" placeholder="在这里添加备注信息" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
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
      </NumberPadSection>
    </MyLayout>
  )
}
export default Money