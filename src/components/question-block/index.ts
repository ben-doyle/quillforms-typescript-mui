// @ts-nocheck
import { registerBlockType } from "@quillforms/blocks";
import QuestionBlock from './QuestionBlock';

registerBlockType("question-block", {
  supports: {
    editable: true
  },
  attributes: {
    // This is where you would specify types for the attributes
  },
  display: QuestionBlock
});
