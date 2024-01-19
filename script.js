window.addEventListener('DOMContentLoaded', (event) => {
  
  let body = document.querySelector('body');
  let members = document.querySelectorAll('.member');
  
  members.forEach((member, index) => {
    member.addEventListener('click',function(e){
      members.forEach((member, index) => {
        member.classList.remove('detailview');
      });
      member.classList.toggle('detailview');
      e.preventDefault();
    });
  });
  
});