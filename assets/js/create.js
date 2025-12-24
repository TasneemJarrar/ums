const createUserForm = document.forms['createUser'];

createUserForm.addEventListener("submit", async (e)=>{
  e.preventDefault();
  const formData = new FormData(createUserForm);
  const response = await axios.post(`http://ums12.runasp.net/api/users`,formData);
  console.log(response);
})