import React from "react";

import Link from "../Link";

const MasterLink = () => {
  const getUrl = () => {
    return `https://www.cpe.eng.cmu.ac.th/curriculum-thai.php?view_id=MENG-2564BE`;
  };

  return (
    <Link url={getUrl()} title={"แผนการเรียนหลักสูตรวิศวกรรมศาสตรมหาบัณฑิต วิศวกรรมคอมพิวเตอร์ หลักสูตรปรับปรุง 2564"} />
  );
};

export default MasterLink;
