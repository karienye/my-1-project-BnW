const h3 = document.createElement("h3");
h2.textContent = "Reach out to us!!";

document.querySelector("body").appendChild(h3);

const submit = document.getElementById('submit');
submit.addEventListener('click', function() {
  alert('I was clicked!');
});