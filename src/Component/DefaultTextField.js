import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function DefaultTextField({ name, attributes, methods }) {
  return (
    <TextField
      key={name}
      margin="dense"
      id={name}
      name={name}
      label={name}
      variant={'outlined'}
      error={Boolean(methods.errors[name])}
      helperText={methods.errors[name] && methods.errors[name].message}
      fullWidth
      InputLabelProps={{ shrink: true }}
      inputRef={methods.register(attributes)}
      {...attributes}
    />
  )
}
