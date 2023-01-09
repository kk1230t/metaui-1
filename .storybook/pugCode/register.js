import React, { Fragment } from 'react';
import { AddonPanel } from '@storybook/components';
import { useParameter } from "@storybook/api";
import { addons, types } from '@storybook/addons';

import SyntaxHighlighter from './SyntaxHighlighter';
import style from './styles/hljs/github-gist';

export const PugCode = () => {
  const file = useParameter("pugCode", '없음');
  
  if (file === '') {
    return null;
  }
  
  let pug
  
  try {
    pug = require(`!!raw-loader!../../src/components/${file}`);
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }
  console.log('sdfsdfsdfsdf');
  console.log(pug);
  return (
    <Fragment>
      {pug ? (
      <SyntaxHighlighter
        language={'pug'}
        copyable={true}
        padded={true}
        style={style}
      >
        {pug.default}
      </SyntaxHighlighter>
      ) : null}
    </Fragment>
  );
};

addons.register("my-addon/pug-code", () => {
  addons.add("pug-code/panel", {
    title: 'Pug',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <PugCode />
      </AddonPanel>
    ),
  });
});
