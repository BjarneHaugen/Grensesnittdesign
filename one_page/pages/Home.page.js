const HomePage = {
    template: `
    <div>
        <toolbar></toolbar>
        <div class="container">
        <div class="row">
            <div id="filler"></div>
        </div>
            <div class="row">
               
                <div class="col-md-6">
                    <div id="bilde-placeholder"></div>

                    <div class="row">
                <div id="filler"></div>
            </div>
            <div class="row">
                <div class="col leftText">
                    <p>Vi behandler akutte og langvarige plager / ubehag, men kan også hjelpe til med forebyggende tiltak. Du kan forvente en individuell samtale, undersøkelse, behandling og råd rettet mot dine behov.

                    Studentene har selv ansvar for konsultasjonene, men har alltid en erfaren veileder tilgjengelig.
                    
                    Du trenger ikke henvisning fra lege.</p>
                    </div>
                
            </div>
                </div>

                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6 roundedBox linkButton">se behandlinger</div>

                        <div class="col-md-6 roundedBox linkButton">bestill time</div>
                    </div>

                    <div class="row"><div class="filler"></div></div>

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
`,

};

export default HomePage;