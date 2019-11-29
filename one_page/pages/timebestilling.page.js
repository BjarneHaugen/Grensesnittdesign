const Timebestilling = {
    template: `
            <div>
                <toolbar></toolbar>
                <div class="container">
                <div class="row" id="filler">
                <div class="col-md-2"></div>
                    <div class="col-md-2 offset-md-2 roundedBox">

                        <input type='date' v-model='myDate'>

                    </div>
                    <div class="col-md-2 roundedBox">
                      {{myDate}}  
                    </div>
                    <div class="col-md-2"></div>
                    </div>
                    
                    
                <div style="height: 3vh"></div>

                        <div v-for="(hour, index) in tid" v-bind:value="hour" v-bind:key="tid.index">
                        <div class="row">
                        <div class="col-md-12">
                            <div v-if="hour.bestilt===true"> 
                            <div class="row">
                                <div class="col-md-4 offset-md-4 roundedBox">bestilt </div> 
                                </div>
                            </div>
                            <div v-else> 
                                <div class="row">   
                                <div class="col-md-1 offset-md-4 roundedBox">
                                    {{hour.time}} : {{hour.min}}  
                                    </div>
                                    <div class="col-md-2 roundedBox"></div>
                                <div class="col-md-1 roundedBox">
                                    <button @click="bestilling(index)"> bestill </button>
                                    </div>
                                </div> 
                            </div>
                            </div>
                        </div>
                        </div>
                        

                    

                    </div>

            </div>
            `,
    methods: {
        bestilling: function (index) {
            this.tid[index].bestilt = true;
        }
    },

    data() {
        return {
            myDate: new Date().toISOString().slice(0, 10),

            tid: [
                {
                    index: 0,
                    time: 7,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 1,
                    time: 7,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 2,
                    time: 8,
                    min: "00",
                    bestilt: true
                },
                {
                    index: 3,
                    time: 8,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 4,
                    time: 8,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 5,
                    time: 8,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 6,
                    time: 9,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 7,
                    time: 9,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 8,
                    time: 9,
                    min: "30",
                    bestilt: false

                },
                {
                    index: 9,
                    time: 9,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 10,
                    time: 10,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 11,
                    time: 10,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 12,
                    time: 10,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 13,
                    time: 10,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 14,
                    time: 11,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 15,
                    time: 11,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 16,
                    time: 11,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 17,
                    time: 11,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 18,
                    time: 12,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 19,
                    time: 12,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 20,
                    time: 12,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 21,
                    time: 12,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 22,
                    time: 13,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 23,
                    time: 13,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 24,
                    time: 13,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 25,
                    time: 13,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 26,
                    time: 14,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 27,
                    time: 14,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 28,
                    time: 14,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 29,
                    time: 14,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 30,
                    time: 15,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 31,
                    time: 15,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 32,
                    time: 15,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 33,
                    time: 15,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 34,
                    time: 16,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 35,
                    time: 16,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 36,
                    time: 16,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 37,
                    time: 16,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 38,
                    time: 17,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 39,
                    time: 17,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 40,
                    time: 17,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 41,
                    time: 17,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 42,
                    time: 18,
                    min: "00",
                    bestilt: false
                },
                {
                    index: 43,
                    time: 18,
                    min: "15",
                    bestilt: false
                },
                {
                    index: 44,
                    time: 18,
                    min: "30",
                    bestilt: false
                },
                {
                    index: 45,
                    time: 18,
                    min: "45",
                    bestilt: false
                },
                {
                    index: 46,
                    time: 19,
                    min: "00",
                    bestilt: false
                }
            ]
        }
    }
};

export default Timebestilling;