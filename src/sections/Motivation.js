import { Typography } from "@mui/material";
import { Component } from "react";
import { PlainText } from "../components/TextBlocks";


export default class Motivation extends Component{
    render(){
        return (
           <div align={"center"} style={{padding: "4rem 0"}}>
                <Typography variant="h4">
                    Motivation
                </Typography>
                <div style={{margin: '2rem'}}></div>
                <img src={require('../figures/motivation-middle.gif')} width={"70%"} alt="motivation"/>
                <PlainText text={
                    "Human beings are capable of solving inverse problems \
                     by leveraging their prior knowledge. \
                     Specifically, human interpretations are aligned with \
                     pre-existing beliefs, leading to confirmation bias. \
                     Although, the multiple regularization techniques have been \
                     extensively stuided to address the ambiguity (i.e. ill-posedness), \
                     there is no equivalent mechanism applies those 'preconceptions'. \
                     \
                     Hence, we introduce a novel concept of regularization by texts and \
                     propose a generic LDM inverse problem solver to utilize it."}/>
            </div>
        )
    }
}