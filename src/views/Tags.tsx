import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'Hooks/useTags';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button, Center, TagList} from './Tags/UI';

function Tags() {
  const {tags, addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag => (
          <li className="oneLine" key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span>{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;