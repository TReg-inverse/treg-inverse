import { Typography } from "@mui/material";

const TREG = (props) => (
    <span style={{ fontStyle: "italic" }}>TReg</span>
);

/* TODO: 반응형 */
const PlainText = (props) => (
    <Typography variant="h6"
                align="justify"
                style={{ fontWeight: props.fontweight, padding: "2rem 0"}}>
        {props.text}
    </Typography>
);

const Colored = (props) => (
    <span style={{ color: "lightcoral", fontWeight: "bold" }}>{props.text}</span>
);

export { Colored, PlainText, TREG };

