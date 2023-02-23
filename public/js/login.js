
const loginForm = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#logUsername').value.trim();
    const password = document.querySelector('#logPassword').value.trim();
  
    
    if (username && password) {
  
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
  
        if (response.ok) {
          console.log(response);
          var userData = await response.json();
          var id = userData.user.id;
          console.log(userData.user, id);
            document.location.replace('/project/' + id);
        } else {
            alert(response.statusText);
        }
    }
  }; 
   
  const registerForm = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log(username);
    console.log(password);
    if (username && password) {
      const response = await fetch('/api/users/', {

        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },
      
      }).then((response) => {
      return response.json()
      console.log(response);

  }).then((data) => {
      console.log(data)
      var id = data.id
      console.log(data.id) 
      document.location.replace('/login')
  })
  };
};
    
    document
      .querySelector('.login-form')
      .addEventListener('click', loginForm);
  
      document
    .querySelector('.signup-form')
    .addEventListener('click', registerForm);