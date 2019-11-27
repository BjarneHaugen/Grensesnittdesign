const ContactPage = {
    template: `
        <div>
            <toolbar></toolbar>
                <div class="test">
                    <h1>Kontakt oss</h1>
                    <form>
                        <input v-model="contactForm.name" placeholder="Navn" type="text" /><br>
                        <input v-model="contactForm.email" placeholder="Epost-adresse" type="text" /><br>
                        <textarea v-model="contactForm.message" placeholder="Din melding" /><br>
                        <button type="button" @click="sendMail">Send mail!</button>
                    </form>
                </div>
            </div>
                `,
    methods: {
        sendMail() {
            alert(`Melding sent fra ${this.contactForm.name} (${this.contactForm.email}): "${this.contactForm.message}"`);
        }
    },
    data() {
        return {
            contactForm: {
                name: "",
                email: "",
                message: ""
            }
        }
    }
};

export default ContactPage;