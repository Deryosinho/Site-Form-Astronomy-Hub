window.onload = function () {
  const txtPass = document.querySelector("#senha");
  const btn = document.querySelector("#alterPass");

  let textPassword = {
    text: (el) => {
      el.setAttribute("type", "password");
    },
    password: (el) => {
      el.setAttribute("type", "text");
    },
  };

  btn.addEventListener("click", function () {
    textPassword[txtPass.type](txtPass);
  });
};
