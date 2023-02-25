import Image from 'next/image'
import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=152011077666d008909e696b7a81f12c&language=en-US&page=1`)
    // getMovie adlı async fonksiyon, bir film id'si alır,API üzerinden ilgili film hakkında bilgi getirir.
    return await res.json()
}

const Page = async ({ params }) => {
    // Page adlı fonksiyonumla tekil film sayfasını oluşturdum
    const id = params.id;
    const mvDetail = await getMovie(id)
    console.log(mvDetail, "TEK SAYFADA GORUNECEK FILMLER")
    return (
        <div className='position-relative img-fluid' >
            <Image style={{ objectFit: 'cover' }} className={`d-inline`} width={1280} height={481} src={`https://image.tmdb.org/t/p/original/${mvDetail?.backdrop_path || mvDetail?.poster_path}`} />
            {/* buradaki url veri olaylarını tam olarak anlamak için tmdb api dökümanlarını incelemek gerekir */}
            <div className={`position-absolute bottom-0`} >
                <div className="fs-4 my-5 text-white fw-bold ">{mvDetail?.title}</div>
                <div className="fs-5 my-5 text-white ">{mvDetail?.overview}</div>
                <div className="fs-4 fw-bold d-inline-block rounded my-1 p-1 " style={{ backgroundColor: "#828792" }}>{mvDetail?.vote_average}</div>
                <div className="fs-2 w-25 fw-bold btn-outline-success d-block btn rounded my-5 p-1 ">More</div>
            </div>

        </div>
    )
}

export default Page