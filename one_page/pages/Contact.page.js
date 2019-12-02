const ContactPage = {
    template: `
        <div>
            <toolbar></toolbar>
                
            <div class="container">
            
            <div class="row">
                <div id="filler"></div>
            <div class="col-4"></div>
            <div class="col-md-4">
                <div class="col-4"> Fornavn</div>
                <input v-model="contactForm.name" type="text" placeholder="Skriv ditt fornavn her">
                <div class="fornavn"> </div>
            

                <div class="col"> Etternavn</div>
                <input v-model="contactForm.etternavn"type="text" placeholder="Skriv ditt etternavn her">
                <div class="etternavn"> </div>

                <div class="col-4"> E-Post </div>
                <input v-model="contactForm.email" type="text" placeholder="Skriv din e-post her">
                <div class="epost"> </div>

                <div class="row">
                <div class="col-8">
                <p class="midtText">Ønsker du å være anonym?</p>
                </div>
                <div class="col-4">
                <select id="anonym" name="anonym">
                <option value="Nei">Nei</option>
                    <option value="Ja">Ja</option>
                </select>
                </div>
                </div>

                <div class="roundedBox">

                <div class="col"> Tilbakemelding  
                    
                <textarea v-model="contactForm.message" id="Tilbakemelding-boks" cols="40" rows="5"></textarea>
                
                </div>
                
                <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <button type="button" @click="sendMail">Send mail!</button>
                </div>
                
                <div class="col-4"></div>
                </div>
             </div>
            </div>
            <div class="col-4"></div>
            
        <div id="filler"></div>
        </div>
        </div>
        </div>
                `,
    methods: {
        sendMail() {
            alert(`Melding sent fra: \n navn: ${this.contactForm.name} ${this.contactForm.etternavn} \n email: ${this.contactForm.email} \n message: "${this.contactForm.message}"`);
        }
    },
    data() {
        return {
            contactForm: {
                name: "",
                etternavn: "",
                email: "",
                message: ""
            }
        }
    }
};

export default ContactPage;