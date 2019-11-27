import AboutPage from "./pages/About.page.js";
import ContactPage from "./pages/Contact.page.js";
import HomePage from "./pages/Home.page.js";
import Timebestilling from "./pages/timebestilling.page.js";
import My_page from "./pages/my_page.page.js";

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage
        },
        {
            path: '/contact',
            component: ContactPage
        },
        {
            path: '/timebestilling',
            component: Timebestilling
        },
        {
            path: '/My_page',
            component: My_page
        }
    ]
});

export default router;