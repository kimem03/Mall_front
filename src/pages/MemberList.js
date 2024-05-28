import React, { useEffect, useState } from 'react'
import Member from '../components/Member'

export default function MemberList() {

  const [members, setMembers] = useState([]);

  useEffect(()=> {
    // 초기화
    
  }, []);

  return (
    <div>
        <h1>회원 리스트 페이지</h1>
        {
          members.map((member) => {
            <Member key={member.id} member={member} />
          })
        }
    </div>
  )
}
