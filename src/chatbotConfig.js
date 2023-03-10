import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
import GlobalStatistics from "./widgets/GlobalStatistics";
import LocalStatistics from "./widgets/LocalStatistics";
import Contact from "./widgets/Contact";
import MedicineDelivery from "./widgets/MedicineDelivery";
import CoBotAvatar from "./CoBotAvatar";
import Reaction from "./widgets/reaction";
import CustomChatbotMessage from "./chatbotmessage/CustomChatbotMessage";
import BachelorLink from "./widgets/degreelink/BachelorDegrees";
import MasterLink from "./widgets/degreelink/MasterDegrees";
import DoctorLink from "./widgets/degreelink/DoctorDegrees";
import CustomUserMessage from "./chatbotmessage/CustomUSerMessage";
import CPEfbLink from "./widgets/cpefbLink";
import CustomHeader from "./header/CustomHeader";

const config = {
    lang: "no",
    botName: "CPEBot",
    customStyles: {
      botMessageBox: {
        backgroundColor: "#0f4ff5"
      },
      chatButton: {
        backgroundColor: "#255ee2"
      }
    },
    initialMessages: [
      createChatBotMessage(
        "สวัสดี เราCPE botนะครับ มีอะไรให้ช่วยไหมครับ",
        {
          withAvatar: true,
          delay: 400,
          widget: "overview"
        }
      )
    ],
    state: {},
    customComponents: { 
      header: () => <CustomHeader/>,
      botAvatar: (props) => <CoBotAvatar {...props} />,
      userAvatar: (props) => <div style={{ visibility: "hidden" }}></div>,
      botChatMessage: (props) => <CustomChatbotMessage {...props} />,
      userChatMessage: (props) => <CustomUserMessage {...props} />
     },
    widgets: [
      {
        widgetName: "overview",
        widgetFunc: (props) => <Overview {...props} />,
        mapStateToProps: ["messages"]
      },
      {
        widgetName: "globalStatistics",
        widgetFunc: (props) => <GlobalStatistics />
      },
      {
        widgetName: "localStatistics",
        widgetFunc: (props) => <LocalStatistics />
      },
      {
        widgetName: "emergencyContact",
        widgetFunc: (props) => <Contact />
      },
      {
        widgetName: "medicineDelivery",
        widgetFunc: (props) => <MedicineDelivery />
      },
      {
        widgetName: "Reaction",
        widgetFunc: (props) => <Reaction />
      },
      {
        widgetName: "BachelorLink",
        widgetFunc: (props) => <BachelorLink />
      },
      {
        widgetName: "MasterLink",
        widgetFunc: (props) => <MasterLink />
      },
      {
        widgetName: "DoctorLink",
        widgetFunc: (props) => <DoctorLink />
      },
      {
        widgetName: "FBLink",
        widgetFunc: (props) => <CPEfbLink/>
      }
    ]
}

export default config