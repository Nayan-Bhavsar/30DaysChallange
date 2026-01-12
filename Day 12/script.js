const users = [
  { name: "Nayan", email: "nayan@gmail.com" },
  { name: "Abhi", email: "abhi@gmail.com" },
  { name: "Kushaal", email: "kushaal@gmail.com" },
  { name: "Kartik", email: "Kartik@gmail.com" },
  { name: "Rohit", email: "rohit@gmail.com" },
];

// displaying user for first time
displayUsers(users);

function displayUsers(list) {
  const userList = document.getElementById("userList");
  const noResult = document.getElementById("noResult");

  userList.innerHTML = "";
  noResult.innerText = "";

  if (list.length === 0) {
    noResult.innerText = "No users found";
    return;
  }

  list.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = `${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
}

function searchUsers() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );
  });

  displayUsers(filteredUsers);
}