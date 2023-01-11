import { previewTemplate, DEFAULT_VANILLA_CODESANDBOX } from "storybook-addon-preview";
import { renderer } from 'storypug'
import checkbox from './checkbox.pug'


const { html } = renderer();

export default {
  title: 'Atomic/checkbox',
}

// default
const option1 = {}
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

// default
const option2 = {
  labelText:'체크박스', 
  id:'vadsfsdaf'
}
export const Label = () => html(checkbox, option2);
Label.parameters = {
  preview: [
      {
          tab: "pug",
          language: "jsx",
          copy: true,
          template: previewTemplate`
include ../components/atoms/index

+mui-checkbox({
  labelText:${option2.labelText}
})
          `
      },
  ],
};