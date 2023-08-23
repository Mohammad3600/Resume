import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TurnedInIcon from '@material-ui/icons/TurnedIn';

const path="salma";
const contact = [
    {
        icon: <MailIcon />,
        text: "salmakhanum726@gmail.com"
    },
    {
        icon: <PhoneIcon />,
        text: "+91 9844423203"
    },
    {
        icon: <LinkedInIcon />,
        text: "https://www.linkedin.com/in/salma-khanum-1151121b5/",
        val: 2,
    }
];


const sideBarContents = [
    {
        title: "Professional Summary-Proficient",
        list: "React JS, JavaScript, HTML5, CSS, Responsive Design, Materail-ui"
    },
    {
        title: "Professional Summary-Exposure",
        list: "Agile, Scrum, GIT, JIRA"
    },
    {
        title: "Interests",
        list: "Web Development, Watching Movies, Cooking"
    },
    {
        title: "Languagues",
        list: "English, Kannada, Hindi"
    }

];

const name="Salma Khanum"
const designation = "Associate Software Enginerr";
const proSummary = `1.7+ years Web Developer with a strong foundation in front-end .
Mastery of HTML5, CSS3, and JavaScript to create responsive and visually appealing user interfaces. 
Proficient in using Git for code versioning and collaboration, ensuring efficient teamwork and streamlined code management.
Worked in scrum teams.
Excellent analytical, problem-solving skills and self-motivated. Ability to adopt new technologies swiftly.`;

const workExperiance = [
    {
        designation: "Associate Software Engineer | Front End Developer",
        duration: "Tricon Infotech | Octobar 2021 - May 2023",
        contribution: `Designed responsiveness UI in the Toorak application.
            Created reusable table component which will have options to add, remove, sort column and pagination.
            Created custom hooks and created so many reusable components.
            Contributed with other teammates for making their work faster.`
    },
    
];

const awards = [
    {
        icon: <TurnedInIcon />,
        text: "1 Spot Award - Tricon Infotech"
    }
]

const education = [
    {
        standard: "Bachelor Technologies in Computer Science",
        institution: "JSSATB in bangalore| 2015-2019",
    },
    {
        standard: "Intermediate Education",
        institution: "Kasturiba girls pre university college | 2013-2014",
    },
    {
        standard: "Secondary Education",
        institution: "Giri deepam english highschool | 2012-2013",
    },
]

const Image = null;
export default {contact, awards, path, sideBarContents, name, designation, proSummary, workExperiance, education, Image};