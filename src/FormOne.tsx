// @ts-nocheck
import { registerCoreBlocks } from '@quillforms/react-renderer-utils';
import { Form } from '@quillforms/renderer-core';
import React from 'react';
import '@quillforms/renderer-core/build-style/style.css';
import { css } from "emotion";
import './components/question-block';
import './components/example-block';

registerCoreBlocks();
function FormOne() {
  return (
    <div style={{width: "100%", height: "100vh"}}>
      <Form
        formId="1"
        formObj={{
          customCSS: css`
            /* Removes the Quillforms navigation */
            .renderer-core-field-footer { display: none; }
          `,
          settings: {
            disableProgressBar: true,
            disableNavigationArrows: true,
            disableWheelSwiping: true,
            showQuestionsNumbers: false,
          },
          blocks: [
            {
              // This is a core block, which contains the TypeForm style navigation still,
              // you would want to replace this with your own custom block that does the same, but MUI.
              name: "welcome-screen",
              id: "welcome",
              attributes: {
                label: "Welcome to the form",
                description: "This is just a description",
                attachment: {
                  type: "image",
                  url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
                }
              }
            },
            {
              name: "example-block",
              id: "questionone",
              attributes: {
                label: "This is my custom block",
                description: "From 0 to 6 rate our first service",
                start: 0,
                end: 6
              }
            },
            {
              name: "question-block",
              id: "questiontwo",
              attributes: {
                label: "This is question one",
                description: "With a binary choices",
                // The choices would be implemented similar to this in the future, binary example.
                // choices: [
                //   {
                //     label: "Yes",
                //     value: "yes"
                //   },
                //   {
                //     label: "No",
                //     value: "no"
                //   },
                // ]
              },
            },
            {
              name: "question-block",
              id: "questionthree",
              attributes: {
                label: "This is question two",
                description: "With multiple choices",
                // The choices would be implemented similar to this in the future, multi-example.
                // choices: [
                //   {
                //     label: "Choice One",
                //     value: "choice-one"
                //   },
                //   {
                //     label: "Choice Two",
                //     value: "choice-two"
                //   },
                //   {
                //     label: "Choice Three",
                //     value: "choice-three"
                //   }
                // ],
              },
            },
          ],
        }}
        onSubmit={(data, {completeForm, setIsSubmitting, goToBlock, setSubmissionErr}) => {
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>
  );
}

export default FormOne;
