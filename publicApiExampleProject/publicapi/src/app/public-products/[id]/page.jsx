"use client";
import { useGetPublicRandomSingleProductQuery } from "@/redux/features/productApi/productApi";

const page = ({ params }) => {
  const id = params.id;

  const {
    data: singleProductData,
    error,
    isLoading,
  } = useGetPublicRandomSingleProductQuery(id);
  console.log(
    "🚀 ~ file: page.jsx:10 ~ page ~ singleProductData:",
    singleProductData
  );

  const singleProductData2 = singleProductData?.data;
  console.log(
    "🚀 ~ file: page.jsx:12 ~ page ~ singleProductData2:",
    singleProductData2
  );

  const brand = singleProductData2?.brand;
  const category = singleProductData2?.catgegory;
  const discountPercentage = singleProductData2?.discountPercentage;
  const images = singleProductData2?.images;
  const thumbnail = singleProductData2?.thumbnail;
  const title = singleProductData2?.title;
  const price = singleProductData2?.price;
  const rating = singleProductData2?.rating;
  const stock = singleProductData2?.stock;

  if (isLoading) {
    return (
      <div>
        {" "}
        <h1>Loading...</h1>{" "}
      </div>
    );
  }
  (error) => {
    return <div> Error: {error.message} </div>
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1> Product Card </h1>
      </div>

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
              <h5 className="card-ti"> Id: {id} </h5>
              <p className="card-text text-success"> Brand: {brand} </p>
              <p className="card-text text-success">
                {" "}
                Discount Percentage: {discountPercentage}{" "}
              </p>
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
  );
};

export default page;
