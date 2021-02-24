import styled from 'styled-components';
import React from 'react';


const _TagsSection = styled.section`
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
const TagsSection: React.FC = () => {
  return(
    <_TagsSection>
      <ol>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <button>新增标签</button>
    </_TagsSection>
  )
}

export {TagsSection}