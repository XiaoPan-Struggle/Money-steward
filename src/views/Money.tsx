import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #E4E9EF;
  padding: 12px 16px;
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
const Category = styled.section`
`
const NumberPad = styled.section`

`

function Money() {
  return (
    <Layout>
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
      <Category>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </Category>
      <NumberPad>
        <div>100</div>
        <div>
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPad>
    </Layout>
  )
}
export default Money