import React, { useState } from "react";
import AnsContainer from "./AnsContainer";
import ConfirmDelAns from "./ConfirmDelAns";
import AnswerEdit from "./component/AnswerEdit";
import Navbar from "./Navbar";
import PopupCreAns from "./PopupCreAns";
import EditDegree from "./PopupEditAns/EditDegree";
import EditFreeElective from "./PopupEditAns/EditFreeElective";
import EditMajor from "./PopupEditAns/EditMajor";
import EditPlace from "./PopupEditAns/EditPlace";
import EditPlan from "./PopupEditAns/EditPlan";
import EditTeacher from "./PopupEditAns/EditTeacher";
import AnswerBox from "./component/AnswerBox";

const AdminPage = (props) => {
  const [title,setTitle] = useState();
  const [detail,setDetail] = useState();
  const [star,setStar] = useState();
  const [day,setDate] = useState();
  const [AnsEdit,setAnsEdit] = useState(false);

  return (
    <div className="admin-background" >
      <Navbar />
      <div className="container">
        <div>
          <AnsContainer />
        </div>
        <div className="edit">
          <AnswerEdit trigger = {true} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;