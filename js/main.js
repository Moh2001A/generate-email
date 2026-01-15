const btnGenerate = document.querySelector(".container button");
const inputGenerate = document.querySelector(".container .password input");
const emails = document.querySelector(".container .emails");


btnGenerate.addEventListener("click", () => {
    if(inputGenerate.value === "") {
      alert("Enter Your Email")
    }else {
      emails.innerHTML = "";
      generateEmail(inputGenerate.value);
    }
})

function generateEmail(email) {

  const local = email.match(/^[^@]+/)[0];
  const domain = email.slice(local.length + 1);

  const results = [];
  const slots = local.length - 1;

  for (let mask = 1; mask < (1 << slots); mask++) {
    let result = local[0];

    for (let i = 0; i < slots; i++) {
      if (mask & (1 << i)) {
        result += ".";
      }
      result += local[i + 1];
    }

    results.push(result + "@" + domain);
  }

  const newResults = results.slice(0, 999);

  addEmails(newResults)
}

function addEmails(Array) {
    Array.forEach((email) => {
        let emailElement = document.createElement("p");
        emailElement.innerHTML = email;
        emails.appendChild(emailElement);
    })
    emails.style.display = "block"
} 