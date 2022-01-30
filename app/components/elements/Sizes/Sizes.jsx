import { useState } from 'react';

import styles from './Sizes.module.scss';

import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        marginLeft: '-.75rem',
        position: 'relative',
        backgroundColor: 'none',
        border: '1px solid #ced4da',
        fontSize: 16,
        fontWeight: 500,
        color: '#958871',
        padding: '10px 26px 10px 12px',
        marginTop: '1.5rem',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Segoe UI"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#ad9d81',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

function Sizes(props) {
    const [size, setSize] = useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1 }} variant="standard">
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={size}
                onChange={handleChange}
                input={<BootstrapInput />}
            >
                {props.sizes.map(s => (
                    <MenuItem value={s} key={s}>{s}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default Sizes;