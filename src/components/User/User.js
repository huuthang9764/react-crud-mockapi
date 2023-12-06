import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import UserDataService from '../../service/user.service'
import './User.css'

const User = () => {
    const [users, setUser] = useState([]);
    const [searchFullName, setSearchFullName] = useState("");
    const navigate = useNavigate ();

    const handleClick = () => {
        navigate("/add-user");
      };


    useEffect(()=>{
        retrieveUser();
    },[])

    const onChangeSearchFullName = (e) =>{
        const searchFullName =  e.target.value;
        setSearchFullName(searchFullName);
    }
    const retrieveUser = () =>{
        UserDataService.getAll()
        .then(response =>{
            setUser(response.data);

        })
        .catch(e=>{
            console.log(e);
        });
    }
    

    const findByFullName = () => {
        UserDataService.findByFullName(searchFullName)
        .then(response=>{
            setUser(response.data);
            console.log(response.data);
        })
        .catch(e=>{
            console.log(e);
        });
    };

    return (
        <div className='container'>
            <div className='box-control'>
            <form className="form-inline find-form mr-auto">
                <input className="form-control mr-sm-2" 
                type="text" 
                placeholder="Find By FullName" 
                value={searchFullName}
                onChange={onChangeSearchFullName}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" 
                type="submit"
                onClick={findByFullName}
                >Search</button>
            </form>

            <button className="btn btn-success find-form" 
            onClick={handleClick}
                type="submit"
            >Add User
            </button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th >#</th>
                        <th >id</th>
                        <th >FullName</th>
                        <th>UserName</th>
                        <th >email</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user,i)=>(
                        <tr key={i}>
                        <th >{i}</th>
                        <td>{user.id}</td>
                        <td>{user.fullname}</td>
                        <td>{user.username}</td>
                        <td>{user.email}@gmail.com</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;