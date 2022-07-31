import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import Mohammad from "../images/Basiri.jpg";

const path = "basiri"

const contact = [
    {
        icon: <MailIcon />,
        text: "basirivempalli@gmail.com"
    },
    {
        icon: <PhoneIcon />,
        text: `+91 7989887212`
    },
    {
        icon: <PhoneIcon />,
        text: "+91 8330904971"
    },
    {
        icon: <LinkedInIcon />,
        text: "https://www.linkedin.com/in/basiri-v-94640516a/",
        val: 3,
    }
];

const awards = [
    {
        icon: <TurnedInIcon />,
        text: "3 spot Awards, Ip Infusion"
    }
]

const sideBarContents = [
    {
        title: "Professional Summary-Proficient",
        list: "Spirent, Ixia, Wireshark, Putty, MobaXterm"
    },
    {
        title: "Professional Summary-Exposure",
        list: "GIT, JIRA, Jenkins, Basic Python, ROBOT Framework"
    },
    {
        title: "Interests",
        list: "Layer-2/Layer-3 features, MPLS, Automation"
    },
    {
        title: "Languagues",
        list: "English, Telugu, Hindi"
    }

];

const name="Basiri Vempalli"
const designation = "Senior Software Engineer";
const proSummary = `Test Engineer with 3 years 10 months of experience in manual, automation and regression testing of networking products. Experienced in Routing and Switching Technologies and worked extensively with Layer2, Layer3 and MPLS features.
Good understanding on OSI layers and TCP/IP protocols.
Good understanding of Functionality, packet structure and protocol transactions for IP, ARP, VLAN, STP, RSTP ICMP, TCP, UDP, SSH.
Have worked on MPLS features (LDP, L3VPN, 6VPE) and L3 features (OSPF and BGP).
Expertise in Functional test case planning, implementation and manual execution.
Handling of the script maintenance work, experienced in reviewing and writing the automation scripts using ROBOT Framework.
Experienced in Windows and Linux based operating systems. Trouble shooting for issues. 
Experienced with configuration management tool GIT.
Familiar with traffic tools Wireshark, Spirent Test Center and Ixia.
An enthusiastic team player with the ability to work flexibly and multi-task whilst achieving challenging deadlines.`;

const workExperiance = [
    {
        designation: "Senior Software Engineer",
        duration: "Ip Infusion | October 2018 - present",
        contribution: `Consolidating the test bed requirements of all the features and bringing up the setup in the lab.
        Proper understanding of Functional Specification and manual execution.
        Preparation of Test Plan, Test Cases and Test checklist Development for new features
        Manually executing the test cases for existing and new load modules.
        Regression Testing included several test cases to be executed on the different boxes across different releases.
        Analyzing the logs of executed Automation test cases. Failures, deviations from standards bugs were noticed and reported.`
    },
];

const education = [
    {
        standard: "Bachelor Technologies",
        institution: "IIIT RGUKT (RK Valley) | 2014-2018",
        percentage: "73.5%"
    },
    {
        standard: "PUC",
        institution: "IIIT RGUKT (RK Valley) | 2012-2014",
        percentage: "73%"
    },
    {
        standard: "Secondary Education",
        institution: "ZPGH School | 2011-2012",
        percentage: "97%"
    },
]

export default  {contact, awards, path, sideBarContents, name, designation, proSummary, workExperiance, education, Mohammad};