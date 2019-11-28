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
                            <div v-show="hour.bestilt===true"> bestilt </div>
                            <div v-else> 
                                <div>   
                                    {{hour.time}} : {{hour.min}}  
                                    <button @click="bestilling()"> bestill </button>
                                </div> 
                            </div>
                        </div>

                    </div>


            </div>
            `,
    methods: {
        bestilling: function () {
            this.$set(this.tid, this.tid.bestilt = !false)
            console.log("ok " + this.tid.bestilt);
        }
    },

    data() {
        return {
            myDate: new Date().toISOString().slice(0, 10),

            tid: [
                {
                    time: 7,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 7,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 8,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 8,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 8,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 8,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 9,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 9,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 9,
                    min: "30",
                    bestilt: false

                },
                {
                    time: 9,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 10,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 10,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 10,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 10,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 11,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 11,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 11,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 11,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 12,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 12,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 12,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 12,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 13,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 13,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 13,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 13,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 14,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 14,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 14,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 14,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 15,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 15,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 15,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 15,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 16,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 16,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 16,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 16,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 17,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 17,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 17,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 17,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 18,
                    min: "00",
                    bestilt: false
                },
                {
                    time: 18,
                    min: "15",
                    bestilt: false
                },
                {
                    time: 18,
                    min: "30",
                    bestilt: false
                },
                {
                    time: 18,
                    min: "45",
                    bestilt: false
                },
                {
                    time: 19,
                    min: "00",
                    bestilt: false
                }
            ]
        }
    }
};

export default Timebestilling;