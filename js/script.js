	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    // function SendMail() {
    //     var params = {
    //     from_name : document.getElementById("from_name").value,
    //     email_id : document.getElementById("email_id").value,
    //     contact: document.getElementById("user_contact").value,
    //     message: document.getElementById("message").value,
    //     }
    //     emailjs.send("service_m4j91gt1", "template_o4hfew2", params).then(function (res) { 
    //         alert("Success!" + res.status);
    //     })
    //     }