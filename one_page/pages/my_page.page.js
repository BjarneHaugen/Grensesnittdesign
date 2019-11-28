const My_page = {
    template: `
            <div>
                <toolbar></toolbar>

                    <div v-for="(kunde, index) in appointments" :key="kunde.index">
                      <div class="col-5"> din time hos {{kunde.type}} </div>
                      <div class="col-4"> dato {{kunde.date}} {{kunde.month}} kl {{kunde.time}} </div>
                      <div class="col-3"> behandlere {{kunde.worker}} </div>
                      <button @click="deleteEvent(index)">delete</button>
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