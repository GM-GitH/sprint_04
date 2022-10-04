import React from "react";
import { useParams } from "react-router-dom";
import { jsonData as guests } from "../json/jsonData";

const GuestDetails = (guests) => {
  const { id } = useParams();
  const guest = guests.find((guest) => guest.id === id);
  console.log(guest);
  return (
    <>
      <img src={guest.Avatar} alt="" />
      <h1>{`${guest.first_name} ${guest.last_name}`}</h1>
      <h3>About me:</h3>
      <p>{`Guest ID: ${guest.id} 
            Date Start: ${guest.date_start} 
            Time Start: ${guest.time_start} 
            Date End: ${guest.date_end} 
            Time End: ${guest.time_end} 
            Notes: ${guest.notes} 
            Special Request: ${guest.special_request} 
            Room ID: ${guest.room_id} 
            Email: ${guest.email} 
            Status: ${guest.status} 
            Gender: ${guest.gender} 
            Phone: ${guest.phone} 
            `}</p>
    </>
  );
};

export default GuestDetails;
