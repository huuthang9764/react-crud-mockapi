import httpCommon from "../http-common";




const getAll = () =>{
    return httpCommon.get(`/users`);
}

const getID = id =>{
    return httpCommon.get(`/users/${id}`);
}
const create = data => {
    return httpCommon.post("/users", data);
  };

const findByFullName = fullname => {
    return httpCommon.get(`/users?fullname=${fullname}`);
  };


const UserDataService ={
    getAll,
    getID,
    create,
    findByFullName
}; 
export default UserDataService;