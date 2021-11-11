import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
        console.log(data);
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2>Make an admin</h2>
      <form onSubmit={handelAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          onBlur={handleEmail}
          type="email"
          label="Standard"
          variant="standard"
        />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made admin successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
