const Toolbar = Vue.component('Toolbar', {
    template: `
            <div class="row" id="headerRow">

                <div class="col-sm-5" id="mainpage">

                    <router-link to="/"> 

                        <div class="hundredpercent">
                        
                        Student klinikken 
                        
                        </div>

                    </router-link>

                </div>

                <div class="col-sm-2" id="om-oss">

                  <router-link to="/about" class="about"> 

                    <div class="hundredpercent">
                       
                    om oss 
                  
                    </div>

                  </router-link>

                </div>

                <div class="col-sm-2" id="timebestilling">

                    <router-link to="/timebestilling" class="TB">
                    <div class="hundredpercent">
                    bestilling time
                    </div>
                    </router-link>

                </div>

                <div class="col-sm-2" id="tilbakemelding"> 
                
                    <router-link to="/contact" class="TB"> 
                    <div class="hundredpercent">
                    tilbakemelding 
                    </div>
                    </router-link>

                </div>
               
                <div class="col-sm-1" id="min-side">
                <router-link to="/loginchoice" class="TB"> 
                    <div class="hundredpercent">
                    min side 
                    </div>
                    </router-link>

                </div>
            </div>
             `
});

export default Toolbar;