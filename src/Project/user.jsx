import React, { useContext } from "react";
import { MyContext } from "./Context";
import "../Pstyle/user.css";

export default function UserDetail() {
  const { logUser, user, setuser, setLogUser } = useContext(MyContext);
  console.log('logUser', logUser);

  const handleBanUser = (index) => {
    const updatedUsers = [...user];
    const updatedLogUsers = [...logUser];
    updatedUsers[index].banned = true;
    const bannedUser = updatedLogUsers.find((user) => user.email === updatedUsers[index].email&& user.name===updatedUsers[index].name);
    const bannedUserIndex = updatedLogUsers.indexOf(bannedUser);
    if (bannedUserIndex !== -1) {
      updatedLogUsers.splice(bannedUserIndex, 1);
    }
    setuser(updatedUsers);
    setLogUser(updatedLogUsers);
  };

  return (
    <div className="dashboard">
      <h1 className="Dashlog"><b>Logged User details</b></h1>
      {logUser.length > 0 && (
        <div>
          <h3>User Details:</h3>
          {logUser.map((LoggedUser, index) => (
            <div key={index}>
              <h4>Name: {LoggedUser.name}</h4>
              <h4>Email: {LoggedUser.email}</h4>
              {/* <h4>Password: {LoggedUser.pass}</h4> */}
            </div>
          ))}
        </div>
      )}

      <h1 className="Dashreg"><b>Registered User details</b></h1>
      {user.length > 0 && (
        <div>
          <h3>User Details:</h3>
          {user.map((userData, index) => (
            <div key={index}>
              <h4>ID: {index + 1}</h4>
              <h4>Name: {userData.name}</h4>
              <h4>Email: {userData.email}</h4>
              {/* <h4>Password: {userData.pass}</h4> */}
              {userData.banned ? (
                <h4><i>User is banned</i></h4>
              ) : (
                <button onClick={() => handleBanUser(index)} >Ban the user</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
