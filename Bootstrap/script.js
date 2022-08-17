var myDropdown = document.querySelector('.dropdown-toggle');
myDropdown.addEventListener('show.bs.dropdown', function () {
  this.classList.add('active');
})

myDropdown.addEventListener('hide.bs.dropdown', function () {
  this.classList.remove('active');
})

