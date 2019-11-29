const HomePage = {
    template: `
    <div>
        <toolbar></toolbar>
        <div class="container">
        <div class="row">
            <div id="filler"></div>
        </div>
            <div class="row">
               
                <div class="col-md-12">
                    <div id="bilde-placeholder">
                        <img src="./resources/clinic.jpg" alt="a clinic">
                    </div>

            <div class="row">
            <div class="col-md-6">
                <div class="col leftText">
                    <p>Vi behandler akutte og langvarige plager / ubehag, men kan også hjelpe til med forebyggende tiltak. Du kan forvente en individuell samtale, undersøkelse, behandling og råd rettet mot dine behov.

                    Studentene har selv ansvar for konsultasjonene, men har alltid en erfaren veileder tilgjengelig.
                    
                    Du trenger ikke henvisning fra lege.</p>
                    </div>
                </div>
                <div class="col-md-6">
                <div style="height: 2.5vh"></div>
                <div class="row">

                        <div class="col-md-6 roundedBox linkButton">
                        <router-link to="/about" class="about">
                        <div style="color: black">
                        se behandlinger
                        </div>
                        </router-link>
                        </div>

                        
                        <div class="col-md-6 roundedBox linkButton">
                        <router-link to="/timebestilling" class="timebestilling">
                        <div style="color: black">
                        bestill time
                        </div>
                        </router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 roundedBox linkButton">
                        <router-link to="/loginchoice" class="loginchoice"> 
                        <div class="hundredpercent" style="color: black">
                            log in
                        </div>
                        </router-link>
                        </div>
                        <div class="col-md-6 roundedBox linkButton">sign up</div>
                    </div>
                </div>

            </div>
                </div>
            </div>
            
      
            
        </div> 
    </div>
`,

};

export default HomePage;