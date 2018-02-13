var cookieString = [];
document.cookie = ("order= ; path=/submitted;");
var total = 0;
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
var btnsubmit = document.getElementById('btnSubmit');
// function submitClicked(){
//   var firstname = txtFirstName.innerHTML;
//   var address = txtAddress.innerHTML;
//   var phone = txtPhone.innerHTML;
//   document.cookie="firstname=" + firstname + "; path=/submitted;";
//   document.cookie="address=" + address + "; path=/submitted;";
//   document.cookie="phone=" + phone + "; path=/submitted";
// }
function subscribeButtons(){
  menToggle.addEventListener("onclick", cattoggle);
  womenToggle.addEventListener("onclick", cattoggle);
  productsToggle.addEventListener("onclick", cattoggle);
  //btnsubmit.addEventListener("onclick", submitClicked);
}
subscribeButtons();
function cattoggle(){
  var toggleid = event.target.innerHTML;
  if(toggleid == 'Mens'){
    servicesTextArea.innerHTML = mensText.innerHTML;
  }
  else if(toggleid == 'Womens'){
    servicesTextArea.innerHTML = womensText.innerHTML;
  }
  else if(toggleid == 'Products'){
    servicesTextArea.innerHTML = productsText.innerHTML;
  }
}