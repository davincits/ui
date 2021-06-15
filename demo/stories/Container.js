import React, { useState } from "react";

const Container = ({ children, width }) => {
  const [value, setValue] = useState();
  return (
    <div className="content" style={{ width }}>
      {children({ value, onChange: setValue })}
    </div>
  );
};

export default Container;
