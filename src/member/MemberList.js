import React, { useEffect } from "react";
import Member from "../components/Member"
import { useState } from 'react';
import axios from "axios";

const MemberList = () => {

    const [members, setMembers] = useState([]);
   
      useEffect(()=>{
        axios.get("http://localhost:8080/api/memberlist")
        .then((res) => {
            console.log("data : ", res.data);
            setMembers(res.data);
          })
          .catch((error) => {
            console.log("오류 발생!!!!!!!!!!!!!!!!!!!");
            console.log(error);
          })
        }, []); 
          //초기화  
 //1회 수행 
    return (
        <div>
          <h1>회원 리스트</h1>
          <div>
            {members.map((member) => (            
                <Member key={member.id} member={member} />
            ))}
          </div>
        </div>
      );
    };

export default MemberList;
