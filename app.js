// toggle menu button
const toggleBtn = document.querySelector('.toggleBtn');
const toggleBtnIcon = document.querySelector('#toggleBtnIcon');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function(){
  dropdownMenu.classList.toggle('open');
  const isOpen = dropdownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen
    ? 'ph ph-x'
    : 'ph ph-list'
}

// navigation bar function
const li = document.querySelectorAll('.links');
const sec = document.querySelectorAll('section')

const activeMenu = () => {
  let len = sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);

// back -to -top button
myButton = document.querySelector('#back-to-top');

window.onscroll = () => {
  scrollFunction();
}

const scrollFunction = () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    myButton.style.display = 'block';
  }
  else{
    myButton.style.display = 'none';
  }
}

const topFunction = () =>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// send email
const sendEmail = () =>{
  let params = {
    name: document.querySelector('#fullname').value,
    email: document.querySelector('#emailAdd').value,
    message: document.querySelector('#email-message').value
  }

  const serviceID = 'service_s2e8rgc';
  const templateID = 'template_jvdnpib';
  
  emailjs.send(serviceID, templateID, params)
  .then((res) => {
      document.querySelector('#fullname').value = '';
      document.querySelector('#emailAdd').value = '';
      document.querySelector('#email-message').value = '';
      console.log(res);
      alert('Email sent.');
    }
  )
  .catch((err) => {
    console.log(err)
  });
}


// const header = document.querySelector('#header');
// window.addEventListener('scroll', () =>{
//     if(window.scrollY > 500){
//         header.classList.add('header-scrolled');
//     }
//     else{
//         header.classList.remove('header-scrolled');
//     }
// })
