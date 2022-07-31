import ExportResume from "./components/ExportResume";
import Footer from "./components/Footer";
import MarketPlace from "./components/MarketPlace";
import Resume from "./components/Resume";

export const routers= [
 {
    component: ExportResume,
    roles: ["admin"],
    path: "/resume"
 },
 {
    component: Footer,
    roles: ["all"],
    path: "/footer"
 },
 {
    component: MarketPlace,
    roles: ["admin", "logged User"],
    path: "/market"
 },
 {
    component: Resume,
    roles: ["logged User"],
    path: "/resumes"
 },

]