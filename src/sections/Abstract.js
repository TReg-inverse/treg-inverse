import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import ReactCompareImage from "react-compare-image";
import { PlainText } from "../components/TextBlocks";


/* Motivation, Results (Measurement, x / Ax slide?)*/


const images = {
    measure: require('../figures/sr-mart-01.png'),
    recon1: require('../figures/sr-mart-01-kfc.png'),
    down1: require('../figures/sr-mart-01-kfc-down.png'),
    recon2: require('../figures/sr-mart-01-pizza.png'),
    down2: require('../figures/sr-mart-01-pizza-down.png'),
    };

export default class Abstract extends Component{
    render(){
        return (
            <div align={"center"} style={{paddingTop: "5rem"}}>
                <Typography variant="h4">
                    Abstract
                </Typography>

                <Grid container spacing={1} style={{padding: "2rem 0"}}>
                    <Grid item xs={8} sm={4}>
                        <Typography variant="h5" > Measurement </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <Typography variant="h5" fontStyle={"italic"}> "KFC" </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <Typography variant="h5" fontStyle={"italic"}> "Pizza" </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <img src={images.measure} width={"100%"} alt="measurement"/>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <ReactCompareImage leftImage={images.down1} rightImage={images.recon1} sliderPositionPercentage={0.3}/>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <ReactCompareImage leftImage={images.down2} rightImage={images.recon2} sliderPositionPercentage={0.3}/>
                    </Grid>
                </Grid>
                <Typography variant="h6"><span style={{fontWeight:"bold"}}>TL;DR</span> We introduce a novel latent diffusion inverse solver by incorporating</Typography>
                <Typography variant="h5" style={{color: "lightcoral", fontWeight: "bold"}}>regularization by texts: <span style={{fontStyle:"italic"}}>TReg</span></Typography>
                <PlainText text={"The upper figure is one reconstruction example of the proposed method. \
                                  For super-resolution (x16) task, we can control the reconstruction by leveraging text prompts. \
                                  Importantly, the solutions retain the data-consistency with given measurement. \
                                  See and compare overlayed downsampled images for each solution. \
                                  We call this concept as inverse problem solving with text regularization."} 
                            />
                {/* break all? */}
            </div>
        )
    }
}