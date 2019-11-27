const HomePage = {
    template: `
                <div>
        her er det hjem <br>

        <router-link to="/about" class="about"> about us </router-link>
        <router-link to="/contact" class="contact"> contact us </router-link>
        <router-link to="/timebestilling" class="TB"> time bestilling</router-link>


        <style>
        body {
            background-color: #00ffff;  
        }
        </style>
        </div>
             

               
            `,

};

export default HomePage;