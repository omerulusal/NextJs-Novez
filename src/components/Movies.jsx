"use client" //Hook kullandığımdan use client ekledim
import Image from 'next/image'
import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import mov from "../components/Movies.module.css"
import { useRouter } from 'next/navigation'


const Movies = ({ dt }) => {
    //app klasöründeki page.jsx'den props olarak aldığım
    const router = useRouter();
    return (
        // dt?.id 
        <div onClick={() => router.push(`/movie/${dt?.id}`)} className={`d-inline-block position-relative `} >
            {/* dive tıkladığımda url adresinin sonuna filmin idsini ekler */}
            <Image alt='image' style={{ objectFit: 'cover' }}  className={`d-inline`} width={315.8} height={200} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} />
            {/* backdrop_path yoksa poster_path özelliği kullanılarak resmin kaynağı belirlenir. */}
            <div className={`position-absolute p-2 bottom-0 ${mov.hvr}`} >
                <div className={`fs-6 fw-bold`}>
                    {dt?.title} - {dt?.vote_average}
                    {/* page.jsx ten gelen filmin başlığını ve puanını ekledim */}
                </div>
                <div className="fs-6">
                    {dt?.popularity}
                </div>
            </div>
        </div>
    );
}

export default Movies