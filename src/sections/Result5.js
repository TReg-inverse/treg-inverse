import { Grid, Typography } from "@mui/material";
import { useState } from "react";


const images ={
    cat:{
        sample4: {
            measure: require('../figures/box/box-cat-1.png'),
            1: require('../figures/box/box-cat-1-1.png'),
            2: require('../figures/box/box-cat-1-2.png'),
            3: require('../figures/box/box-cat-1-3.png'),
        },
        sample2: {
            measure: require('../figures/box/box-cat-2.png'),
            1: require('../figures/box/box-cat-2-1.png'),
            2: require('../figures/box/box-cat-2-2.png'),
            3: require('../figures/box/box-cat-2-3.png'),
        },
        sample3: {
            measure: require('../figures/box/box-cat-3.png'),
            1: require('../figures/box/box-cat-3-1.png'),
            2: require('../figures/box/box-cat-3-2.png'),
            3: require('../figures/box/box-cat-3-3.png'),
        },
        sample1: {
            measure: require('../figures/box/box-cat-4.png'),
            1: require('../figures/box/box-cat-4-1.png'),
            2: require('../figures/box/box-cat-4-2.png'),
            3: require('../figures/box/box-cat-4-3.png'),
        },
    },
    dog:{
        sample1: {
            measure: require('../figures/box/box-dog-1.png'),
            1: require('../figures/box/box-dog-1-1.png'),
            2: require('../figures/box/box-dog-1-2.png'),
            3: require('../figures/box/box-dog-1-3.png'),
        },
        sample2: {
            measure: require('../figures/box/box-dog-2.png'),
            1: require('../figures/box/box-dog-2-1.png'),
            2: require('../figures/box/box-dog-2-2.png'),
            3: require('../figures/box/box-dog-2-3.png'),
        },
        sample3: {
            measure: require('../figures/box/box-dog-3.png'),
            1: require('../figures/box/box-dog-3-1.png'),
            2: require('../figures/box/box-dog-3-2.png'),
            3: require('../figures/box/box-dog-3-3.png'),
        },
        sample4: {
            measure: require('../figures/box/box-dog-4.png'),
            1: require('../figures/box/box-dog-4-1.png'),
            2: require('../figures/box/box-dog-4-2.png'),
            3: require('../figures/box/box-dog-4-3.png'),
        },
    }
}

function ImageGrids (props) {
    const [num, setNum] = useState(1);

    return (
            <Grid container spacing={1} style={{padding: '2rem 0'}}>
                <Grid item sm={3}>
                    <Typography variant="subtitle1" align='center'>Measurement</Typography>
                    <Grid container>
                        <Grid item sm={6} onClick={()=>setNum(1)}>
                            <img className='clickable-img'
                                 src={images[props.target]['sample1']['measure']}
                                 width={"100%"} alt="input"
                                 style={{opacity: num===1 ? 1.0 : 0.5}}
                                 />
                        </Grid>
                        <Grid item sm={6} onClick={()=>setNum(2)}>
                            <img className='clickable-img'
                                 src={images[props.target]['sample2']['measure']}
                                 width={"100%"} alt="input"
                                 style={{opacity: num===2 ? 1.0 : 0.5}}
                                 />
                        </Grid>
                        <Grid item sm={6} onClick={()=>setNum(3)}>
                            <img className='clickable-img'
                                 src={images[props.target]['sample3']['measure']}
                                 width={"100%"} alt="input"
                                 style={{opacity: num===3 ? 1.0 : 0.5}}
                                 />
                        </Grid>
                        <Grid item sm={6} onClick={()=>setNum(4)}>
                            <img className='clickable-img'
                                 src={images[props.target]['sample4']['measure']}
                                 width={"100%"} alt="input"
                                 style={{opacity: num===4 ? 1.0 : 0.5}}
                                 />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="subtitle1" align='center'>No Treg</Typography>
                    <img src={images[props.target]['sample'+num][1]} width={"100%"} alt="input"/>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="subtitle1" align='center'>{props.prompt[0]}</Typography>
                    <img src={images[props.target]['sample'+num][2]} width={"100%"} alt="input"/>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="subtitle1" align='center'>{props.prompt[1]}</Typography>
                    <img src={images[props.target]['sample'+num][3]} width={"100%"} alt="input"/>
                </Grid>
            </Grid>
    )
}

export default function Result5 () {
    return (
        <div style={{padding: '2rem 0'}}>
            <Typography variant="h4">
                Box inpainting
            </Typography>

            <ImageGrids target='dog' prompt={['"Glasses"', '"Sleeping dog"']}/>
            <ImageGrids target='cat' prompt={['"Blue eyes"', '"Green eyes"']}/>

        </div>
    )
}