const getUser = async () => {
  const params = new URLSearchParams(location.search);
  const userId = params.get("userId");
  const response = await axios.get(`http://ums12.runasp.net/api/users/${userId}`);
  return response.data;
};
const displayUserData = async () => {
  const response = await getUser();
  console.log(response);
  document.querySelector(".user .details .userName").textContent = response.data.name;
  document.querySelector(".user .details .userEmail").textContent = response.data.email;
  document.querySelector(".user .details .userAge").textContent = response.data.age;
  if (response.data.image) {
    document.querySelector(".user .details .userImg").src = response.data.image;
  }
};
displayUserData();
