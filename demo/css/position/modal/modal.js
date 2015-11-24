function openDialog() {
  var modal = document.getElementsByClassName('dialog')[0];
  
  modal.style.display = 'block';
}
function closeDialog() {
  var modal = document.getElementsByClassName('dialog')[0];
  
  modal.style.display = 'none';
}

function openOverlay() {
  var modal = document.getElementsByClassName('overlay')[0];
  
  modal.style.display = 'block';
}
function closeOverlay() {
  var modal = document.getElementsByClassName('overlay')[0];
  
  modal.style.display = 'none';
}

function hideOverlay(e) {
  var modal = document.getElementsByClassName('overlay')[0];
  
  if(e.target === modal) {
    closeOverlay();
  }
}
