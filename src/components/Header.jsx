"use client"
import Link from 'next/link'//Yönlendirme işlemleri için
import React, { useState } from 'react'//hook
import { BiSearch } from "react-icons/bi"
import { useRouter } from 'next/navigation'//yönlendirme işlemleri için

const Header = () => {
    const [keyw, setKeyw] = useState("")
    const router = useRouter()
    const ara = (e) => {
        if (e.key === "Enter" && keyw.length >= 3) {
            //dışarıdan gelen değerin key'i Enter ise ve keyw'in uzunkuğu >=3 ise...  
            router.push(`/ara/${keyw}`)
            //keyw router adresine(url'e) eklenecektir.
        }
    }


    return (
        <div style={{ backgroundColor: "#828792" }}>
            <div className="g-md-2 d-inline px-md-5 mx-sm-2">
                <Link href={"/"}>{/* Resme(Logo) tıklanında ana dizine gidecektir.  */}
                    <img src="Novez.png" className='img-fluid p-sm-4 d-inline-block' width={150} />
                </Link>
                <input onKeyDown={ara} onClick={(e) => setKeyw(e.target.value)} type="text" placeholder='Film adı girin' className='form-control w-75 d-inline' />
                <BiSearch size={30} style={{ marginLeft: "-40px" }} />
            </div>

        </div>
    )
}

export default Header
