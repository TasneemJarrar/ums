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
          <button type="button" class="btn btn-outline-danger" onclick=deleteUser(${user.id}) >Delete</button>
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