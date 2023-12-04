import { Button } from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

const LinkButton = (props) => (
    <Button sx={{m: '0.3rem'}}
            style={{
                borderRadius: 35,
                backgroundColor: "black",
                padding: "0.5rem 1.0rem"
            }}
            href={props.link}
            variant="contained"
            startIcon={props.icon}>
        {props.text}
    </Button>
);

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));

const ImageButtonBase = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: '85px',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));


const ImageButton = (props) => (
    <ImageButtonBase
        focusRipple
        key={props.key}
        style={{
            width: '100%',
        }}
        >
        <ImageSrc style={{ backgroundImage: `url(${props.image})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
        </Image>
    </ImageButtonBase>
);

export { ImageButton, LinkButton };

