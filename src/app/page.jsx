// "use client"
import Movies from '@/components/Movies'
import React from 'react'

const Page = async () => {
    const options = { revalidate: 10000 };
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=152011077666d008909e696b7a81f12c&language=en-US&page=1`,
        options
    )
    const data = await res.json()
    console.log(data, "FİLMLERİN VERİSİ")
    return (
        <div>
            {
                data?.results?.map((dt, i) => {
                    return <Movies key={i} dt={dt} />
                })
                // data adını verdiğim değişkenin elemanı olan her bir filmi Movies componentinin içerisine ekler.
            }
        </div>
    )
}

export default Page

