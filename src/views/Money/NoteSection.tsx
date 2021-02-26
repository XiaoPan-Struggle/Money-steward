import React, {useRef} from 'react';
import { _NotesSection } from './NoteSection/UI';

type Props = {
  value: string;
  onChange: (value: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if(refInput.current !== null){
      props.onChange(refInput.current.value)
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