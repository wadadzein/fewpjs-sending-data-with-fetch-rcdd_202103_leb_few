function submitData(name, email){
  
return fetch("http://localhost:3000/users", {
	method: "POST",
	headers: {
	"Content-Type": "application/json",
	"Accept": "application/json"
	},
	body: JSON.stringify({
	name: name,
	email: email
	})

	.then(function(response) {
          return response.json();
        })
	.then(function(object){
	  let h2=document.createElement("h2");
	  h2.innerHTML= object.id;
	  document.body.appendChild(h2);
	  console.log(object);
	  
	})
	.catch(function (error){
	  
	})
	});
  
}