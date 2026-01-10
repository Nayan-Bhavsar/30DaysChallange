const users = [];

function addUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (username === "" || email === "" || password === "" || !gender) {
    alert("Please fill all fields");
    return;
  }

  const user = {
    username,
    email,
    password,
    gender: gender.value,
  };

  users.push(user);

  event.target.reset();
  displayUsers();
}

function displayUsers() {
  const table = document.getElementById("userTable");
  table.innerHTML = "";

  users.forEach((user) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.gender}</td>
      `;

    table.appendChild(row);
  });
}