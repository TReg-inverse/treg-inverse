import { Button, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { SiArxiv } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { LinkButton } from "../components/Buttons";

function Header () {
    const [show_ar, setShowAr] = useState(false);
    const [show_cd, setShowCd] = useState(false);
    const handleCloseCd = () => setShowCd(false);
    const handleCloseAr = () => setShowAr(false);

    return (
        <div align={"center"}>
            <Typography variant="h2" color={"lightcoral"}>
                Regularization by Texts <br/> for Latent Inverse Solvers
            </Typography>

            <span style={{padding: "1rem"}}>
                <Typography variant="h5">
                    Under review
                </Typography>
            </span>
            <div>
                <LinkButton link={"."} icon={<FaFilePdf />} text="Paper"/>
                <Button sx={{m: '0.3rem'}}
                        style={{
                            borderRadius: 35,
                            backgroundColor: "black",
                            padding: "0.5rem 1.0rem"
                        }}
                        variant="contained"
                        onClick={() => setShowAr(true)}
                        startIcon={<SiArxiv />}>
                        arxiv
                </Button>
                <Snackbar open={show_ar} 
                          maxWidth="lg"
                          fullWidth={true}
                          onClick={handleCloseAr}
                          message="The project is under review. Coming soon!"/>

                <Button sx={{m: '0.3rem'}}
                        style={{
                            borderRadius: 35,
                            backgroundColor: "black",
                            padding: "0.5rem 1.0rem"
                        }}
                        variant="contained"
                        onClick={() => setShowCd(true)}
                        startIcon={<VscGithub />}>
                    code
                </Button>
                <Snackbar open={show_cd} 
                          maxWidth="lg"
                          fullWidth={true}
                          onClick={handleCloseCd}
                          message="Coming soon!"/>
            </div>
        </div>
    );
}

export default Header;