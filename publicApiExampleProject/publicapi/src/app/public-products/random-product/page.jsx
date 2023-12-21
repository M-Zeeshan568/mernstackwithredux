'use client'
import { useGetPublicRandomProductQuery } from '@/redux/features/productApi/productApi'

const page = () => {
    const {data:randomProductData, error, isLoading} = useGetPublicRandomProductQuery();
    console.log("🚀 ~ file: page.jsx:7 ~ page ~ randomProductData:", randomProductData);

    const randomProductData2=randomProductData?.data;

    const brand = randomProductData2?.brand;
    const category = randomProductData2?.catgegory;
    const discountPercentage = randomProductData2?.discountPercentage;
    const images = randomProductData2?.images;
    const thumbnail = randomProductData2?.thumbnail;
    const title = randomProductData2?.title;
    const price = randomProductData2?.price;
    const rating = randomProductData2?.rating;
    const stock = randomProductData2?.stock;

    if(isLoading){
        return <div> <h1> Loading... </h1> </div>
    }

    if(error){
        return <div> Error: {error.message} </div>
    }
  return (
    <>
       <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={images[1]}
               width={100}
               height={200}
              className="rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ps-2">
              <p className="card-text text-success"> Brand: {brand} </p> 
                <p className="card-text text-success"> Discount Percentage: {discountPercentage} </p> 
                <p className="card-text text-success"> Price: {price} </p> 
                 <p className="text-danger"> Model: {title} </p> 
                  <p> Category: {category} </p>
                  <p> Rating: {rating} </p>
                  <p> Stock: {stock} </p>
                  <p> Thumbnail: {thumbnail} </p>
                 

                 
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
