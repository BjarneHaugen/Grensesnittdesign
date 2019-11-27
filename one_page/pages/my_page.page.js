const My_page = {
    template: `
            <div>
                <toolbar></toolbar>
                    <div>
                       din time hos {{apointments.type}}
                    </div>
                    <div>
                        dato {{apointments.date}} {{apointments.month}} kl {{apointments.time}} 
                    </div>
                    <div>
                    behandlere {{apointments.worker}}
                    </div>
            </div>
            `,
    methods: {
        removeDate() {
            ;
        }
    },
    data() {
        return {
            apointments:
            {
                type: "akupunktur",
                month: "mai",
                date: 10,
                time: 12.15,
                worker: "lasse"
            }

        }
    }
};

export default My_page;