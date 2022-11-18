import React, { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useState } from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Stack } from "@mui/system";

const CardEl = params => {      //params = joke json

    console.log("CardEl::params: " + JSON.stringify(params.jokes));
    const [value, setValue] = useState("DEFAULT");
    const [isLiked, setIsLiked] = useState(false);
    

    // useLayoutEffect(() => {
    //     updateValues(value);
    // }, [value]);

    function updateValues(newValues) {

        console.log("Updated values: " + newValues);
        setValue(newValues);
    };

    function updateLiked() {
        const val = !isLiked;
        setIsLiked(val);
    };

    return(
        <Grid item key = {params.jokes.id} xs = {12} sm = {8} md = {6}>
            <Card size = "lg" sx = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <CardMedia image = "https://source.unsplash.com/random" title = "imagetitle"/>      {/* image not showing, needs to implement it in theme */}
                <CardContent>
                    <Stack direction = "row" spacing={10}>
                        <Typography gutterBottom variant="h5">{value}</Typography>
                        {
                            isLiked === false ?
                            <Button size = "lg" onClick={updateLiked}>
                                <FavoriteBorder />
                            </Button> 
                            : 
                            <Button size = "lg" onClick={updateLiked}>
                                <Favorite />
                            </Button>
                        }
                    </Stack>
                    <Typography>{JSON.stringify(params.jokes)}</Typography>
                </CardContent>
                <CardActions>
                    <Button size = "small" color = "primary">Like</Button>
                    <Button size = "small" color = "error">Remove from favourites</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardEl;

//this will represent each joke object

//consider using for joke: https://mui.com/material-ui/react-textarea-autosize/