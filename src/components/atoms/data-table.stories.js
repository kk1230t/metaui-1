import { previewTemplate, DEFAULT_VANILLA_CODESANDBOX } from "storybook-addon-preview";
import { renderer } from 'storypug'
import checkbox from './data-table.pug'


const { html } = renderer();

export default {
  title: 'Atomic/data-table',
}

// default
const option1 = {
}
export const Default = () => html(checkbox, option1);
Default.parameters = {
  preview: [
      {
          tab: "pug",
          language: "jsx",
          copy: true,

          
          template: previewTemplate`
include checkbox

+mui-checkbox()
          `
      },
  ],
};