class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  async parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.includes("talk") ||
      message.includes("speak") ||
      message.includes("real person") ||
      message.includes("call") ||
      message.includes("emergency") ||
      message.includes("contact")
    ) {
      return this.actionProvider.handleContact();
    }

    if (
      message.includes("stats") ||
      message.includes("statistics") ||
      message.includes("deaths")
    ) {
      return [
        this.actionProvider.handleGlobalStats(),
        this.actionProvider.handleLocalStats(),
      ];
    }

    if (message.includes("medicine") || message.includes("delivery")) {
      return this.actionProvider.handleMedicine();
    }

    if (
      message.includes("สวัสดี") ||
      message.includes("หวัดดี") ||
      message.includes("ไง")
    ) {
      return this.actionProvider.handleGreeting();
    }

    if (message.includes("thanks") || message.includes("thank you")) {
      return this.actionProvider.handleThanks();
    }

    if (message.includes("ตัวเจอร์") || message.includes("ตัวเมเจอร์")) {
      var test = {};
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch("http://localhost:3000/major", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          test = result;
        })
        .catch((error) => console.log("error", error));
        
      return this.actionProvider.handleMajorElective(test);
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
