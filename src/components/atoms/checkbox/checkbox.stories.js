import { previewTemplate, DEFAULT_VANILLA_CODESANDBOX } from "storybook-addon-preview";
import { renderer } from 'storypug'
import checkbox from './checkbox.pug'


const { html } = renderer()

const options = {
  labelText:'체크박스111', 
  id:'vadsfsdaf'
}

export default {
  title: 'Examples/checkbox',
}

// default
export const Default = () => html(checkbox, options)
Default.parameters = { pugCode: 'atoms/checkbox/checkbox_view.pug' };
Default.parameters = {
  preview: [
      {
          tab: "pug",
          language: "jsx",
          copy: true,

          
          template: previewTemplate`
include Button

+Button({
})
  | ${options.labelText}
          `
      },
  ],
};
// type=submit
// export const Submit = () => html(Button, { type: 'submit' }, 'Send')
// Submit.parameters = { pugCode: 'Examples/Button/type_submit.pug' };
