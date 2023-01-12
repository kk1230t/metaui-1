import { previewTemplate, DEFAULT_VANILLA_CODESANDBOX } from "storybook-addon-preview";
import { renderer } from 'storypug'
import checkbox from './DataTable.pug'


const { html } = renderer();

export default {
  title: 'Atomic/DataTable',
}

// default
const option1 = {
  caption:"테이블 제목",
  headData:[
    [
      {
        text: "<em>dsddddd</em>",
        className:"custom-class"
      },
      {
        text: "dsddddd"
      },
      {
        text: "dsddddd"
      },
      {
        text: "dsddddd"
      }
    ],
    [
      {
        text: "dsddddd2"
      },
      {
        text: "dsddddd2"
      },
      {
        text: "dsddddd2"
      },
      {
        text: "dsddddd2"
      }
    ],
  ],
  bodyData:[
    [
      {
        text: "<em>dsddddd</em>",
        className:"custom-class",
        colspan:2,
        title:true
      },
      {
        text: "dsddddd"
      },
      {
        text: "dsddddd"
      }
    ],
    [
      {
        text: "dsddddd2",
        title:true
      },
      {
        text: "dsddddd2"
      },
      {
        text: "dsddddd2"
      },
      {
        text: "dsddddd2"
      }
    ],
  ],
  footerData:[
    [
      {
        text: "<em>dsddddd</em>",
        className:"custom-class",
        colspan:2,
        title:true
      },
      {
        text: "dsddddd"
      },
      {
        text: "dsddddd"
      }
    ],
    [
      {
        text: "dsddddd2"
      },
      {
        text: "dsddddd2"
      },
      {
        text: "dsddddd2"
      },
      {
        text: "dsddddd2"
      }
    ],
  ]
}
export const Default = () => html(checkbox, option1);
Default.parameters = {
  preview: [
      {
          tab: "pug",
          language: "jsx",
          copy: true,

          
          template: previewTemplate`
include ../components/atoms/index

+data-table()
          `
      },
  ],
};