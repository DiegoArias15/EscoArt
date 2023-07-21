const btnSignIn = document.getElementById("sing-in"),
      btnSignUp = document.getElementById("sing-up");
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

      btnSignIn.addEventListener("click" , e =>{
        formRegister.classList.add("hide");
        formLogin.classList.remove("hide")
      })

      btnSignUp.addEventListener("click" , e =>{
        formLogin.classList.add("hide");
        formRegister.classList.remove("hide")
      })
