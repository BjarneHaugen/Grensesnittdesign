const Toolbar = Vue.component('Toolbar', {
    template: `
            <div class="row" id="headerRow">

                <div class="col-5" id="mainpage">

                    <router-link to="/"> 

                        <div>
                        
                        Student klinikken 
                        
                        </div>

                    </router-link>

                </div>

                <div class="col-2" id="om-oss">

                  <router-link to="/about" class="about"> 

                    <div>
                       
                    om oss 
                  
                    </div>

                  </router-link>

                </div>

                <div class="col-2" id="timebestilling">

                    <router-link to="/timebestilling" class="TB">
                    <div>
                    bestilling time
                    </div>
                    </router-link>

                </div>

                <div class="col-2" id="tilbakemelding"> 
                
                    <router-link to="/contact" class="TB"> 
                    <div>
                    tilbakemelding 
                    </div>
                    </router-link>

                </div>
               
                <div class="col-1" id="min-side">

                    <router-link to="/my_page" class="TB"> 
                    <div>
                    min side 
                    </div>
                    </router-link>

                </div>
            </div>
             `
});

export default Toolbar;