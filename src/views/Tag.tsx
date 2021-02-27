import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button, Center} from './Tags/UI';
import styled from 'styled-components';
import {Input} from 'components/Input';

type Params = {
  id: string
}
const Topper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #f2c5aa;

  > .icon {
    width: 20px;
    height: 20px;
    fill: #707175;
  }
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
`

const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topper>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topper>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="标签名"
        />
      </InputWrapper>
      <Center>
        <Button>删除标签</Button>
      </Center>
      <div>{tag.name}</div>
    </Layout>
  );
};
export {Tag};