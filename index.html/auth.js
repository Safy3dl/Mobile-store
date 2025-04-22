function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
  }
  function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  
  function registerUser(username, email, password) {
    const users = getUsers();

    if (users.some(u => u.username === username || u.email === email)) {
      return false;
    }
    users.push({ username, email, password });
    saveUsers(users);
    return true;
  }
  
  function loginUser(id, password) {
    const users = getUsers();
    const user = users.find(u =>
      (u.username === id || u.email === id) && u.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
    return false;
  }
  
  function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
  
  function logoutUser() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.htm";
  }
