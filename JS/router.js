
const routes = {
    '/': Homepage,
    '/om_oss': Om_oss,
    '/tilbakemelding': tilbakemelding,
    '/timebestilling': timebestilling,
    '/timelister': timelister
}


const router = new VueRouter({

    routes:[
        {
            path: "/",
            component: HomePage
        },
        {
            path:"/om_oss",
            component: omOss
        }
    ]
})
