import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "หลักสูตรปริญญาตรีปี 2563",
      handler: props.actionProvider.handleBachelorCurriculum,
      id: 1
    },
    {
      name: "แนะนำตัวเมเจอร์",
      handler: props.actionProvider.handleMajorElectiveAll,
      id: 2
    },
    {
      name: "ติดต่อเพิ่มเติม",
      handler: props.actionProvider.handleFBCPECMU,
      id: 3
    }
    // ,
    // {
    //   name: "Clinical medicine delivery",
    //   handler: props.actionProvider.handleMedicine,
    //   id: 4
    // }
  ];
  return <Options options={options} title="FAQ" {...props} />;
};

export default GeneralOptions;
