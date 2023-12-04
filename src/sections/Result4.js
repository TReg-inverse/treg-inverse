import { Box, Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useState } from 'react';

function preload(img) {
    let loaded = new Image();
    loaded.src = img;
    return loaded
}

const images = {
    blur:{
        measure: preload(require('../figures/food/food-blur-measure.png')),
        1: preload(require('../figures/food/food-blur-1.png')),
        2: preload(require('../figures/food/food-blur-2.png')),
        3: preload(require('../figures/food/food-blur-3.png')),
        4: preload(require('../figures/food/food-blur-4.png')),
        5: preload(require('../figures/food/food-blur-5.png')),
        6: preload(require('../figures/food/food-blur-6.png')),
        7: preload(require('../figures/food/food-blur-7.png')),
        8: preload(require('../figures/food/food-blur-8.png')),
        9: preload(require('../figures/food/food-blur-9.png')),
        10: preload(require('../figures/food/food-blur-10.png')),
    },
    sr:{
        measure: preload(require('../figures/food/food-sr-measure.png')),
        1: preload(require('../figures/food/food-sr-1.png')),
        2: preload(require('../figures/food/food-sr-2.png')),
        3: preload(require('../figures/food/food-sr-3.png')),
        4: preload(require('../figures/food/food-sr-4.png')),
        5: preload(require('../figures/food/food-sr-5.png')),
        6: preload(require('../figures/food/food-sr-6.png')),
        7: preload(require('../figures/food/food-sr-7.png')),
        8: preload(require('../figures/food/food-sr-8.png')),
        9: preload(require('../figures/food/food-sr-9.png')),
        10: preload(require('../figures/food/food-sr-10.png')),
    },
}

const prompts = {
    blur: [
        'Penne pasta',
        'Waffle',
        'Pizza',
        'Tacos',
        'Macaron',
        'Jelly beans',
        'Cheese platter',
        'Shrimp',
        'Spaghetti',
        'No Treg'
    ],
    sr: [
        'Pine cones',
        'Whole grain pasta',
        'Baked beans',
        'Granola',
        'Pumpernickel bread',
        'Chocolate',
        'Cherry muffin',
        'Pecans',
        'cookies',
        'No Treg'
    ],
}

export default function Result4 () {
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
                Reconstruction with multiple prompts
            </Typography>

            <Box style={{display: "flex", justifyContent: "center", padding:"2rem 0"}}>
            <ToggleButtonGroup 
                color="error" 
                value={task}
                aria-label="outlined primary button group">
                <ToggleButton value='sr' onClick={() => changeTask('sr')}>Super-resolution (x16)</ToggleButton>
                <ToggleButton value='blur' onClick={() => changeTask('blur')}>Deblur (Gauss)</ToggleButton>
            </ToggleButtonGroup>
            </Box>

            <Grid container spacing={1} alignItems="center">
                <Grid item sm={6}> <Typography variant='subtitle1' align='center'>Measurement</Typography></Grid>
                <Grid item sm={6}> <Typography variant='subtitle1' align='center'>Reconstruction</Typography></Grid>

                <Grid item sm={6}>
                    <img src={images[task].measure} width={"100%"} alt="measurement"/>
                </Grid>
                <Grid item sm={6}>
                    <img src={images[task][num]} width={"100%"} alt="reconstruction"/>
                </Grid>
                <Grid item display={'flex'}>
                    <Grid container display={'flex'} flexWrap={'wrap'} justifyContent={'space-evenly'}>
                    {prompts[task].map((prompt, i)=>(
                        <Grid item xs={6} sm={4} padding={'1rem'}>
                        <Typography 
                            className='clickable-text'
                            align='center'
                            variant='h5'
                            value={i+1}
                            onClick={() => changeNum(i+1)}
                            style={{fontStyle:'italic',
                                    fontWeight: (num===i+1)? 'bold':'normal',
                                    color: (num===i+1)? 'lightcoral':'lightgray' }}>
                                "{prompt}"
                        </Typography>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
