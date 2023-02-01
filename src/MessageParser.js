class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
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
        this.actionProvider.handleLocalStats()
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
      return this.actionProvider.handleMajorElective();
    }

    if (message.includes("ตัวฟรี") || message.includes("free elective")) {
      return this.actionProvider.handleFreeElective();
    }

    if (message.includes("เรียน") ) {
      if (message.includes("ที่ไหน") ){return this.actionProvider.handleWhretoStudy();} 
    }

    if (message.includes("อาจารย์") || message.includes("อ.")) {
      return this.actionProvider.handleProfesser();
    }
    if (message.includes("หลักสูตร")) {
      if (message.includes("ปตรี") || message.includes("ป.ตรี") || message.includes("ปริญญาตรี")) {
        return this.actionProvider.handleDegreeCurriculum();
      }else if(message.includes("ปโท") || message.includes("ป.โท") || message.includes("ปริญญาโท")){
        return this.actionProvider.handleDegreeCurriculum();
      }else if(message.includes("ปเอก") || message.includes("ป.เอก") || message.includes("ปริญญาเอก")){
        return this.actionProvider.handleDegreeCurriculum();
      }
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}


export default MessageParser;