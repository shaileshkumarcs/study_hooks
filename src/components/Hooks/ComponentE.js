import React, { useContext } from "react";
import ComponentF from "./ComponentF";

import { UserContext, ChannelContext } from "../../App";

function ComponentE() {
  const name = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {name} === {channel}
    </div>
  );
}

export default ComponentE;
