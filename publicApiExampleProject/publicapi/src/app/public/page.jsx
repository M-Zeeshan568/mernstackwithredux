"use client";
import { useState } from "react";
import { useGetPublicRandomUsersQuery } from "@/redux/features/publicApi/publicApi";
import Card from "../components/card";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const { data, error, isLoading } = useGetPublicRandomUsersQuery({
    page: currentPage,
    limit: postsPerPage,
  });


  const apiData = data?.data?.data;
  console.log("🚀 ~ file: page.jsx:17 ~ page ~ apiData:", apiData)
  const apiData2 = data?.data;

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {" "}
        <h1>Loading... </h1>{" "}
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {" "}
        Error: {error.message}
      </div>
    );
  }

  const previousPageHandle = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPageHandle = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="main_container">
        <div className="d-flex justify-content-center my-3">
          <h1 className="text-center"> Public Page. </h1>
        </div>

        <div className="d-flex flex-wrap justify-content-around align-items-center">
          {apiData?.map((curEl) => {
            return <Card key={curEl.id} {...curEl} />;
          })}
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="w-50 d-flex justify-content-around">
            {currentPage > 1 && (
              <button onClick={previousPageHandle}>Previous Page</button>
            )}
            <div className="p-3">
              {apiData2?.page}
              {apiData2?.currentPageItems}
            </div>
            {currentPage !== 50 && (
              <button onClick={nextPageHandle}>Next Page</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
