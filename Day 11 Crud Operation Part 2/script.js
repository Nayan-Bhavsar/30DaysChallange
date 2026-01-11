const users = [];
const editIndex = { value: -1 };//For Checking Whether It Is Updating or Saving New 

function saveUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (username === "" || email === "" || password === "" || !gender) {
    alert("Please fill all fields");
    return;
  }

  const userData = {
    username,
    email,
    password,
    gender: gender.value,
  };

  if (editIndex.value === -1) {
    // Logic For Create
    users.push(userData);
  } else {
    // Logic For Update
    users[editIndex.value] = userData;
    editIndex.value = -1;
  }

  event.target.reset();//To clear Form Field
  displayUsers();
}

function displayUsers() {
  const table = document.getElementById("userTable");
  table.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.gender}</td>
        <td>
          <button class="edit-btn" onclick="editUser(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
        </td>
      `;

    table.appendChild(row);
  });
}

function editUser(index) {
  const user = users[index];

  document.getElementById("username").value = user.username;
  document.getElementById("email").value = user.email;
  document.getElementById("password").value = user.password;
  document.querySelector(
    `input[name="gender"][value="${user.gender}"]`
  ).checked = true;

  editIndex.value = index;
}

function deleteUser(index) {
  users.splice(index, 1);
  displayUsers();
}