import { previewTemplate, DEFAULT_VANILLA_CODESANDBOX } from "storybook-addon-preview";
import startCase from 'lodash/startCase';
import { renderer } from 'storypug'
import Example from './example.pug';


// pass here shared locals like functions and variables
const { html } = renderer({ startCase });
const { render } = renderer({ startCase });

export default {
  title: '122222222222',
};

export const Basic = () => {
  // setup properties
  const props = { intro: 'This is anretetret intro' };
  // this HTML will be rendered inside the mixin's block
  const contents = '<p>Example body</p>';

  return Example({ props, contents, startCase });
  // return html(Example, props, contents);
  // const wrapper = render(Example, props, contents);
  // console.log(wrapper);
  // return wrapper.$root;
};

Basic.parameters = {
  preview: [
      {
          tab: "Vanilla",
          template: previewTemplate`
const inst = new Instance({
  opt1: ${"opt1"},
  num1: ${"num1"},
});
          `,
          language: "ts",
          copy: true,
          codesandbox: DEFAULT_VANILLA_CODESANDBOX(["@egjs/infinitegrid"]),
      },
  ],
};