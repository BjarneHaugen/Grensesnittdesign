const Timebestilling = {
    template: `
            <div>
                <toolbar></toolbar>
                    <div>

                        <input type='date' v-model='myDate'>

                    </div>

                    {{myDate}}  

                    
                    <div>

                        <div v-for="hour in timer.tid">
                            {{hour}}
                        </div>

                    </div>


            </div>
            `,


    data() {
        return {
            myDate: new Date().toISOString().slice(0, 10),

            timer: [{
                tid:9,
                tid:10
            
            }]
        }
    }
};

export default Timebestilling;