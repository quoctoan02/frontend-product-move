import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './MuiDatePicker.scss'
export default function MuiDatePicker() {
    const [value, setValue] = React.useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField
                    sx={{
                        // '&.MuiFormControl-root': {
                        //     "box-shadow": 'none',
                        //     'padding': '0',
                        //     minWidth: '100%',
                        //     alignItems: 'inherit',
                        // }
                    }}
                    {...params} helperText={null}
                />}
            />
        </LocalizationProvider>
    );
}