const loginchoice = {
    template:`
    <div>
    <toolbar></toolbar>  
    <div class="container">
    <div style="height: 3vh"></div>
    
    <div class="row">
            <div class="col-md-2 offset-md-4">
        <router-link to="/login" class="login"> 
        <div class="roundedBox">
            kunde
            </div>
        </router-link>
    </div>
    <div class="col-md-2">
    <router-link to="/ansattLogin" class="ansattLogin">
        <div class="roundedBox" style="color: black">
        
            ansatt
        
    </div>
    </router-link>
    </div>
    </div>
</div>
</div>
    `
};
export default loginchoice;