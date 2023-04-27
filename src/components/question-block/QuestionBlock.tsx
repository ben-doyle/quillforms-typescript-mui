import { Button } from '@mui/material';
import { css } from 'emotion';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Box from '@mui/material/Box';

interface Props {
  id: string;
  next: () => void;
}

/**
 * QuestionBlock
 * Very simple block to demonstrate how to add a new block to QuillForms that uses MUI.
 */
const QuestionBlock = ({ id, next }: Props) => {
  // Hack alert: the choices are hard-coded here, but they should be passed in as props through attributes.
  const choices = (id === 'questiontwo') ? ['yes', 'no'] : ['yes', 'no', 'not sure'];

  return (
    <>
      <div
        className={
          css`
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            margin-top: 15px;
          `
        }
      >
        <FormControl fullWidth={true} margin={'normal'}>
          <RadioGroup>
            {
              choices.map((choice) => { return (<FormControlLabel value={choice} control={<Radio/>} label={choice}/>) })
            }
          </RadioGroup>
        </FormControl>
        <>
          <Button variant='outlined' startIcon={<NavigateBeforeIcon/>}>BACK</Button>
          <Box flexGrow={1} />
          <Button variant='contained' onClick={ next }>OK, NEXT</Button>
        </>
      </div>
    </>
  );
};
export default QuestionBlock;
