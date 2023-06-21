import React from "react";

function CardImage({img, name, job}) {
  return (
    <div className="flex flex-col">
      <img src={img} className="w-[150px] md:w-[250px] h-[220px] md:h-[350px] object-cover" alt={job} />
      <h3 className="pt-2 font-bold">{name}</h3>
      <div className="absolute translate-x-[116px] md:translate-x-56 translate-y-11 items-start whitespace-nowrap">
        <p className="rotate-90 flex justify-start items-start ">{job}</p>
      </div>
    </div>
  );
}

export default CardImage;
