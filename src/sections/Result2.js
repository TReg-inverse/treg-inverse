import { Avatar, Box, Button, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";

const images = {
    sr: {
        sample1: {
            measure: require('../figures/face/human-sr-1.png'),
            adult: require('../figures/face/human-sr-1-adult.png'),
            baby: require('../figures/face/human-sr-1-baby.png'),
        },
        sample2: {
            measure: require('../figures/face/human-sr-2.png'),
            adult: require('../figures/face/human-sr-2-adult.png'),
            baby: require('../figures/face/human-sr-2-baby.png'),
        },
        sample3: {
            measure: require('../figures/face/human-sr-3.png'),
            adult: require('../figures/face/human-sr-3-adult.png'),
            baby: require('../figures/face/human-sr-3-baby.png'),
        },
    },
    blur: {
        sample1: {
            measure: require('../figures/face/human-blur-1.png'),
            adult: require('../figures/face/human-blur-1-adult.png'),
            baby: require('../figures/face/human-blur-1-baby.png'),
        },
        sample2: {
            measure: require('../figures/face/human-blur-2.png'),
            adult: require('../figures/face/human-blur-2-adult.png'),
            baby: require('../figures/face/human-blur-2-baby.png'),
        },
        sample3: {
            measure: require('../figures/face/human-blur-3.png'),
            adult: require('../figures/face/human-blur-3-adult.png'),
            baby: require('../figures/face/human-blur-3-baby.png'),
        },
    },
    getSample : function (task, num){
        return this[task]['sample'+num];
    }
};

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
                        startIcon={<Avatar src={images.getSample(task, 1).measure}
                                            variant='square'
                                            sx={{width:'100%', height:'100%'}}/>}
                        onClick={() => changeNum(1)}
                    />
                </Grid>
                <Grid item sm={4}>
                    <Button
                        className="clickable-img"
                        style={{padding: 0, opacity: num===2 ? 1 : 0.3}}
                        startIcon={<Avatar src={images.getSample(task, 2).measure}
                                            variant='square'
                                            sx={{width:'100%', height:'100%'}}/>}
                        onClick={() => changeNum(2)}
                    />
                </Grid>
                <Grid item sm={4}>
                    <Button
                        className="clickable-img"
                        style={{padding: 0, opacity: num===3 ? 1 : 0.3}}
                        startIcon={<Avatar src={images.getSample(task, 3).measure}
                                            variant='square'
                                            sx={{width:'100%', height:'100%'}}/>}
                        onClick={() => changeNum(3)}
                    />
                </Grid>

                <Grid item sm={6}>
                    <Typography variant="h6" align="center" fontStyle={'italic'}> "Adult" </Typography>
                    <img src={images.getSample(task, num).adult} width={"100%"} alt="adult" style={{padding: 0}}/>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="h6" align="center" fontStyle={'italic'}> "Baby" </Typography>
                    <img src={images.getSample(task, num).baby} width={"100%"} alt="baby"/>
                </Grid>
            </Grid>
            <div style={{padding: "2rem 0"}}></div>
        </div>
    )
}