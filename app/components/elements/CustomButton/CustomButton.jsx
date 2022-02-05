import Button from '@mui/material/Button';

function CustomButton(props) {
    return (
        <Button onClick={props.onClick} variant="contained" sx={{fontFamily: '"Segoe UI"'}}>{props.children}</Button>
    );
}

export default CustomButton;