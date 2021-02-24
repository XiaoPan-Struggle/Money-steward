import styled from 'styled-components';
import React, {useState} from 'react';


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
    flex-wrap: wrap;
    margin: 0 -12px;
    > li{
      background: #e3a7aa;
      border-radius: 18px;
      padding: 3px 16px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: #fd6174;
        color: #fff;
      }
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
const TagsSection: React.FC = (porps) => {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags,setSelectedTags] = useState<string[]>([])
  const onAddTag = () => {
    const tagName = window.prompt('请输入您要添加的标签名');
    if (tagName !== null) {
      setTags([...tags,tagName])
    }
  }
  const onToggleTag = (tag: string) => {
    // selectedTags 里存放被选中的标签
    const index = selectedTags.indexOf(tag)
    if(index >= 0){
      setSelectedTags(selectedTags.filter(t => t!== tag))
    }else {
      setSelectedTags([...selectedTags,tag])
    }
  }
  const getClass = (tag: string) => (selectedTags.indexOf(tag) >= 0 ? 'selected' : '')
  return(
    <_TagsSection>
      <ol>
        {tags.map(tag =>
          <li className={getClass(tag)} key={tag} onClick={() => {onToggleTag(tag)}} >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </_TagsSection>
  )
}

export {TagsSection}