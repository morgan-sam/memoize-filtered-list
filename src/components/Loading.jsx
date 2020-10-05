import React, { useEffect, useState } from "react";

const Loading = (props) => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDots((cur) => (cur % 3) + 1);
    }, 350);
    return () => clearInterval(id);
  }, []);

  return <div>Loading{".".repeat(dots)}</div>;
};

export default Loading;
