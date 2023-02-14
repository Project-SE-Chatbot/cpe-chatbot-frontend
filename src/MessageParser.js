class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  

  async parse(message) {
    message = message.toLowerCase();
    console.log(message);

    function containsNumbers(str) {
      return /\d/.test(str);
    }

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

    
    if (message.includes("ตัวเจอร์") || message.includes("ตัวเมเจอร์") || message.includes("วิชา"))  {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let responseData
        let url = "http://localhost:5000/major"
        if(containsNumbers(message) === true){
          let onlyNum = message.replace(/\D/g, "")
          // console.log("Number : "+ onlyNum)
          url =  url+"/"+ onlyNum.toString()
          // console.log("Url : "+ url)
        }
        //-----------------------------------fetch function
        await fetch(url, requestOptions)
        .then(response =>  response.json())
        .then(result => responseData = result)
        .catch(error => console.log('error', error));
        console.log(responseData)
        if(containsNumbers(message) === true){
          if(message.includes("ไหน")){
            return this.actionProvider.handleMajorElectivePlace(responseData)
          }else{
            return this.actionProvider.handleMajorElective(responseData)
          }
        }else{
          return this.actionProvider.handleMajorElectiveAll(responseData)
        }
      ;
    }

    if (message.includes("ตัวฟรี") || message.includes("free elective")) {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        let responseData
        let url = "http://localhost:5000/free-elective"

        if(containsNumbers(message) === true){
          let onlyNum = message.replace(/\D/g, "")
          // console.log("Number : "+ onlyNum)
          url =  url+"/"+ onlyNum.toString()
          // console.log("Url : "+ url)
        }
        //-----------------------------------fetch function
        await fetch(url, requestOptions)
        .then(response =>  response.json())
        .then(result => responseData = result)
        .catch(error => console.log('error', error));
        if(containsNumbers(message) === true){
          return this.actionProvider.handleFreeElective(responseData)
        }else{
          return this.actionProvider.handleFreeElectiveAll(responseData)
        }
    }

    if (message.includes("ไหน") ||  message.includes("ห้อง") || message.includes("ตึกทั้งหมด")){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
        
      let responseData
      let url = "http://localhost:5000/place"
      if(message.includes("ห้อง")){
        if(containsNumbers(message) === true){
          let onlyNum = message.replace(/\D[^ -~]/g,"")
  
          console.log("Number : "+ onlyNum)
          url =  url+"/"+ onlyNum.toString().replace(/ +/g,"")
          console.log("Url : "+ url)
        }
      }
      //-----------------------------------fetch function
      await fetch(url, requestOptions)
      .then(response =>  response.json())
      .then(result => responseData = result)
      .catch(error => console.log('error', error));
      
      if(message.includes("ห้อง")){
        return this.actionProvider.handleWhretoStudy(responseData);
      }
      else{
        return this.actionProvider.handleWhretoStudyAll(responseData);
      }
    }

    if (message.includes("อาจารย์") || message.includes("อ.")) {
      if (message.includes("ทั้งหมด") || message.includes("ทุกคน")){
        var test = {};
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch("http://localhost:5000/teacher", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          test = result;
        })
        .catch((error) => console.log("error", error));
      return this.actionProvider.handleAllProfesser(test);
      }else{

      }
    }
    if (message.includes("หลักสูตร")) {
      if (message.includes("ปตรี") || message.includes("ป.ตรี") || message.includes("ปริญญาตรี")) {
        return this.actionProvider.handleDegreeCurriculum(1);
      }else if(message.includes("ปโท") || message.includes("ป.โท") || message.includes("ปริญญาโท")){
        return this.actionProvider.handleDegreeCurriculum(2);
      }else if(message.includes("ปเอก") || message.includes("ป.เอก") || message.includes("ปริญญาเอก")){
        return this.actionProvider.handleDegreeCurriculum(3);
      }
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}


export default MessageParser;