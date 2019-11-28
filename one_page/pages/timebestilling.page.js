const Timebestilling = {
    template: `
            <div>
                <toolbar></toolbar>
                    <div>

                        <input type='date' v-model='myDate'>

                    </div>
                    <div>
                      {{myDate}}  
                    </div>
                    
                    <div>

                        <div v-for="hour in tid" v-bind:value="hour">
                            {{hour.time}} : {{hour.min}}
                        </div>

                    </div>


            </div>
            `,


    data() {
        return {
            myDate: new Date().toISOString().slice(0, 10),

            tid: [
                {
                    time: 9,
                    min: "00"
                },
                {
                    time: 9,
                    min: 15
                }, 
                {
                    time: 9,
                    min: 30
                },
                {
                    time: 9,
                    min: 45
                },
                {
                    time: 10,
                    min: "00"
                }
            ]
        }
    }
};

export default Timebestilling;