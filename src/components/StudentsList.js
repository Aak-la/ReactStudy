import React from 'react'
import Student from './Student'

export default function StudentsList(props) {
const stu =props.stus.map((item)=><Student  key={item.id} {...item}/>)
    return (
        <ul>
            {stu}
        </ul>
    )
}
