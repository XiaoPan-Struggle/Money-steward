import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  > li{
    border-bottom: 2px solid #99c5e8;
    line-height: 20px;
    background: #fbee83;
    margin: 0 5px;
    border-radius: 10px;
    color: #666;
    > a{
      padding: 12px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .icon {
      width: 18px;
      height: 18px;
      fill: #fb9a7f;
    }
  }
`
const Button = styled.button`
  border: none;
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 8px;
  background: #fb9a7f;
  color: #fff;
  font-weight: 600;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

function Tags() {
  const {tags} = useTags()
  return(
    <Layout>
      <TagList>
        {tags.map(tag => (
          <li className="oneLine" key={tag.id}>
            <Link to={'/tags/' + tag}>
              <span>{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  )
}
export default Tags