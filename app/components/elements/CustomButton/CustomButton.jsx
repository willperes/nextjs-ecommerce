import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

function CustomButton(props) {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    return (
        <ColorButton
            variant="contained"
            sx={{
                fontFamily: '"Segoe UI"'
            }}
        >
            {props.children}
        </ColorButton>
    );
}

export default CustomButton;