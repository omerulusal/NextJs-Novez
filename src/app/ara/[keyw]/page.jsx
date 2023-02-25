import Movies from '@/components/Movies';
import React from 'react';

const Page = async ({ params }) => {
    //!({ params }) bunun yerine eğer (e) yazsaydım sıkıntı yaratırdı çünkü kodun nerden geldiği belli olmuyor.
    const keyw = params.keyw;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=152011077666d008909e696b7a81f12c&query=${keyw}&language=en-US&include_adult=false`);
    const dt = await res.json();
    console.log(keyw);
    console.log(dt.results, 'dataaaaa');
    return (
        <div>
            {/* Eğer dt.results yoksa, sayfada "Aranılan şey bulunamadı!!"yazacaktır. (results, tmdb apisinden geliyor) */}
            {!dt.results ? (
                <div>Aranılan şey bulunamadı!!</div>
            ) : (
                <div>
                    {dt.results.map((dt, ind) => (
                        <Movies key={ind} dt={dt} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
