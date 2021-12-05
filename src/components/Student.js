import React from 'react'

export default function Student({name,sex,birth}) {
    return (
        <li>
            [姓名]{name}
            [年龄]{sex===1?"男":"女"}
            [出生日期]{birth}
        </li>
    )
}
