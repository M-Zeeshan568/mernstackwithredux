"use client";
import { useGetPublicRandomProductsQuery } from "@/redux/features/productApi/productApi";
import ProductCard from "../components/productCard";
import { useState } from "react";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productCardLimit, setProductCardLimit] = useState(10);

  const {
    data: productApiData,
    error,
    isLoading,
  } = useGetPublicRandomProductsQuery({
    page: currentPage,
    limit: productCardLimit,
  });
  console.log("🚀 ~ file: page.jsx:10 ~ page ~ data:", productApiData);

  const productApiData1 = productApiData?.data?.data;
  console.log(
    "🚀 ~ file: page.jsx:13 ~ page ~ productApiData1:",
    productApiData1
  );

  const previousPageHandle = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPageHandle = () => {
    setCurrentPage(currentPage + 1);
  };

  if (isLoading) {
    return (
      <div>
        {" "}
        <h1> Loading...</h1>{" "}
      </div>
    );
  }

  if (error) {
    return <div> Error: {error.message} </div>;
  }

  return (
    <>
      <h1> Public Products </h1>

      <div className="d-flex flex-wrap justify-content-around align-items-center">
        {productApiData1?.map((currentProductsElement) => {
          return (
            <ProductCard
              key={currentProductsElement.id}
              {...currentProductsElement}
            />
          );
        })}
      </div>

      <div className="d-flex flex-wrap justify-content-around align-items-center">
        {currentPage > 1 && (
          <button onClick={previousPageHandle}>Previous Page</button>
        )}

        <div className="p-3">
          {productApiData?.data?.page}
          {productApiData?.data?.currentPageItems}
        </div>

        {currentPage !== 50 && (
          <button onClick={nextPageHandle}>Next Page</button>
        )}
      </div>
    </>
  );
};

export default page;
