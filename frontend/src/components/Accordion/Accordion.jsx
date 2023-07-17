import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme } from '@mui/material';
import './Accordion.scss'

export default function BasicAccordion({handleChange, subCategories}) {

    const theme = createTheme({
        typography: {
          fontSize: 20,
          border: 'none',
          fontFamily: [
            'Oswald',
            'sans-serif',
          ].join(','),
        },
      });

  return (
    <div className='accordion'>
      <Accordion elevation={0} sx={{ width: '70%' }}>
        <AccordionSummary
          sx={{ padding: '0px' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography theme={theme}>Products categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography theme={theme}>
          {subCategories?.map((item) => (
            <div className="inputItem" key={item.id}>
              <div className='input'>
                <input className="ui-checkbox" type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            </div>
          ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}