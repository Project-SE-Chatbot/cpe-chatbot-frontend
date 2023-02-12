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

      handleMajorElective = (info) => {
        var text = ""
        var message
        info.forEach(element => {
          text = "Course: " + element.course_code + " Name: " + element.name + " Teacher: " + element.name_teacher + " Term: " + element.term + " Place: " + element.place + " Time: " + element.time
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
    
        this.addMessageToState(message);
      };

      handleFreeElective = () => {
        const message = this.createChatBotMessage(
          "รายชื่อตัวฟรี",
          {
            loading: true,
            terminateLoading: true,
            withAvatar: true
          }
        );
    
        this.addMessageToState(message);
      };

      handleWhretoStudy = () => {
        const message = this.createChatBotMessage(
          "ตึก30ปี ชั้น5 ห้อง521",
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
          text = " Name: " + element.name  + "location : " + element.location + "Address: " + element.address + "Time: " + element.time
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
          text = " Name: " + element.name  + " location : " + element.location + " Address: " + element.address + " Time: " + element.time
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
        if(degree == 1){
          message1 = this.createChatBotMessage(
            "หลักสูตรปริญญาตรี",
            {
              widget: "BachelorLink",
              loading: true,
              terminateLoading: true,
              withAvatar: true
            }
          );
        }else if(degree == 2){
          message1 = this.createChatBotMessage(
            "หลักสูตรปริญญาโท",
            {
              widget: "MasterLink",
              loading: true,
              terminateLoading: true,
              withAvatar: true
            }
          );
        }else if(degree == 3){
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