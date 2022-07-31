import { makeStyles, Container, Box, Typography, Grid, ListItem, List, Avatar, Link } from '@material-ui/core';
import {contact, Mohammad, awards, sideBarContents, name, designation, proSummary, workExperiance, education} from "../data/fayaz"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react';

const useStyles = makeStyles(()=>({
    container: {
        display: "flex",
        height: "100%",
        margin:0,
        padding:0
    },
    box1:{
        width:"30vw",
        background: "#001e6f !important",
        height:"100%",
        padding: "2rem",
        // paddingBottom: "5rem",
        color:"#000 !important"
    },
    box2:{
        width: "70vw",
        height:"100%",
        padding: "2rem",
        // margin: "auto"
    },
    innerContainer:{
        padding: "0.9rem 0 1.2rem 0"
    },
    flexWrap:{
        flexWrap: "nowrap",
        // padding: "0.5rem 0"
    },
    sideHeadingColor:{
        color:"#ececec !important"
    },
    imgStyles:{
        width: 200,
        margin: "auto",
        height:200,
        marginBottom: "1rem"
    },
    textAlignCenter:{
        textAlign: 'center'
    }
}));

const Resume = React.forwardRef((props, ref) => {

  const classes = useStyles();
  return (
    <Container ref={ref} m={0} className={classes.container}>
        <Box className={classes.box1}>
            <Avatar className={classes.imgStyles} alt="img" src={Mohammad} />
            
            <Grid container className={classes.innerContainer} direction={"column"}>
                <Grid item>
                <Typography className={classes.sideHeadingColor} variant='h5'>Contact</Typography>

                </Grid>

                {contact.map((item,i)=>(
                    <Grid container item className={classes.flexWrap} alignItems="center">
                        <Typography style={{padding: "0 10px"}} variant="body1">{item.icon}</Typography>
                        {i==2 ? <Link target="_blank" style={{color:"#fff", display:"block", fontSize:"0.8rem", wordBreak: "break-all;", textDecoration: "underline"}} href={item.text}>{item.text}</Link> :<Typography style={{padding: "0 10px", wordBreak: "break-all;"}} variant="body1">{item.text}</Typography>}
                    </Grid>
                ))
                }
            </Grid>
            {sideBarContents.map(item=>(
            <Grid container className={classes.innerContainer} direction={"column"}>
                    <Grid item className={classes.flexWrap} alignItems="center">
                        <Typography className={classes.sideHeadingColor} variant="h5">{item.title}</Typography>
                    </Grid>
                    <Grid item>
                    <ul>
                        {item.list.split(', ').map(item1=>(
                            <li style={{color:"#d3d3d3"}}><Typography style={{padding: "0 10px"}} variant='body1'>{item1}</Typography></li>
                        ))}
                    </ul>
                    </Grid>
            </Grid>
            ))}
            <Grid container className={classes.innerContainer} direction={"column"}>
            <Grid item>
            <Typography className={classes.sideHeadingColor} variant='h5'>Awards</Typography>

            </Grid>
                        
                {awards.map(item=>(
                    <Grid container item className={classes.flexWrap} alignItems="center">
                        <Typography style={{padding: "0 10px"}} variant="body1">{item.icon}</Typography>
                        <Typography style={{padding: "0 10px"}} variant="body1">{item.text}</Typography>
                    </Grid>
                ))
                }
            </Grid>
        </Box>
        <Grid container className={classes.box2} direction="column" alignItems='center'>
            <Grid item>
                <Typography /*contentEditable="true"*/ className={classes.textAlignCenter}  variant='h2'>{name}</Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.textAlignCenter} variant='h4'>{designation}</Typography>
            </Grid>
            <Grid item container direction='column'>
                <Typography variant='h6'>Professional Summary</Typography>
                <ul>
                    {proSummary.split('\n').map(sum=>(
                        <li style={{color:"#434343"}}><Typography variant='caption'>{sum}</Typography></li>
                    ))}
                </ul>
            </Grid>
            <Grid item container direction='column'>
                <Typography variant='h6'>Work Experience</Typography>
                {workExperiance.map(work=>(
                    <>
                    <Typography variant='subtitle1'>{work.designation}</Typography>
                    <Typography variant='subtitle2'>{work.duration}</Typography>
                        <ul style={{marginBottom: "0.5rem"}}>
                            {work.contribution.split('\n').map(sum=>(
                                <li style={{color:"#434343"}}><Typography variant='caption'>{sum}</Typography></li>
                        ))}
                        </ul>
                    </>
                ))}
            </Grid>
            <Grid item container direction='column'>
                <Grid item>
                <Typography variant='h6'>Education History</Typography>
                    
                </Grid>
                
                <Grid item>

                
                {education.map(edu=>(
                    <>
                    <Typography variant='subtitle1' style={{marginTop: "10px"}}>{edu.standard}</Typography>
                    <Typography variant='subtitle2'>{edu.institution}</Typography>
                    <ul>
                        <li style={{color:"#434343"}}>
                            <Typography variant='caption'>Percentage : {edu.percentage}</Typography>
                        </li>
                    </ul>
                    </>
                ))}
                </Grid>
            </Grid>
        </Grid>
    </Container>
  )
})

export default Resume;
