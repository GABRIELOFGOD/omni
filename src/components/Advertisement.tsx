
import { useState, useEffect } from 'react';

const Advertisement = () => {
  const contents = [
    "Ad Content 1",
    "Ad Content 2",
    "Ad Content 3",
    "Ad Content 4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="text-center">
        {contents[currentIndex]}
      </div>
    </div>
  );
}

export default Advertisement;