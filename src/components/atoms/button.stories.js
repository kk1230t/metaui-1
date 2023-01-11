import { previewTemplate, DEFAULT_VANILLA_CODESANDBOX } from "storybook-addon-preview";
import { renderer } from 'storypug'
import button from './button.pug'


const { html } = renderer();

export default {
  title: 'Atomic/button',
}

// default
const option1 = {
  labelText:'버튼',
  size:'small',
  isIcon:true
}
export const Default = () => html(button, option1);
Default.parameters = {
  preview: [
      {
          tab: "pug",
          language: "jsx",
          copy: true,

          
          template: previewTemplate`
include ../components/atoms/index

+button({
  labelText:'${option1.labelText}',
  size:'${option1.size}'  /* small, medium, large */
})
          `
      },
  ],
};