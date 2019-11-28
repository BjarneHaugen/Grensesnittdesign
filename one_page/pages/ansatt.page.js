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
                    <div class="col-4 fill2"> din time hos: {{kunde.worker}} </div>
                      <div class="col-3 fill2"> behandling:  {{kunde.type}} </div>
                      <div class="col-4 fill2"> dato {{kunde.date}} {{kunde.month}} kl {{kunde.time}} </div>
                      
                      <div class="col-1 fill2"><button @click="deleteEvent(index)">delete</button></div>
                    </div>
                   </div>
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
                        kunde: "Kåre",
                        Worker: "lasse"
                    },
                    {
                        index: 1,
                        type: "akupunktur",
                        month: "juni",
                        date: 9,
                        time: 14.15,
                        kunde: "Trude",
                        Worker: "lasse"
                    },
                    {
                        index: 2,
                        type: "osteopati",
                        month: "juni",
                        date: 9,
                        time: 14.15,
                        kunde: "Trude",
                        Worker: "marie"

                    },
                    {
                        index: 3,
                        type: "osteopati",
                        month: "juni",
                        date: 9,
                        time: 14.15,
                        kunde: "marie"
                    }
                ]
        }
    }
};

export default ansattpage;