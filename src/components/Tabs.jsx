"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from "next/navigation"
const Tabs = () => {
    const searchParams = useSearchParams() 
    const genre = searchParams.get("category")
    /*sayfanın URL'sinde "category" adlı bir sorgu parametresi(/?category=) varsa, bunun değerini genre değişkenine atar. 
    Eğer "category" sorgu parametresi yoksa, genre değişkeni null olacaktır. */
    const tabs = [
        {
            name: "En Populer",
            url: "popular"
        },
        {
            name: "En Yeni",
            url: "latest"
        },
        {
            name: "Yakında",
            url: "upcoming"
        }
    ]
    return (
        <div className='text-center px-5 ' style={{ backgroundColor: "#828792" }}>
            {tabs.map((tab, ind) => (
                <Link href={`/?category=${tab.url}`} key={ind}
                    className={`px-3 text-decoration-none text-dark  ${tab.url === genre ? "fw-bold bg-light rounded" : ""}`}>
                    {tab.name}
                </Link>
            ))}

            {/* tabler altındaki url kısımlarına göre yönlendirme işlemi yapılır 
            dinamik yönlendirme yapacağımdan /? ile query olduğunu belirttim */ }
        </div>
    )
}

export default Tabs

// https://example.com/?genre=popular