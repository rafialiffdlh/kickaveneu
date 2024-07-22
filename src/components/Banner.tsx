import React from "react";

const Banner: React.FC = () => {
  return (
    <div className=" text-white text-center py-8 ">
      <img src="https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6ImNvbGxlY3Rpb25zLzMxNS9jMTBmMmRkMTI3YjE2NTcyYmVkMDM1YjlkN2Q1ZDgyMC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAwfSwid2VicCI6eyJxdWFsaXR5IjoxMDB9fX0=" />

      <div className="absolute inset-0 flex flex-col justify-center items-center"></div>
    </div>
  );
};

export default Banner;
