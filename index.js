// // Add your code here
// function submitData(){
//   fetch("http://localhost:3000/users",{
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       name: "eddah",
//       email: "eddah@gmail.com",
//     }),
//   })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

// }
// submitData();

  
  ///const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject);
// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   });


function submitData(name, email) {
  let formData = {
      name: name,
      email: email
  };

  let configObject = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObject)
      .then(response => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response.json();
      })
      .then(data => {
          // Assuming the response returns an object with an 'id' field
          let id = data.id;
          document.body.append(id); // Append id to the DOM (adjust this according to your needs)
      })
      .catch(error => {
          document.body.append(error.message); // Append error message to the DOM on failure
      });
}
submitData()