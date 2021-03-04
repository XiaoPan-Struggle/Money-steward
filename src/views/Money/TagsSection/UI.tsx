import styled from 'styled-components';

const _TagsSection = styled.section`
  background: #E4E9EF;
  padding: 12px 16px;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
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
export {_TagsSection}
