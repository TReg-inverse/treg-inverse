import { Typography } from "@mui/material";


function License() {
    return (
        <a rel="license"
           style={{color: "#006699", textDecoration: "none",}}
           href="http://creativecommons.org/licenses/by-sa/4.0/">
           Creative Commons Attribution-ShareAlike 4.0 International License</a>
    )
}

function Source() {
    return (
        <a rel="code"
           style={{color: "#006699", textDecoration: "none",}}
           href=".">
           source code </a>
    )
}

function Footer() {
    return (
        <div className="footer" style={{padding:'3rem'}}>
        <Typography variant="subtitle1" align="center" style={{margin: '0 15%'}}>
          <p>
            This website is licensed under a <License />.
          </p>
          <p>
            This means you are free to borrow the <Source /> of this website,
            we just ask that you link back to this page in the footer.
            Please remember to remove the analytics code included in the header of the website which
            you do not want on your website.
          </p>
         </Typography>
        </div>
    )
}

export default Footer