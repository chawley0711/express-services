var cookieString = [];
document.cookie = ("order= ; path=/submitted;");
function chkToggle(){
  var chk = event.target;
  var chkProductName = chk.id;
  if(chk.checked)
    cookieString.push(chkProductName);
  else
    cookieString = cookieString.filter(function(e) { return e !== chkProductName });
  document.cookie="order=" + cookieString + "; path=/submitted;";
}
var txtFirstName = document.getElementById("txtFirstName");
var txtAddress = document.getElementById("txtAddress");
var txtPhone = document.getElementById('txtPhoneNumber');
var menToggle = document.getElementById("menToggle");
var womenToggle = document.getElementById("womenToggle");
var productsToggle = document.getElementById("productsToggle");
var servicesTextArea = document.getElementById('servicesTextArea');
var mensText = document.getElementById('mensText');
var womensText = document.getElementById('womensText');
var productsText = document.getElementById('productsText');
function submitClicked(){
  var firstname = txtFirstName.innerHTML;
  var address = txtAddress.innerHTML;
  var phone = txtPhone.innerHTML;
  document.cookie="firstname=" + firstname + "; address=" + address + "; phone=" + phone + "; path=/submitted;";
}
function subscribeButtons(){
  menToggle.addEventListener("onclick", cattoggle);
  womenToggle.addEventListener("onclick", cattoggle);
  productsToggle.addEventListener("onclick", cattoggle);
}
subscribeButtons();
function cattoggle(){
  var toggleid = event.target.innerHTML;
  if(toggleid == 'Mens'){
    mensText.style.visibility = "visible";
    womensText.style.visibility="hidden";
    productsText.style.visibility="hidden";
    mensText.style.zIndex = 1;
    womensText.style.zIndex = 2;
    productsText.style.zIndex = 2;
  }
  else if(toggleid == 'Womens'){
    mensText.style.visibility="hidden";
    womensText.style.visibility="visible";
    productsText.style.visibility="hidden";
    mensText.style.zIndex = 2;
    womensText.style.zIndex = 1;
    productsText.style.zIndex = 2;
  }
  else if(toggleid == 'Products'){
    mensText.style.visibility="hidden";
    womensText.style.visibility="hidden";
    productsText.style.visibility="visible";
    mensText.style.zIndex = 2;
    womensText.style.zIndex = 2;
    productsText.style.zIndex = 1;
  }
}