window.addEventListener('load', function() {
  var dropdown4Active = false;
  
  var dropdown4 = document.getElementById('dropdown-4');
  
  dropdown4.addEventListener('click', function(e) {
    e.preventDefault();
    
    toggleDropdown4Active();
  });
  
  function toggleDropdown4Active() {
    var classNames = 'dropdown dropdown-4';
    
    dropdown4Active = !dropdown4Active;
    
    if(dropdown4Active) {
      classNames += ' active';
    }
    
    dropdown4.className = classNames;
  }
});
