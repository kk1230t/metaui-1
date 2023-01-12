import { previewTemplate, DEFAULT_VANILLA_CODESANDBOX } from "storybook-addon-preview";
import { renderer } from 'storypug'
import pugComponent from './radio.pug'


const { html } = renderer();

export default {
  title: 'Atomic/radio',
}

// default
const option1 = {
  label:'dddd'
}
export const Default = () => html(pugComponent, option1);
Default.parameters = {
  preview: [
      {
          tab: "pug",
          language: "jsx",
          copy: true,

          
          template: previewTemplate`
include ../components/atoms/index

+radio()
          `
      },
  ],
};