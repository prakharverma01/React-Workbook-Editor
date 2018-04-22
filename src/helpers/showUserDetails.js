export function showUserDetails(name,email) {    
    let html='';
    html +='<div> Welcome '+ name.substr(0,20)+':'+email.substr(0,30)+'</div>';
    document.getElementById("userDetails").innerHTML=html;
}