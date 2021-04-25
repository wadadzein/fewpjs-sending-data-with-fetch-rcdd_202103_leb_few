function submitData(name, email){
  
fetch("http://localhost:3000/users", {
	method: "POST",
	headers: {
	"Content-Type": "application/json",
	"Accept": "application/json"
	},
	body: JSON.stringify({
	name,
	email
	})

	.then(response=>response.json)
	.then(function(object){
	  let h2=document.createElement("h2");
	  h2.inner
	  
	})
	.catch(function (error){
	  alert("");
	})
	});
  
}