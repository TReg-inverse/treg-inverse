import { Grid, Typography } from "@mui/material";

function preload(img) {
    let loaded = new Image();
    loaded.src = img;
    return loaded
}
const images = {
    measure: preload(require('../figures/face-inp/face-inp-measure.png')),
    recon:[
    preload(require('../figures/face-inp/face-inp-1.png')),
    preload(require('../figures/face-inp/face-inp-2.png')),
    preload(require('../figures/face-inp/face-inp-3.png')),
    '',
    preload(require('../figures/face-inp/face-inp-4.png')),
    preload(require('../figures/face-inp/face-inp-5.png')),
    preload(require('../figures/face-inp/face-inp-6.png')),
    '',
    preload(require('../figures/face-inp/face-inp-7.png')),
    preload(require('../figures/face-inp/face-inp-8.png')),
    preload(require('../figures/face-inp/face-inp-9.png')),
    ]
}

const prompt = [
    '"smile"',
    '"sad"',
    '"neutral"',
    '',
    '"smile + closed eyes"',
    '"sad + closed eyes"',
    '"neutral + closed eyes"',
    '',
    '"smile + glasses"',
    '"sad + glasses"',
    '"neutral + glasses',
]


export default function Result6 () {
    return (
        <div style={{padding:'2rem 0'}}>
        <Typography variant="h4">
            Box inpainting with concept composition
        </Typography>

        <Grid container spacing={1} alignItems="center" style={{padding: "2rem 0"}}>
            <Grid item sm={3}>
                <Typography variant="subtitle1" align="center">Measurement</Typography>
                <img src={images.measure} width={"100%"} alt="measurement"/>
            </Grid>
            {images.recon.map((image, i) => (
                    ([1,2,3,5,6,7,9,10,11].includes(i+1))
                    ?
                        (<Grid item sm={3}>
                            <Typography variant="subtitle1" align="center">{prompt[i]}</Typography>
                            <img src={image} width={"100%"} alt={"recon"+i}/>
                        </Grid>)
                    : (
                        <Grid item sm={3}>
                            <div></div>
                        </Grid>
                    )
                ))}
        </Grid>
        </div>
    )
}