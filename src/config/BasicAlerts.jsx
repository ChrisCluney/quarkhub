import * as React from 'react';
import { Alert } from '@mui/material';
import { Stack } from '@mui/material';
import { AlertTitle } from '@mui/material';


const BasicAlerts = () =>  {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      
      <Alert variant="filled" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
export default BasicAlerts