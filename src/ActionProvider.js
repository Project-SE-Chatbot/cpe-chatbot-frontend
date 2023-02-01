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
            widget: "Reaction",
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

      handleMajorElective = () => {
        const message = this.createChatBotMessage(
          "เรียนอะไรก็เรียนเถอะ",
          {
            widget: "Reaction",
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
            widget: "Reaction",
            loading: true,
            terminateLoading: true,
            withAvatar: true
          }
        );
    
        this.addMessageToState(message);
      };
    
      addMessageToState = (message) => {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, message]
        }));
      };
 }
 
 export default ActionProvider;