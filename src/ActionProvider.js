

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
      }

      handleOptions = (options) => {
        const message = this.createChatBotMessage(
          "How can I help you? Below are some possible options.",
          {
            widget: "overview",
            loading: true,
            terminateLoading: true,
            ...options
          }
        );
    
        this.addMessageToState(message);
      };
    
      handleGlobalStats = () => {
        const message = this.createChatBotMessage(
          "Here's the latest global stats.",
          {
            widget: "globalStatistics",
            loading: true,
            terminateLoading: true,
            withAvatar: true
          }
        );
    
        this.addMessageToState(message);
      };
    
      handleLocalStats = () => {
        const message = this.createChatBotMessage(
          "Here's the latest stats in Sri Lanka.",
          {
            widget: "localStatistics",
            loading: true,
            terminateLoading: true,
            withAvatar: true
          }
        );
    
        this.addMessageToState(message);
      };
    
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

      handleMajorElectiveAll = async(question) => {
 		    var text = ""
        var message
        question.forEach(element => {
          text = "รหัสวิชา: " + element.course_code + "\n" 
          + " ชื่อวิชา: " + element.name + "\n" 
          + " ผู้สอน: " + element.name_teacher + "\n" 
          + " ภาคเรียนที่เปิดสอน: " + element.term + "\n" 
          + " สถานที่: " + element.place + "\n" 
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

      handleMajorElective = async(question) => {
        var text = ""
        var message
        text = "รหัสวิชา: " + question.course_code + "\n" 
          + " ชื่อวิชา: " + question.name + "\n" 
          + " ผู้สอน: " + question.name_teacher + "\n" 
          + " ภาคเรียนที่เปิดสอน: " + question.term + "\n" 
          + " สถานที่: " + question.place + "\n" 
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

     handleMajorElectivePlace = async(question) => {
      var text = ""
      var message
      text = "รหัสวิชา: " + question.course_code + "\n" 
       + " ชื่อวิชา: " + question.name + "\n" 
       + " สถานที่: " + question.place + "\n" 
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
      handleFreeElectiveAll = async(question) => {
        var text = ""
        var message
        question.forEach(element => {
          text = "รหัสวิชา: " + element.id_free_elective + "\n" 
         + " ชื่อวิชา: " + element.name + "\n" 
         + " รีวิว: " + element.review + "\n" 
         + " คณะ: " + element.major + "\n" 
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

      handleFreeElective = async(question) => {
        var text = ""
        var message
          text = "รายวิชา: " + question.id_free_elective + "\n" 
         + " ชื่อวิชา: " + question.name + "\n" 
         + " รีวิว: " + question.review + "\n" 
         + " คณะ: " + question.major + "\n"
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
      handleWhretoStudyAll = async(question) => {
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

      handleWhretoStudy = async(question) => {
        var text = ""
        var message
        text = " สถานที่: " + question.building + "\n" 
         + " ห้อง: " + question.room + "\n" 
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
          text = " Name: " + element.name  + "\n" 
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

      handleDegreeCurriculum(degree)  {
        let message1
        if(degree === 1){
          message1 = this.createChatBotMessage(
            "หลักสูตรปริญญาตรี",
            {
              widget: "BachelorLink",
              loading: true,
              terminateLoading: true,
              withAvatar: true
            }
          );
        }else if(degree === 2){
          message1 = this.createChatBotMessage(
            "หลักสูตรปริญญาโท",
            {
              widget: "MasterLink",
              loading: true,
              terminateLoading: true,
              withAvatar: true
            }
          );
        }else if(degree === 3){
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
        
    
        this.addMessageToState(message1);
      };
    
      addMessageToState = (message) => {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, message]
        }));
      };
 }
 
 export default ActionProvider;