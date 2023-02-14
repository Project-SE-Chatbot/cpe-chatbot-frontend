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
      name: "เกี่ยวกับภาควิชา",
      handler: props.actionProvider.handleContact,
      id: 3
    }
    // ,
    // {
    //   name: "Clinical medicine delivery",
    //   handler: props.actionProvider.handleMedicine,
    //   id: 4
    // }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
