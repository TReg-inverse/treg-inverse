import { Avatar, Box, Button, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";

function preload(images) {
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    })
}

const addLoadEvent = (func) => {
    const onloadEvent = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (onloadEvent) {
                onloadEvent();
            }
            func();
        }
    }
}

const images = {
    sr: {
        sample1: [
            require('../figures/face/human-sr-1.png'),
            require('../figures/face/human-sr-1-adult.png'),
            require('../figures/face/human-sr-1-baby.png'),
        ],
        sample2: [
            require('../figures/face/human-sr-2.png'),
            require('../figures/face/human-sr-2-adult.png'),
            require('../figures/face/human-sr-2-baby.png'),
        ],
        sample3: [
            require('../figures/face/human-sr-3.png'),
            require('../figures/face/human-sr-3-adult.png'),
            require('../figures/face/human-sr-3-baby.png'),
        ],
    },
    blur: {
        sample1: [
            require('../figures/face/human-blur-1.png'),
            require('../figures/face/human-blur-1-adult.png'),
            require('../figures/face/human-blur-1-baby.png'),
        ],
        sample2: [
            require('../figures/face/human-blur-2.png'),
            require('../figures/face/human-blur-2-adult.png'),
            require('../figures/face/human-blur-2-baby.png'),
        ],
        sample3: [
            require('../figures/face/human-blur-3.png'),
            require('../figures/face/human-blur-3-adult.png'),
            require('../figures/face/human-blur-3-baby.png'),
        ],
    },
    getSample : function (task, num){
        return this[task]['sample'+num];
    }
};

addLoadEvent(preload(images.sr.sample2.slice(1,2)))
addLoadEvent(preload(images.sr.sample3.slice(1,2)))
addLoadEvent(preload(images.blur.sample1))
addLoadEvent(preload(images.blur.sample2))
addLoadEvent(preload(images.blur.sample3))

export default function Result2 () {
    const [task, setTask] = useState('sr');
    const [num, setNum] = useState(1);

    function changeTask(newTask){
        console.log(newTask);
        setTask(newTask);
    }

    function changeNum(newNum){
        console.log(newNum);
        setNum(newNum);
    }

    return (
        <div style={{padding: '2rem 0'}}>
            <Typography variant="h4">
                Age control of human face
            </Typography>

            <Box style={{display: "flex", justifyContent: "center", padding:"2rem 0" }}>
            <ToggleButtonGroup 
                color="error"
                value={task}
                aria-label="outlined primary button group">
                <ToggleButton value='sr' onClick={() => changeTask('sr')}>Super-resolution (x16)</ToggleButton>
                <ToggleButton value='blur' onClick={() => changeTask('blur')}>Deblur (Gauss)</ToggleButton>
            </ToggleButtonGroup>
            </Box>

            <Grid container spacing={1}>
                <Grid item sm={4}>
                    <Button
                        className="clickable-img"
                        style={{padding: 0, opacity: num===1 ? 1 : 0.3}}
                        startIcon={<Avatar src={images.getSample(task, 1)[0]}
                                            variant='square'
                                            sx={{width:'100%', height:'100%'}}/>}
                        onClick={() => changeNum(1)}
                    />
                </Grid>
                <Grid item sm={4}>
                    <Button
                        className="clickable-img"
                        style={{padding: 0, opacity: num===2 ? 1 : 0.3}}
                        startIcon={<Avatar src={images.getSample(task, 2)[0]}
                                            variant='square'
                                            sx={{width:'100%', height:'100%'}}/>}
                        onClick={() => changeNum(2)}
                    />
                </Grid>
                <Grid item sm={4}>
                    <Button
                        className="clickable-img"
                        style={{padding: 0, opacity: num===3 ? 1 : 0.3}}
                        startIcon={<Avatar src={images.getSample(task, 3)[0]}
                                            variant='square'
                                            sx={{width:'100%', height:'100%'}}/>}
                        onClick={() => changeNum(3)}
                    />
                </Grid>

                <Grid item sm={6}>
                    <Typography variant="h6" align="center" fontStyle={'italic'}> "Adult" </Typography>
                    <img src={images.getSample(task, num)[1]} width={"100%"} alt="adult" style={{padding: 0}}/>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="h6" align="center" fontStyle={'italic'}> "Baby" </Typography>
                    <img src={images.getSample(task, num)[2]} width={"100%"} alt="baby"/>
                </Grid>
            </Grid>
            <div style={{padding: "2rem 0"}}></div>
        </div>
    )
}