import React, { useEffect, useState } from "react";

const Loading = (props) => {
  const [dots, setDots] = useState(1);
  useEffect(() => {
    setInterval(() => setDots((cur) => (cur % 3) + 1), 350);
  }, []);

  return <div>Loading{".".repeat(dots)}</div>;
};

export default Loading;
