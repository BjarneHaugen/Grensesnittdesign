const ansattpage = {
    template: `
    <div>
                <toolbar></toolbar>

                <div class="container">
                    <div class="row">
                        <div class="col" id="filler"></div>
                    </div>

                    <div v-for="(kunde, index) in appointments" :key="kunde.index">
                    <div class="row" id="filler"></div>
                    <div class="row leftText">
                    <div class="col-4 fill2"> du har kunden : {{kunde.kunde.navn}} </div>

                        <div class="col-4 fill2"> {{kunde.date}} {{kunde.month}} kl {{kunde.time}} </div>
                        <div class="col-3 fill2"> behandling:  {{kunde.type}} </div>
                      
                      </div>
                    
                   </div>

                    <select v-model="selected">
                      <option v-for="kunde in appointments" v-bind:value="kunde">
                          {{ kunde.kunde.navn }}
                      </option> 
                    </select> <br>

                    <span> <br> kunde : {{ selected.kunde }}
                    </span>

                </div>
            </div>
    `,
    data() {
        return {
            appointments:
                [
                    {
                        index: 0,
                        type: "akupunktur",
                        month: "mai",
                        date: 10,
                        time: 12.15,
                        kunde: {
                            navn: "Kåre Olsen",
                            epost: "kåre@git.yeet",
                            mobil: "123645678"
                        },
                        worker: "lasse"
                    },
                    {
                        index: 1,
                        type: "akupunktur",
                        month: "juni",
                        date: 9,
                        time: 14.15,
                        kunde: {
                            navn: "Trude Hansen",
                            epost: "Trude@git.yeet",
                            mobil: "23456789"
                        }
                        ,
                        worker: "lasse"
                    }
                ],
            selected: ""
        }
    }
};

export default ansattpage;