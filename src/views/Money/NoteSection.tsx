import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const _NotesSection = styled.section`
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
const NoteSection: React.FC = () => {
  const [note, setNote] = useState('');

  const refInput = useRef<HTMLInputElement>(null)

  const onBlur = () => {
    if(refInput.current !== null){
      setNote(refInput.current.value)
    }
  }
  return(
    <_NotesSection>
      <label>
        <span>备注：</span>
        <input type="text" placeholder="在这里添加备注信息"
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </_NotesSection>
  )
}

export {NoteSection}