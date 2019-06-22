const login=require('../data/login');

const loginValidate=(log,pass)=>{

    let results='';
    login.forEach(e=>{
        if(log===e.login && pass===e.password){
            results='true';
        }
    })
    return results;
}
module.exports=loginValidate;