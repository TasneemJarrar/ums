const getUsers = async ()=>{
  const response = await axios.get(`http://ums12.runasp.net/api/users`);
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
        </td>
      </tr>
    `
  }).join(' ');

  document.querySelector(".users .users-info").innerHTML = users;

}
displayUsers();

const deleteUser = async (id)=>{
  const response = await axios.delete(`http://ums12.runasp.net/api/users/${id}`)
  console.log(response);
}