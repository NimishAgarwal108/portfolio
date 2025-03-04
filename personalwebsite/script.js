document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let nav = document.querySelectorAll(".size");
  let moreText = document.getElementById("moreText");
  let btn = document.getElementById("readMoreBtn");

  const contactBtn = document.getElementById("contactBtn");

  contactBtn.addEventListener("click", function () {
    window.location.href =
      "https://mail.google.com/mail/?view=cm&fs=1&to=agarwalnimish428@gmail.com";
  });


  const contactButtonMid = document.getElementById("ContactBtnMid");
  contactButtonMid.addEventListener("click", function () {
    window.location.href =
      "https://mail.google.com/mail/?view=cm&fs=1&to=agarwalnimish428@gmail.com";
  });

  let typed = new Typed(".auto-type", {
    strings: [
      "Software Engineer",
      "MERN stack developer",
      "Coder",
      "Problem Solver",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    nav[0].classList.toggle("active");
  };

  btn.addEventListener("click", function () {
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btn.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      btn.innerHTML = "Read More";
    }
  });

  emailjs.init("g1qgcHnEZo8u-Ns-U"); // EmailJS User ID

  document.getElementById("submitBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const feedback = document.getElementById("feedback").value;

    if (!name || !email || !phone || !subject || !feedback) {
      alert("Please fill in all fields.");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending..";

    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone,
      subject: subject,
      message: feedback,
    };

    emailjs
      .send("service_w5ahx1e", "template_x196v6p", templateParams)
      .then((response) => {
        alert("thanks for your feedback!");
        document.getElementById("feedbackForm").reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Message";
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Working on bugs please try after 2 days");
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Message";
      });
  });
});
