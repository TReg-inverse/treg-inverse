import { Grid, Typography } from "@mui/material";
import { Component } from "react";
import { PlainText } from "../components/TextBlocks";

const images = {
    measure: require('../figures/uncertain_measure.png'),
    umap_no: require('../figures/uncertain_notreg.png'),
    umap: require('../figures/uncertain_treg.png'),
    sample_no: require('../figures/sample_notreg.png'),
    sample: require('../figures/sample_treg.png'),
};


export default class Result1 extends Component{
    render(){
        return (
            <div>
                <Typography variant="h4">
                    Ambituity reduction
                </Typography>
                
                <Grid container spacing={1} alignItems="center" style={{padding: "2rem 0"}}>
                    <Grid item xs={8} sm={4}>
                        <Typography variant="h6" align="center"> Measurement </Typography>
                    </Grid>
                     <Grid item xs={8} sm={4}>
                        <Typography variant="h6" align="center"> Uncertainty w/o TReg </Typography>
                    </Grid>
                     <Grid item xs={8} sm={4}>
                        <Typography variant="h6" align="center"> Uncertainty w/ TReg </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <img src={images.measure} width={"100%"} alt="measurement"/>
                    </Grid>
                     <Grid item xs={8} sm={4}>
                        <img src={images.umap_no} width={"100%"} alt="uncertain_notreg"/>
                    </Grid>
                     <Grid item xs={8} sm={4}>
                        <img src={images.umap} width={"100%"} alt="uncertain_treg"/>
                    </Grid>

                    <Grid item xs={8} sm={4}>
                        <Typography variant="h6" align="center" fontStyle={"italic"}> "a photography of bear" </Typography>
                    </Grid>
                     <Grid item xs={8} sm={4}>
                        <img src={images.sample_no} width={"100%"} alt="sample_notreg"/>
                    </Grid>
                     <Grid item xs={8} sm={4}>
                        <img src={images.sample} width={"100%"} alt="sample_treg"/>
                    </Grid>
                </Grid>

                <PlainText text={"The upper figure shows the uncertainty map of the reconstruction, defined as pixel-wise standard deviations.\
                                  Without TReg, diffusion prior randomly reconstruct images according to measurement.\
                                  In contrast, TReg can fix the reconstructed image using text prompt."}/>
            </div>
        )
    }
}