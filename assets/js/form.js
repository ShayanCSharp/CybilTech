
// Form regex
let nameValidate = () => {
    let name = document.querySelector("#name");
    let nameError = document.querySelector("#nameError");
    let nameRegex = /^[A-Za-z]{2,}$/;
  
    if (!nameRegex.test(name.value)) {
      name.style.outlineColor = "#ff0000";
      nameError.style.display = "block";
      nameError.textContent = "Please enter a valid name (at least 2 letters)";
      return false;
    } else {
      name.style.outlineColor = "green";
      nameError.style.display = "none";
      nameError.textContent = "";
      return true;
    }
  };
  let webValidate = () => {
    let website = document.querySelector("#website");
    let websiteError = document.querySelector("#websiteError");
    let websiteRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/;
  
    if (!websiteRegex.test(website.value)) {
      website.style.outlineColor = "#ff0000";
      websiteError.style.display = "block";
      websiteError.textContent = "Please enter a valid website URL";
      return false;
    } else {
      website.style.outlineColor = "green";
      websiteError.style.display = "none";
      websiteError.textContent = "";
      return true;
    }
  };
  
  
  let compValidate = () => {
    let name = document.querySelector("#company");
    let nameError = document.querySelector("#companyError");
    let nameRegex = /^[A-Za-z0-9\s]+$/;
  
    if (!nameRegex.test(name.value)) {
      name.style.outlineColor = "#ff0000";
      nameError.style.display = "block";
      nameError.textContent = "Please enter a valid company name";
      return false;
    } else {
      name.style.outlineColor = "green";
      nameError.style.display = "none";
      nameError.textContent = "";
      return true;
    }
  };
  
  let emailValidate = () => {
    let name = document.querySelector("#email");
    let nameError = document.querySelector("#emailError");
    let nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!nameRegex.test(name.value)) {
      name.style.outlineColor = "#ff0000";
      nameError.style.display = "block";
      nameError.textContent = "Invalid email address";
      return false;
    } else {
      name.style.outlineColor = "green";
      nameError.style.display = "none";
      nameError.textContent = "";
      return true;
    }
  };
  
  let form = document.querySelector(".contactForm form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (nameValidate() && emailValidate() && webValidate() && compValidate()) {
      Swal.fire({
        title: "Submit",
        text: "We will contact you as soon as possible.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please recheck the values",
        icon: "error",
      });
    }
  });
  