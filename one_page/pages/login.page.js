const loginPage = {
     template: 
     `
     <div>
     <toolbar></toolbar>
     <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="col">Epost</div>
                <input type="text" placeholder="E-mail">
                <div class="col">Passord</div>
                <input type="password" placeholder="passord">

                <router-link to="/My_page" class="My_page"> 
                    <button id="loginButton">logg inn</button>    
                </router-link>


            </div>
        </div>
     </div>
         
     </div>
     </div>
 `
};
export default loginPage;