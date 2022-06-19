import { makeStyles, Container, Box, Typography, Grid, ListItem, List, Avatar, Link } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Mohammad from "../images/Mohammad.jpg";
import React from 'react';

const useStyles = makeStyles(theme=>({
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

const contact = [
    {
        icon: <MailIcon />,
        text: "mohammadvempalli@gmail.com"
    },
    {
        icon: <PhoneIcon />,
        text: "+91 7780570205"
    },
    {
        icon: <LinkedInIcon />,
        text: "https://www.linkedin.com/in/mohammad-vempalli-9b8765185/"
    }
];

const awards = [
    {
        icon: <TurnedInIcon />,
        text: "Customer Expert, ACS Solutions"
    }
]


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
                <Typography className={classes.textAlignCenter}  variant='h2'>{name}</Typography>
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
                <Typography variant='h6'>Education History</Typography>
                {education.map(edu=>(
                    <>
                    <Typography variant='subtitle1' style={{marginTop: "10px"}}>{edu.standard}</Typography>
                    <Typography variant='subtitle2'>{edu.institution}</Typography>
                    <ul>
                        <li tyle={{color:"#434343"}}>
                            <Typography variant='caption'>Percentage : {edu.percentage}</Typography>
                        </li>
                    </ul>
                    </>
                ))}
            </Grid>
        </Grid>
    </Container>
  )
})

const sideBarContents = [
    {
        title: "Professional Summary-Proficient",
        list: "React JS, JavaScript, Redux, HTML5, CSS, Responsive Design, Bootstrap, Materail-ui, Styled-components, Jest"
    },
    {
        title: "Professional Summary-Exposure",
        list: "Agile, Scrum, Node JS, PHP, GIT, JIRA"
    },
    {
        title: "Interests",
        list: "Web Development, Full-Stack, Playing Video Games"
    },
    {
        title: "Languagues",
        list: "English, Telugu, Hindi"
    }

];

const name="Mohammad Vempalli"
const designation = "Software Engineer";
const proSummary = `2.5+ years of experience in building Responsive web applications.
Proficient in translating designs and wireframes into high-quality code, and writing application interface code via Javascript and ReactJS
Proven track record of building reusable components.
Experienced in Full-stack development.
Worked in scrum teams.
Excellent code debugging skills.
Excellent analytical, problem-solving skills and self-motivated. Ability to adopt new technologies swiftly.`;

const workExperiance = [
    {
        designation: "Software Development Consultant | Front End Developer",
        duration: "ITC Infotech | Febuary 2022 - present",
        contribution: `Developed Staff login pages in WHS website with React
            Developed highly reusable responsive components.
            Created reusable Address Typeahead component which is used across multiple pages on WHS's app.
            Integrated Redux throughout the Application
            Integrated all APIS using Redux-thunk.
            Fixing critical Prod Defects.`
    },
    {
        designation: "Associate Software Engineer | Front End Developer | Full Stack Developer",
        duration: "ACS Solutions | December 2019 - Febuary 2022",
        contribution: `Developed creation of opportunities and assigning resources to opportunities and display it front end in Pricing Sheet Application using React and Material UI.
        Integrated internal Analytics tool with react app with Event Driven Approach.
        Managed state throughout the application using Redux
        Implemented the addition of projects, where projects contains set of forms where we can add the project details and for one project we can add n number of concepts and where we can add details of concepts and displaying the concepts in Sustainable Minds Project.
        Created the complex type of tree structure for adding materials inside the concepts in Sustainable Minds Project.
        Developed the ThreeJS Mini car game for learning and development team. `
    }
];

const education = [
    {
        standard: "Bachelor Technologies in Computer Science",
        institution: "Madanapalle Institute Of Technology and Science | 2016-2020",
        percentage: "82.7%"
    },
    {
        standard: "Intermediate Education",
        institution: "Srinivasa Junior College | 2014-2016",
        percentage: "94.7%"
    },
    {
        standard: "Secondary Education",
        institution: "MJPAP School | 2013-2014",
        percentage: "88%"
    },
]
export default Resume;
