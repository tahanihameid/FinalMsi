import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/NavBar/NavBar";
import ZoneText from "../../components/Button/ZoneText";
import Box from "@mui/material/Box";
import Overall from "../../components/Performance/Overall";
import Main from "../../components/Insight/Main";

function feed() {
  return (
    <Box style={{ marginLeft: "105px", marginRight: "20px" }}>
      <NavBar />
      <ZoneText />
      <Overall />
      <Main />
    </Box>
  );
}

export default feed;
