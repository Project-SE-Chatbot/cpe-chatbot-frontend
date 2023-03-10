

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleContact = () => {
    const message = this.createChatBotMessage(
      "Call 1999 for Trilingual Health Assistance.",
      {
        widget: "emergencyContact",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleMedicine = () => {
    const message = this.createChatBotMessage(
      "To have clinical medicine safely delivered to your home, please refer to the link below.",
      {
        widget: "medicineDelivery",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleGreeting = () => {
    var jokes = [
      "สวัสดีวันนี้อากาศดีนะ",
      "สวัสดี!!!",
      "ไงพวก"
    ];

    var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    const message = this.createChatBotMessage(randomJoke,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true
      });

    this.addMessageToState(message);
  };

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!");

    this.addMessageToState(message);
  };

  handleMajorElectiveAll = async (question) => {
    var text = ""
    var message
    await question.forEach(element => {
      text = "รหัสวิชา: " + element.course_code + "\n"
        + " ชื่อวิชา: " + element.name + "\n"
        + " ภาคเรียนที่เปิดสอน: " + element.term + "\n"
        + " เรียนที่: " + element.place + "\n"
        + " ผู้สอน: " + element.teacher + "\n"
        + " เวลา: " + element.day + "\n"
        + " เวลา: " + element.time + "\n"
      message = this.createChatBotMessage(
        text,
        {
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      )
      this.addMessageToState(message)
      // console.log(text)
    })
  };

  handleMajorElective = async (question) => {
    var text = ""
    var message
    text = "รหัสวิชา: " + question.course_code + "\n"
      + " ชื่อวิชา: " + question.name + "\n"
      + " ภาคเรียนที่เปิดสอน: " + question.term + "\n"
      + " เรียนที่: " + question.place + "\n"
      + " ผู้สอน: " + question.teacher + "\n"
      + " เวลา: " + question.day + "\n"
      + " เวลา: " + question.time + "\n"
    message = this.createChatBotMessage(
      text,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true
      })
    this.addMessageToState(message)
    // console.log(text)
  };

  handleMajorElectivePlace = async (question) => {
    var text = ""
    var message
    text = " เรียนที่ " + question.place + " ครับ" + "\n"
    message = this.createChatBotMessage(
      text,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true
      })
    this.addMessageToState(message)
    // console.log(text)
  };

  //เกม --------------------------------------------
  handleFreeElectiveAll = async (question) => {
    var text = ""
    var message
    question.forEach(element => {
      text = "รหัสวิชา: " + element.course_code + "\n"
        + " ชื่อวิชา: " + element.name + "\n"
        + element.name_thai + "\n"
        + " รีวิว: " + element.link_description + "\n"
      message = this.createChatBotMessage(
        text,
        {
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      )
      this.addMessageToState(message)
      // console.log(text)
    })
  };

  handleFreeElective = async (question) => {
    var text = ""
    var message
    text = "รหัสวิชา: " + question.course_code + "\n"
        + " ชื่อวิชา: " + question.name + "\n"
        + question.name_thai + "\n"
        + " รีวิว: " + question.link_description + "\n"
    message = this.createChatBotMessage(
      text,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    )
    this.addMessageToState(message)
    // console.log(text)
  };

  //เกม ----------------------------------------
  handleWhretoStudyAll = async (question) => {
    var text = ""
    var message
    question.forEach(element => {
      text = " สถานที่: " + element.building + "\n"
        + " ห้อง: " + element.room + "\n"
        + " Location: " + element.location + "\n"
      message = this.createChatBotMessage(
        text,
        {
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      )
      this.addMessageToState(message)
      // console.log(text)
    })
  };

  handleWhretoStudy = async (question) => {
    var text = ""
    var message
    text = " ห้อง: " + question.room + "\n"
      + " อยู่ที่ " + question.building + " ครับ\n"
      + " Location: " + question.location + "\n"
    message = this.createChatBotMessage(
      text,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };


  //-------------------------------------------------
  handleAllProfesser = (info) => {
    var text = ""
    var message
    info.forEach(element => {
      text = " Name: " + element.name + "\n"
        + "location : " + element.location + "\n"
        + "Address: " + element.address + "\n"
        + "Time: " + element.time + "\n"
      message = this.createChatBotMessage(
        text,
        {
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      )
      this.addMessageToState(message)
      console.log(text)
    })
  };

  handleProfesser = (info) => {
    var text = ""
    var message
    info.forEach(element => {
      text = " Name: " + element.name + "\n"
        + " location : " + element.location + "\n"
        + " Address: " + element.address + "\n"
        + " Time: " + element.time
      message = this.createChatBotMessage(
        text,
        {
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      )
      this.addMessageToState(message)
      console.log(text)
    })
  };
  handleBachelorCurriculum() {
    let message1
    message1 = this.createChatBotMessage(
      "หลักสูตรปริญญาตรี",
      {
        widget: "BachelorLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );
    this.addMessageToState(message1)
  }

  handleDegreeCurriculum(degree) {
    let message1
    if (degree === 1) {
      message1 = this.createChatBotMessage(
        "หลักสูตรปริญญาตรี",
        {
          widget: "BachelorLink",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
    } else if (degree === 2) {
      message1 = this.createChatBotMessage(
        "หลักสูตรปริญญาโท",
        {
          widget: "MasterLink",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
    } else if (degree === 3) {
      message1 = this.createChatBotMessage(
        "หลักสูตรปริญญาเอก",
        {
          widget: "DoctorLink",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
    }
  }

  handleFBCPECMU = () => {
    const message = this.createChatBotMessage(
      "ติดต่อเพิ่มเติมทางเฟซบุ๊คเพจตามลิ้งค์ข้างล่าง",
      {
        widget: "FBLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );
    this.addMessageToState(message);
  }



  handleError = () => {
    const message = this.createChatBotMessage(
      "ขออภัยครับ ไม่มีข้อมูลในระบบ",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );
    this.addMessageToState(message);
  }

  handleMajorElectivePlace = async (question) => {
    var text = ""
    var message
    text = " เรียนที่ " + question.place + " ครับ" + "\n"
    message = this.createChatBotMessage(
      text,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true
      })
    this.addMessageToState(message)
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}
export default ActionProvider;

