# Quillforms-TypeScript-MUI

## Description
This is a project to see if [Quillforms](https://github.com/quillforms/quillforms) can be an easy and fully configurable 
open source replacement for [Typeform](https://www.typeform.com/).

### Uses:
- React 18 (this is mandatory from Quillforms).
- Material UI 5, but assuming any version would work.

### Done

- [x] Implement the custom block example but with in Typescript. [Create your own custom block, Quillforms Documentation](https://github.com/quillforms/quillforms/blob/master/react-docs/create-your-own-custom-block-type.md)
- [x] Implement a custom block with Material UI.
- [x] Have the Material UI Button implement functions from Quillforms (very basics).

### Not completed

- [ ] Implement custom navigation buttons.
    - Only the next() function is exposed in the Quillforms API.
    - Realistically need access to prev(), submit() etc to have own buttons with functions.
- [ ] Create react app template is throwing webpack TSLint errors from the Quillforms node_module :sweat:
- [ ] Have choices in the custom block be configurable through attributes, yes... what is in there is a hack.
- [ ] No data handling at all done in this example.

### Handy Resources
- [Quillforms react documentation](https://github.com/quillforms/quillforms/tree/master/react-docs)
