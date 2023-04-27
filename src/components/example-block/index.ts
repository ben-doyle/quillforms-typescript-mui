// @ts-nocheck
import { registerBlockType } from "@quillforms/blocks";
import ExampleBlock from './ExampleBlock';

registerBlockType("example-block", {
  supports: {
    editable: true
  },
  attributes: {
    start: {
      type: "number",
      default: 1
    },
    end: {
      type: "number",
      default: 5
    }
  },
  display: ExampleBlock
});
