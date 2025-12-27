const getUsers = async ()=>{
  const response = await axios.get(`http://ums12.runasp.net/api/users?limit=1000`);
  return response.data;
}

const displayUsers = async ()=>{
  const result = await getUsers();
  const users = result.users.map( (user)=> {
    return`
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><img src="${user.imageUrl}" width="100px" /></td>
        <td>
          <button type="button" class="btn btn-outline-danger" onclick=deleteUser(${user.id})>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#dc3545" d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm4 9.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 1 0 2.5 0v-14.5c0-.69-.56-1.25-1.25-1.25" />
            </svg>
          </button>
          <a href="./details.html?userId=${user.id}" class="btn btn-outline-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#0dcaf0" d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5S4.5 6.505 4.5 8.5S6.005 12 8 12" />
            </svg>
          </a>
        </td>
      </tr>
    `
  }).join(' ');

  document.querySelector(".users .users-info").innerHTML = users;
  console.log(result);
}
displayUsers();

const deleteUser = async (id)=>{
  const response = await axios.delete(`http://ums12.runasp.net/api/users/${id}`)
  console.log(response);
}

const adduserform = document.querySelector(".create-user");
const createUserbtn = document.querySelector(".create-user-btn");
const submitbtn = document.querySelector(".submit-user-btn");
const toastLiveExample = document.getElementById('liveToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

  createUserbtn.addEventListener("click", () => {
    adduserform.classList.remove("hide");
  });

const createUserForm = document.forms['createUser'];

createUserForm.addEventListener("submit", async (e)=>{
  e.preventDefault();
  const formData = new FormData(createUserForm);
  const response = await axios.post(`http://ums12.runasp.net/api/users`, formData);
  console.log(response);
  
  if (response.status == 200){
    adduserform.classList.add("hide");
    toastBootstrap.show();
  }
});
// Image File Reader
createUserForm.image.addEventListener("change",()=>{
  const file = createUserForm.image.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e){
  document.querySelector(".preview").setAttribute("src", e.target.result);
  }
})






