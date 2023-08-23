import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import Image from "../images/Mohammad.jpg";

const path="mohammad";
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
        text: "https://www.linkedin.com/in/mohammad-vempalli-9b8765185/",
        val: 2,
    }
];

const awards = [
    {
        icon: <TurnedInIcon />,
        text: "Customer Expert, ACS Solutions"
    },
    {
        icon: <TurnedInIcon />,
        text: "3 Spot Awards - Tricon Infotech"
    }
]

const sideBarContents = [
    {
        title: "Professional Summary-Proficient",
        list: "React JS, JavaScript, Redux, HTML5, CSS, Responsive Design, Bootstrap, Materail-ui, Styled-components, Jest"
    },
    {
        title: "Professional Summary-Exposure",
        list: "Agile, Scrum, Node JS, Express, MongoDB, PHP, GIT, JIRA"
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
const proSummary = `3.7+ years of experience in building Responsive web applications.
Proficient in translating designs and wireframes into high-quality code, and writing application interface code via Javascript and ReactJS
Proven track record of building reusable components.
Experienced in Full-stack development.
Worked in scrum teams.
Excellent code debugging skills.
Quick learner and ready to take challenges.
Excellent analytical, problem-solving skills and self-motivated. Ability to adopt new technologies swiftly.`;

const workExperiance = [
    {
        designation: "Software Engineer | Front End Developer",
        duration: "Tricon Infotech | July 2022 - present",
        contribution: `Designed Entire responsiveness UI in the Leadzone application.
            Created reusable table component which will have options to add, remove, sort column and pagination.
            Created custom hooks and created so many reusable components.
            Learnt the Playwright automation tool and have written automation testcases throughout the application.
            Mentoring team members for their approach and best practices.
            Given guidance to other team for their issues.`
    },
    {
        designation: "Software Development Consultant | Front End Developer",
        duration: "ITC Infotech | Febuary 2022 - July 2022",
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

export default {contact, awards, path, sideBarContents, name, designation, proSummary, workExperiance, education, Image};