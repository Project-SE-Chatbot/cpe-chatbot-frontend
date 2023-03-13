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

    //major
    if (
      message.includes("เมเจอร์") ||
      message.includes("ตัวเจอร์") ||
      message.includes("ตัวเมเจอร์") ||
      message.includes("วิชา") ||
      message.includes("ตัวเจอ") ||
      message.includes("ตัวเมเจอ")
    ) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      let responseData;
      let major = true;
      let url;
      if (major == true) {
        url = "http://localhost:5000/major";
        if (containsNumbers(message) === true) {
          let onlyNum = message.replace(/\D/g, "");
          // console.log("Number : "+ onlyNum)
          url = url + "/" + onlyNum.toString();
          // console.log("Url : "+ url)
        }
        //-----------------------------------fetch function
        await fetch(url, requestOptions)
          .then((response) => response.json())
          .then((result) => (responseData = result))
          .catch((error) => {
            console.log("No major");
            major = false;
            return;
          });
      }
      if (major == false) {
        url = "http://localhost:5000/major-elective";
        if (containsNumbers(message) === true) {
          let onlyNum = message.replace(/\D/g, "");
          // console.log("Number : "+ onlyNum)
          url = url + "/" + onlyNum.toString();
          console.log("Url : "+ url)
        }

        await fetch(url, requestOptions)
          .then((response) => response.json())
          .then((result) => (responseData = result))
          .catch((error) => {
            return this.actionProvider.handleError();
          });
      }

      // console.log(responseData)
      if (containsNumbers(message) === true) {
        if (major == true) {
          return this.actionProvider.handleMajor(responseData);
        } else if (major == false) {
          return this.actionProvider.handleMajorElec(responseData);
        }
      } else {
        return this.actionProvider.handleMajorAll(responseData);
      }
    }
    //free elective
    if (
      message.includes("ฟรี") ||
      message.includes("ตัวฟรี") ||
      message.includes("free elective")
    ) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      let responseData;
      let url = "http://localhost:5000/free-elective";

      if (containsNumbers(message) === true) {
        let onlyNum = message.replace(/\D/g, "");
        // console.log("Number : "+ onlyNum)
        url = url + "/" + onlyNum.toString();
        // console.log("Url : "+ url)
      }
      //-----------------------------------fetch function
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => (responseData = result))
        .catch((error) => {
          return this.actionProvider.handleError();
        });
      if (containsNumbers(message) === true) {
        return this.actionProvider.handleFreeElective(responseData);
      } else {
        return this.actionProvider.handleFreeElectiveAll(responseData);
      }
    }

    //place
    if (
      message.includes("ไหน") ||
      message.includes("ห้อง") ||
      message.includes("ตึกทั้งหมด")
    ) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      let responseData;
      let url = "http://localhost:5000/place";
      if (message.includes("ห้อง")) {
        if (containsNumbers(message) === true) {
          let onlyNum = message.replace(/\D+[^ -~]/g, "");

          console.log("Number : " + onlyNum);
          url = url + "/" + onlyNum.toString().replace(/ +/g, "");
          console.log("Url : " + url);
        }
      }
      //-----------------------------------fetch function
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => (responseData = result))
        .catch((error) => {
          return this.actionProvider.handleError();
        });

      if (containsNumbers(message) === true) {
        return this.actionProvider.handleWhretoStudy(responseData);
      } else {
        return this.actionProvider.handleWhretoStudyAll(responseData);
      }
    }

    //Teacher
    if (message.includes("อาจารย์") || message.includes("อ.")) {
      var test = {};
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      let url = "http://localhost:5000/teacher";
      let responseData;
      if (message.includes("ทั้งหมด")) {
        console.log(url);
      }
      if (message.includes("สันติ")) {
        url = "http://localhost:5000/teacher/รศ.ดร.สันติ พิทักษ์กิจนุกูร";
        console.log(url);
      } else if (message.includes("กานต์") || message.includes("กาน")) {
        url = "http://localhost:5000/teacher/ผศ.ดร.กานต์ ปทานุคม";
        console.log(url);
      } else if (message.includes("อัญญา")) {
        url =
          "http://localhost:5000/teacher/รศ.ดร.อัญญา อาภาวัชรุตม์ วีระประพันธ์";
        console.log(url);
      } else if (
        message.includes("จักรพงศ์") ||
        message.includes("จักรพงษ์") ||
        message.includes("ช้าง")
      ) {
        url = "http://localhost:5000/teacher/รศ.ดร.จักรพงศ์ นาทวิชัย";
        console.log(url);
      } else if (message.includes("เคน") || message.includes("Cosh")) {
        url = "http://localhost:5000/teacher/Kenneth Cosh, Ph.D., Assoc. Prof.";
        console.log(url);
      } else if (message.includes("นริศรา")) {
        url = "http://localhost:5000/teacher/รศ.ดร.นริศรา เอี่ยมคณิตชาติ";
        console.log(url);
      } else if (message.includes("ศักดิ์กษิต")) {
        url = "http://localhost:5000/teacher/รศ.ดร.ศักดิ์กษิต ระมิงค์วงศ์?";
        console.log(url);
      } else if (message.includes("สรรพวรรธน์")) {
        url = "http://localhost:5000/teacher/รศ.ดร.สรรพวรรธน์ กันตะบุตร";
        console.log(url);
      } else if (message.includes("ศันสนีย์") || message.includes("จุ๊บ")) {
        url =
          "http://localhost:5000/teacher/รศ.ดร.ศันสนีย์ เอื้อพันธ์วิริยะกุล";
        console.log(url);
      } else if (message.includes("ตรัสพงศ์") || message.includes("ตรัส")) {
        url = "http://localhost:5000/teacher/รศ.ดร.ตรัสพงศ์ ไทยอุปถัมภ์";
        console.log(url);
      } else if (message.includes("โดม")) {
        url = "http://localhost:5000/teacher/ผศ.โดม โพธิกานนท์";
        console.log(url);
      } else if (message.includes("กำพล") || message.includes("แบงค์")) {
        url = "http://localhost:5000/teacher/ผศ.ดร.กำพล วรดิษฐ์";
        console.log(url);
      } else if (message.includes("เกษมสิทธิ์") || message.includes("หนึ่ง")) {
        url = "http://localhost:5000/teacher/ผศ.ดร.เกษมสิทธิ์ ตียพันธ์";
        console.log(url);
      } else if (message.includes("ลัชนา")) {
        url = "http://localhost:5000/teacher/ผศ.ดร.ลัชนา ระมิงค์วงศ์";
        console.log(url);
      } else if (message.includes("นวดน") || message.includes("เอ็ม")) {
        url = "http://localhost:5000/teacher/ผศ.ดร.นวดนย์ คุณเลิศกิจ";
        console.log(url);
      } else if (message.includes("ภาสกร")) {
        url = "http://localhost:5000/teacher/ผศ.ดร.ภาสกร แช่มประเสริฐ";
        console.log(url);
      } else if (message.includes("ปฏิเวธ") || message.includes("เบส")) {
        url = "http://localhost:5000/teacher/ผศ.ดร.ปฏิเวธ วุฒิสารวัฒนา";
        console.log(url);
      } else if (message.includes("ธนาทิพ")) {
        url = "http://localhost:5000/teacher/ผศ.ดร.ธนาทิพย์ จันทร์คง";
        console.log(url);
      } else if (message.includes("ยุทธพง")) {
        url = "http://localhost:5000/teacher/ผศ.ดร.ยุทธพงษ์ สมจิต";
        console.log(url);
      } else if (message.includes("อานัน") || message.includes("โรเจอร์")) {
        url = "http://localhost:5000/teacher/อ.ดร.อานันท์ สีห์พิทักษ์เกียรติ";
        console.log(url);
      } else if (message.includes("ชิน")) {
        url = "http://localhost:5000/teacher/อ.ดร.ชินวัตร อิศราดิสัยกุล";
        console.log(url);
      } else if (
        message.includes("Myo") ||
        message.includes("Thida") ||
        message.includes("เหมี่ยว")
      ) {
        url = "http://localhost:5000/teacher/Myo Thida, Ph.D.";
        console.log(url);
      } else if (message.includes("นัน")) {
        url = "http://localhost:5000/teacher/อ.ดร.ณัฐนันท์ พรหมสุข";
        console.log(url);
      } else if (message.includes("พฤษ")) {
        url = "http://localhost:5000/teacher/อ.ดร.พฤษภ์ บุญมา";
        console.log(url);
      }
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => (responseData = result))
        .catch((error) => {
          return this.actionProvider.handleError();
        });
      if (!message.includes("ทั้งหมด")) {
        return this.actionProvider.handleProfesser(responseData);
      } else {
        return this.actionProvider.handleAllProfesser(responseData);
      }
    }
    //degree
    if (message.includes("หลักสูตร")) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      let responseData;
      let url = "http://localhost:5000/degree";
      if (
        message.includes("ปตรี") ||
        message.includes("ป.ตรี") ||
        message.includes("ปริญญาตรี")
      ) {
        url = "http://localhost:5000/degree/หลักสูตรปริญญาตรี";
        // return this.actionProvider.handleBachelorCurriculum();
      } else if (
        message.includes("ปโท") ||
        message.includes("ป.โท") ||
        message.includes("ปริญญาโท")
      ) {
        url = "http://localhost:5000/degree/หลักสูตรปริญญาโท";
        // return this.actionProvider.handleDegreeCurriculum(2);
      } else if (
        message.includes("ปเอก") ||
        message.includes("ป.เอก") ||
        message.includes("ปริญญาเอก")
      ) {
        url = "http://localhost:5000/degree/หลักสูตรปริญญาเอก";
        // return this.actionProvider.handleDegreeCurriculum(3);
      }
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => (responseData = result))
        .catch((error) => {
          return this.actionProvider.handleError();
        });
      if (
        message.includes("ตรี") ||
        message.includes("โท") ||
        message.includes("เอก")
      ) {
        return this.actionProvider.handleDegree(responseData);
      } else {
        return this.actionProvider.handleAllDegree(responseData);
      }
    }

    //Register
    if (
      message.includes("ทีแคส") ||
      message.includes("TCAS") ||
      message.includes("วิศวะคอม") ||
      message.includes("เข้าเรียน") ||
      message.includes("สมัครเรียน") ||
      message.includes("รอบ")
    ) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      let responseData;
      let url = "http://localhost:5000/register/วิศวะคอม TCAS66";

      if (containsNumbers(message) === true) {
        let onlyNum = message.replace(/\D/g, "");
        console.log("Number : " + onlyNum);
        if (onlyNum == 1) {
          url =
            "http://localhost:5000/register/วิศวะคอม TCAS รอบที่1 ประจำปีการศึกษา2566";
          console.log(url);
        } else if (onlyNum == 2) {
          url =
            "http://localhost:5000/register/วิศวะคอม TCAS รอบที่2 ประจำปีการศึกษา2566";
          console.log(url);
        }
      }
      //-----------------------------------fetch function
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => (responseData = result))
        .catch((error) => {
          return this.actionProvider.handleError();
        });

      if (
        message.includes("ทีแคส") ||
        message.includes("TCAS") ||
        message.includes("วิศวะคอม") ||
        message.includes("เข้าเรียน") ||
        message.includes("สมัครเรียน")
      ) {
        return this.actionProvider.handleRegister(responseData);
      }
    }

    return this.actionProvider.handleNotMatchKeyword();
  }
}

export default MessageParser;
