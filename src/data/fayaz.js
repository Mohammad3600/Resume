import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import Mohammad from "../images/Fayaz.jpeg";

const contact = [
    {
        icon: <MailIcon />,
        text: "fayazsunnu555@gmail.com"
    },
    {
        icon: <PhoneIcon />,
        text: "+91 7981395053"
    },
    {
        icon: <LinkedInIcon />,
        text: "https://www.linkedin.com/in/fayaz-shaik-550729153/"
    }
];

const awards = [
    {
        icon: <TurnedInIcon />,
        text: "Customer Expert, CGI",
    },
    {
        icon: <TurnedInIcon />,
        text: "Integrity and Objectivity, CGI",
    },
    {
        icon: <TurnedInIcon />,
        text: "Bronze Awardee for Quarter1 and Quarter2 in 2022, CGI",
    }
    
]

const sideBarContents = [
    {
        title: "Professional Summary-Proficient",
        list: "SharePoint Development, JavaScript, HTML5, CSS, Powershell"
    },
    {
        title: "Professional Summary-Exposure",
        list: "Agile, Scrum, GIT, JIRA"
    },
    {
        title: "Interests",
        list: "Cricket, Combat sports, Fitness and Athletic Activities"
    },
    {
        title: "Languagues",
        list: "English, Telugu, Hindi"
    }

];

const name="Fayazulla Shaik"
const designation = "Associative Software Engineer";
const proSummary = `2.0+ years of experience in building web applications.
Proficient in translating designs and wireframes into high-quality code, and writing application interface code via Javascript and ReactJS
Worked in scrum teams.
Excellent code debugging skills.
Excellent analytical, problem-solving skills and self-motivated. Ability to adopt new technologies swiftly.`;

const workExperiance = [
    {
        designation: "Associative Software Engineer | Front End Developer",
        duration: "CGI | August 2020 - present",
        contribution: `Developed Staff login pages in SharePoint Sites using Javascipt ,HTML and CSS
            Worked on Automated Tools which collects data from the members and Process through different Stages of Approval.
            Worked on Powershell scripting for mailing functionalities and crud operations
            Rest API for Data Collection 
            Fixing critical Prod Defects.`
    }
   
];

const education = [
    {
        standard: "Bachelor Technologies in Computer Science",
        institution: "Sri Venkateswara college of Engineering and Technology | 2016-2020",
        percentage: "74.7%"
    },
    {
        standard: "Intermediate Education",
        institution: "Srinivasa Junior College | 2014-2016",
        percentage: "92.6%"
    },
    {
        standard: "Secondary Education",
        institution: "Sujith Vidyalaya High School | 2013-2014",
        percentage: "95%"
    },
]

export {contact, awards, sideBarContents, name, designation, proSummary, workExperiance, education, Mohammad};