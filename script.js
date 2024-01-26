const paragraph = document.createElement("p");
paragraph.innerText = "blablablabla";

document.body.appendChild(paragraph);
paragraph.className = "main-p";
paragraph.style.color = "blue";

const elementFromHTML = (html) => {
  const div = document.createElement("div"); // creates an element in the memory (not displayed)
  div.innerHTML = html;
  return div.firstChild;
};

// ...

const li = elementFromHTML(
  `<li class="element complex-element">A <strong>rather</strong> complex <a href="#">element</a></li>`
);

ul.appendChild(li);

const div = document.createElement("div");
div.className = "container container__big";

const section = document.createElement("section");

const h1 = document.createElement("h1");
h1.className = "title";
h1.innerHTML = "Welcome to <b>my</b> page";

const paragraph = document.createElement("p");
paragraph.textContent = "blablabla";

section.appendChild(h1);
section.appendChild(p);
document.body.appendChild(div);
div.appendChild(section);

const employee = {
  first_name: "Alfred",
  last_name: "Pennyworth",
  age: 67,
  occupation: "butler",
  place_of_residence: "Gotham",
  photo_url: "https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg",
};

const container = document.querySelector(".employees");

container.innerHTML = `
<div class="employee">
    <div class="employee__photo">
      <img src="${employee.photo_url}" alt="${employee.first_name}${employee.last_name}">
    </div>
    <div class="employee_info">
      <div class="employee__full-name">${employee.first_name}${employee.last_name}</div>
      <div class="employee__occupation">${employee.occupation}</div>
      <div class="employee__residence">Last known place of residence: ${employee.place_of_residence}</div>
      <div class="employee__age">Age: ${employee.age} years old</div>
    </div>
  </div>`;

const alerts = [
  "Unable to access resource. User is not authorized.",
  "You are missing proper user permissions.",
  "Administrators have been notified of this action.",
  "Please remain where you are, police is on the way.",
];

const alertsContainer = document.querySelector(".alerts");

alerts.forEach((alert) => {
  const div = document.createElement("div");
  div.className = "alert";
  div.classList.add("alert--error");

  const divText = document.createElement("div");
  divText.className = "alert__text";
  divText.textContent = alert;

  const divClose = document.createElement("div");
  divClose.className = "alert__close";
  divClose.innerHTML = "&times";

  div.appendChild(divText);
  div.appendChild(divClose);
  alertsContainer.appendChild(div);

  div.addEventListener("click", (event) => {
    div.style.backgroundColor = "green";
    div.style.color = "white";
    div.classList.toggle("alert--seen");
  });

  divClose.addEventListener("click", (event) => {
    div.style.display = "none";
  });
});

const data = document.querySelectorAll(".alert");

data.forEach((alert) => {
  const dataType = alert.getAttribute("data-type");
  alert.classList.add(`alert--${dataType}`);
});
