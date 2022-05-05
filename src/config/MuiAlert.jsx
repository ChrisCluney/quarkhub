import React from 'react'
import { Stack, Alert, AlertTitle } from '@mui/material';
// import { Check } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import handleDelete from './MyFucntions';
// import { useUserAuth } from '../context/UserAuthContext';
import { getAuth } from 'firebase/auth';









export default function BasicAlerts() {






    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
    } else {
      // No user is signed in.
    }








    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert 
        variant="filled" 
        severity="success" 
        icon={<CheckIcon fontSize="inherit" />} 
        action={<Button color='inherit' size='small' onClick={() => handleDelete(user.id)}>
            UNDO
        </Button>}>
        <AlertTitle>Success</AlertTitle>
      Added to favorites!
      </Alert>
    </Stack>
  );
}
