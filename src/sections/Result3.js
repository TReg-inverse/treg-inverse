import { Box, Grid, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";

const images_1 = {
    sr: {
        measure: require('../figures/landscape/land-sr-01.png'),
        photo: require('../figures/landscape/land-sr-01-photo.png'),
        monet: require('../figures/landscape/land-sr-01-monet.png'),
        water: require('../figures/landscape/land-sr-01-water.png'),
    },
    blur: {
        measure: require('../figures/landscape/land-blur-01.png'),
        photo: require('../figures/landscape/land-blur-01-photo.png'),
        monet: require('../figures/landscape/land-blur-01-monet.png'),
        water: require('../figures/landscape/land-blur-01-water.png'),
    },
}

const images_2 = {
    sr: {
        measure: require('../figures/landscape/land-sr-02.png'),
        photo: require('../figures/landscape/land-sr-02-photo.png'),
        monet: require('../figures/landscape/land-sr-02-monet.png'),
        water: require('../figures/landscape/land-sr-02-water.png'),
    },
    blur: {
        measure: require('../figures/landscape/land-blur-02.png'),
        photo: require('../figures/landscape/land-blur-02-photo.png'),
        monet: require('../figures/landscape/land-blur-02-monet.png'),
        water: require('../figures/landscape/land-blur-02-water.png'),
    },
}

function ImageMagnifierGrid(props){
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const zoomLevel = 4.0;
    return (
        <Grid container>
            {props.srcs.map((src) => (
                <Grid item sm={3}>
                    <Stack direction="column" spacing={0} alignItems="center">
                        <img 
                            src={src}
                            style={{width: '100%', height: '100%'}}
                            onMouseEnter={(e) => {
                                const elem = e.currentTarget;
                                const { width, height } = elem.getBoundingClientRect();
                                setSize([width, height]);
                            }}
                            onMouseMove={(e) => {
                                const elem = e.currentTarget;
                                const { top, left } = elem.getBoundingClientRect();
                                const x = Math.min(Math.max(e.pageX - left - window.pageXOffset, (imgWidth/zoomLevel)/2), imgWidth-(imgWidth/zoomLevel)/2);
                                const y = Math.min(Math.max(e.pageY - top - window.pageYOffset, (imgHeight/zoomLevel)/2), imgHeight-(imgHeight/zoomLevel)/2);
                                console.log(x, y, imgWidth);
                                setXY([x, y]);
                            }}
                            onMouseOut={() => {
                                setSize([0, 0])
                            }}
                            alt="img"
                        />
                        <div 
                            style={{
                                PointerEvent: "none",
                                backgroundImage: `url('${src}')`,
                                height: imgHeight,
                                width: imgWidth,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                                backgroundPositionX: `${-x * zoomLevel + imgWidth / 2}px`,
                                backgroundPositionY: `${-y * zoomLevel + imgHeight / 2}px`
                            }} 
                        ></div>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    )
}

export default function Result3 () {
    const [task, setTask] = useState('sr');

    function changeTask(newTask){
        console.log(newTask);
        setTask(newTask);
    }

    return (
        <div>
            <Typography variant="h4">
                Style change for landscape
            </Typography>

            <Box style={{display: "flex", justifyContent: "center", padding:"2rem 0"}}>
            <ToggleButtonGroup 
                color="error"
                value={task}
                aria-label="outlined button group">
                <ToggleButton value='sr' onClick={() => changeTask('sr')}>Super-resolution (x16)</ToggleButton>
                <ToggleButton value='blur' onClick={() => changeTask('blur')}>Deblur (Gauss)</ToggleButton>
            </ToggleButtonGroup>
            </Box>

            <Grid container spacing={1} alignItems="center" style={{padding: "2rem 0"}}>
                {/* description */}
                <Grid item sm={3}>
                    <Typography variant="subtitle1" align="center" > Measurement </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="subtitle1" align="center" fontStyle={'italic'}> "Photography" </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="subtitle1" align="center" fontStyle={'italic'}> "Monet" </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="subtitle1" align="center" fontStyle={'italic'}> "Watercolor" </Typography>
                </Grid>

                <ImageMagnifierGrid srcs={[images_1[task].measure, images_1[task].photo, images_1[task].monet, images_1[task].water]}/>

                <ImageMagnifierGrid srcs={[images_2[task].measure, images_2[task].photo, images_2[task].monet, images_2[task].water]}/>
            </Grid>
        </div>
    )
}