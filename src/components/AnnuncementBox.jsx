import React from "react";

import LoudSpeaker from "../assets/loudspeaker.png";

const AnnuncementBox = () => {
  const announcements = [
    {
      id: 1,
      auther: "IT Admin",
      dateTime: "04 May 2024 2:37PM",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      auther: "HR Group",
      dateTime: "23 Sep 2024 2:37PM",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 3,
      auther: "Security",
      dateTime: "04 May 2024 2:37PM",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];
  return (
    <div className="bg-[#F2F4FD] p-3 rounded-xl">
      <div className="flex gap-2">
        <img className="h-5 w-5" src={LoudSpeaker} alt="loudspeaker" />
        <p className="font-normal text-[14px] mb-3">Announcements</p>
      </div>

      <div className="h-60 overflow-y-auto">
        {announcements.map((announcement) => (
          <div className="bg-white mb-2 rounded-md p-2" key={announcement.id}>
            <div className="flex justify-between mb-2">
              <p className="text-[12px]">{announcement.auther}</p>
              <p className="text-[12px] text-gray-400 font-light">
                {announcement.dateTime}
              </p>
            </div>
            <p className="text-[12px] font-light">{announcement.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnuncementBox;
