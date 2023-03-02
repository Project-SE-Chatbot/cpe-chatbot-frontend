import React from "react";
import AnsContainer from "./AnsContainer";
import AnswerEdit from "./component/AnswerEdit";
import Navbar from "./Navbar";

const AdminPage = (props) => {
  return (
    <div className="admin-background" >
      <Navbar />
      <div className="container">
        <div>
          <AnsContainer />
        </div>
        <div className="edit">
          <AnswerEdit />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;