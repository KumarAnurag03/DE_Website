import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const Thank = () => {

    const history=useHistory();

  return (
    <div>Thank you for applying. <Button onClick={history.push('/joblistings')}>View more jobs</Button></div>
  )
}
