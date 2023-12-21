'use client'
import { useGetPublicYoutubeVideosQuery } from "@/redux/features/videosApi/videosApi"


const page = () => {
const {data:publicYoutubeVideos, error, isLoading} = useGetPublicYoutubeVideosQuery();
console.log("🚀 ~ file: page.jsx:8 ~ page ~ publicYoutubeVideos:", publicYoutubeVideos);

if(isLoading){
  return <div> <h1> Loading...</h1> </div>
}

if(error){
  return <div> Error: {error.message} </div>
}

  return (
    <>

    <div className="d-flex jusfify-content-center w-100">
      <h1> Videos </h1>
    </div>


      
    </>
  )
}

export default page
