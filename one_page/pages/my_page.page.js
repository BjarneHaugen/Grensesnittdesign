const My_page = {
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
                    <div class="col-4 roundedBox"> din time hos: {{kunde.worker}} </div>
                      <div class="col-3 roundedBox"> behandling:  {{kunde.type}} </div>
                      <div class="col-4 roundedBox"> dato {{kunde.date}} {{kunde.month}} kl {{kunde.time}} </div>
                      
                      <div class="col-1 roundedBox"><button @click="deleteEvent(index)">delete</button></div>
                    </div>
                   </div>
                </div>
            </div>
            `,
    methods: {
        deleteEvent: function(index) {
            this.$delete(this.appointments, index);
          }
    },
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
                        worker: "lasse"
                    },
                    {
                        index: 1,
                        type: "osteopati",
                        month: "juni",
                        date: 9,
                        time: 14.15,
                        worker: "marie"
                    }
                ]
        }
    }
};

export default My_page;