// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", config)
      .then(resp => {
        if (!resp.ok) {
          throw new Error("Failed to submit data");
        }
        return resp.json();
      })
      .then(data => {
        const userId = data.id;
        document.body.append(userId);
      })
      .catch(error => {
        document.body.append(error.message);
      });
  }
  console.log(submitData)
  // Exporting submitData function to ensure it's accessible for testing
  //export { submitData };
  //fetchconfig()