const ContactPage = {
    template: `
        <div>
            <toolbar></toolbar>
                
            

            <div class="container">
            <dic class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="col-4"> Fornavn</div>
                <input v-model="contactForm.name" type="text" placeholder="Skriv ditt fornavn her">
                <div class="fornavn"> </div>

                <div class="col"> Etternavn</div>
                <input v-model="contactForm.etternavn"type="text" placeholder="Skriv ditt etternavn her">
                <div class="etternavn"> </div>

                <div class="col-4"> E-Post </div>
                <input v-model="contactForm.email" type="text" placeholder="Skriv din e-post her">
                <div class="epost"> </div>

                <p>Ønsker du å være anonym?</p>
                <select id="anonym" name="anonym">
                    <option value="Empty"></option>
                    <option value="Ja">Ja</option>
                    <option value="Ja">Nei</option>
                </select>
                <div closed></div>

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
            <div class="col-4"></div>
            
        <div id="filler"></div>
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