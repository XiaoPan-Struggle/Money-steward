import React, {useRef, useState} from 'react';
import { _NotesSection } from './NoteSection/UI';

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