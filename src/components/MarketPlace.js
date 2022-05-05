import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Eastern from "../images/Eastern.png";
const useStyles = makeStyles(() => ({
    contentBgColor:{
        backgroundColor:'#f5f9ff'
    },
    contentPadding:{
        padding:'4rem'
    },
    commaStyles:{
        color: '#01b551',
        transform: 'scale(1, -1)'
    },
    contentBorder:{
        borderLeft: '1px dotted #dadadb'
    },
    containerPadding:{
        padding : '0 2rem;'
    }
}))
const dummyContent = [
    {
        message:'Iam satisfied with WeTruck service and support process, delivery process is also very smooth, I will definitely use this service again in future.',
        companyName: 'Company Name',
        imagePath: Eastern
    },
    {
        message:'Iam satisfied with WeTruck service and support process, delivery process is also very smooth, I will definitely use this service again in future.',
        companyName: 'Company Name',
        imagePath: Eastern
    },
    {
        message:'Iam satisfied with WeTruck service and support process, delivery process is also very smooth, I will definitely use this service again in future.',
        companyName: 'Company Name',
        imagePath: Eastern
    },
];
const MarketPlace = () => {
    const classes = useStyles();
    return (
        <div className={`${classes.contentBgColor} ${classes.contentPadding}`}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Grid item>
                            <Typography variant="h4">
                                We're India's favorite online transport marketplace
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                See what our customers say about us
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                    {dummyContent.map((item, index) =>{
                        return ( 
                            <Grid item xs={12} md={4} className={index==0? classes.containerPadding: `${classes.contentBorder} ${classes.containerPadding}`}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <Typography variant="h1" className={classes.commaStyles}>‟</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1">{item.message}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <Avatar><img width="75%" src={Eastern} /></Avatar>
                                            </Grid>
                                            <Grid item className={classes.contentBorder}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                        <Typography variant="body1">Name</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="caption">{item.companyName}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    );
}
 
export default MarketPlace;