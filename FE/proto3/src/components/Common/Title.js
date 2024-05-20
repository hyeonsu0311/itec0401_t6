import * as React from "react";
import { Typography } from "@mui/joy";

export default function Title({title}) {

    return (
        <Typography
        color="neutral"
        level="h1"
        noWrap
        variant="plain" sx={{ margin: '20px'}}>
        { title }
        </Typography>
    );
}