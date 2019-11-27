import AboutPage from "./pages/About.page.js";
import ContactPage from "./pages/Contact.page.js";
import HomePage from "./pages/Home.page.js";
import Timebestilling from "./pages/timebestilling.page.js";
import My_page from "./pages/my_page.page.js";

const router = new VueRouter({
<<<<<<< Updated upstream
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
=======
    
  routes: [
    {
      path: "/",
      name: "Hovedside",
      component: HomePage,
      meta: {
        auth: true,
        title: "Hovedside"
      }
    },
    {
      path: "/about",
      name: "Om oss",
      component: AboutPage,
      meta: {
        auth: true,
        title: "Om oss"
      }
    },
    {
      path: "/contact",
      name: "Kontakt oss",
      component: ContactPage,
      meta: {
        auth: true,
        title: "Kontakt"
      }
    },
    {
      path: "/timebestilling",
      name:"Timebestilling",
      component: Timebestilling,
      meta:{
          auth: true,
          title: "Timebestilling"
      }
    }
  ]

>>>>>>> Stashed changes
});


 

export default router;