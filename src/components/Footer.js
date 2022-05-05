import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";
import GooglePlay from "../images/GooglePlay.png";
import AppStore from "../images/AppStore.png";
import ViewListIcon from "@material-ui/icons/ViewList";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const useStyles = makeStyles((theme) => ({
  footerStyles: {
    padding: "3rem",
    background: "#000",
    color: "#a7a7a7",
  },
  imageWidth: {
    width: "12%",
  },
  paraMargin: {
    margin: "2rem 0",
  },
  leftBorder: {
    borderLeft: "1px dotted #a7a7a7",
    [theme.breakpoints.down("sm")]: {
        borderLeft: 'none',
    },
  },
  bottomBorder: {
    borderBottom: "1px dotted #a7a7a7",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footerStyles}>    
        <Grid container direction="column" spacing={3}>
            <Grid item>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} className={classes.bottomBorder}>
                        <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <Typography variant="body1">WeTrck</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" className={classes.paraMargin}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                            <ViewListIcon />
                            Meeran
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}
                        className={`${classes.bottomBorder} ${classes.leftBorder}`}
                    >
                        <Typography variant="body1">Useful links</Typography>
                        <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Typography variant="body2">Home</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                            How Wetruck Truck Features
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">Why To Choose</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">Blog</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">Career</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">Policies</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">Awards</Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        className={`${classes.bottomBorder} ${classes.leftBorder}`}
                    >
                        <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <Typography variant="body1">Download our apps</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                            <img className={classes.imageWidth} src={GooglePlay} />
                            <img className={classes.imageWidth} src={AppStore} />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">Contacts</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                            <Grid item>
                                <Typography variant="caption">
                                Phone-+91 984 690 6596
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                Email:info@shipnext.in
                                </Typography>
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography variant="caption">Follow us:</Typography>
                            </Grid>
                            <Grid item>
                                <FacebookIcon />
                            </Grid>
                            <Grid item>
                                <InstagramIcon />
                            </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="caption">
                    Copyright&#169;WeTruck - All Rights Reserved.
                </Typography>
            </Grid>
        </Grid>
    </footer>
  );
}

export default Footer;
