import React from "react";
import AnsContainer from "./AnsContainer";
import Navbar from "./Navbar";

const AdminPage = (props) => {
  return (
    <div className="admin-background">
      <Navbar/>
      <AnsContainer/>
    </div>
  );
};

export default AdminPage;