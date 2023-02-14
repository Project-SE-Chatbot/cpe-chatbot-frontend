import React from "react";

import Link from "./Link";

const CPEfbLink = () => {
  const getUrl = () => {
    return `https://www.facebook.com/DeptCPECMU/?locale=th_TH`;
  };

  return (
    <Link url={getUrl()} title={"Facebook : Department of Computer Engineering, Chiang Mai University"} />
  );
};

export default CPEfbLink;
