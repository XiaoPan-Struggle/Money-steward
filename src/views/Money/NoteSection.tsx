import React, {ChangeEventHandler} from 'react';
import { _NotesSection } from './NoteSection/UI';
import {Input} from 'components/Input';

type Props = {
  value: string;
  onChange: (value: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value)
  }
  return(
    <_NotesSection>
      <Input label="备注"
             type="text"
             value={note}
             onChange={onChange}>
      </Input>
    </_NotesSection>
  )
}

export {NoteSection}