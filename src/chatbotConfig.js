import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
import GlobalStatistics from "./widgets/GlobalStatistics";
import LocalStatistics from "./widgets/LocalStatistics";
import Contact from "./widgets/Contact";
import MedicineDelivery from "./widgets/MedicineDelivery";
import CoBotAvatar from "./CoBotAvatar";

const config = {
    lang: "no",
    botName: "CPEBot",
    customStyles: {
      botMessageBox: {
        backgroundColor: "#0f4ff5"
      },
      chatButton: {
        backgroundColor: "#0fff55"
      }
    },
    initialMessages: [
      createChatBotMessage(`สวัสดี เราCPE botนะครับ มีอะไรให้ช่วยไหมครับ`),
      createChatBotMessage(
        "Here's a quick overview of what I can help you with. You can also type in.",
        {
          withAvatar: false,
          delay: 400,
          widget: "overview"
        }
      )
    ],
    state: {},
    customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
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
      }
    ]
}

export default config