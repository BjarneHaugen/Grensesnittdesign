const Timebestilling = {
    template: `
            <div>
                <toolbar></toolbar>
                    <div>

                        <input type='date' v-model='myDate'>

                    </div>

                    {{myDate}}

                    
            </div>
            `,


    data() {
        return {
            myDate: new Date().toISOString().slice(0, 10)
        }
    }
};

export default Timebestilling;