const Toolbar = Vue.component('Toolbar', {
    template: `
            <div class="row" id="headerRow">

                <div class="col-5" id="mainpage">
                    <router-link to="/" class="TB"> Student klinikken </router-link>
                </div>

                <div class="col-2" id="om-oss">
                  <router-link to="/about" class="about"> om oss </router-link>
                </div>
                <div class="col-2" id="timebestilling">
                    <router-link to="/timebestilling" class="TB">bestilling time</router-link>
                </div>
                <div class="col-2" id="tilbakemelding"> 
                    <router-link to="/contact" class="TB"> tilbakemelding </router-link>
                </div>
               
                <div class="col-1" id="min-side">
                    <router-link to="/my_page" class="TB"> min side </router-link>
                </div>
            </div>
             `
});

export default Toolbar;