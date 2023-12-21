"use client";
import { useGetPublicRandomUserQuery } from "@/redux/features/publicApi/publicApi";

const page = () => {
  const { data: randomUser, error, isLoading } = useGetPublicRandomUserQuery();

  console.log("🚀 ~ file: page.jsx:7 ~ page ~ data:", randomUser);

  const apiData = randomUser?.data;

  console.log("🚀 ~ file: page.jsx:11 ~ page ~ apiData:", apiData);

  const id = apiData?.id;
  const name = apiData?.name.title;
  const email = apiData?.email;
  const gender = apiData?.gender;
  const age = apiData?.dob.age;
  const date = apiData?.dob.date;

  if (isLoading) {
    return <div> Loading... </div>;
  }
  if (error) {
    return <div> Error: {error.message} </div>;
  }

  return (
    <>
      <div> Random User </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/card-images.jpg"
              width={100}
              height={200}
              className="rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ps-2">
              <p className="card-text text-success"> Id: {id} </p>
              <h5 className="card-ti"> Email: {email} </h5>
              <p className="card-text text-success">Name: {name} </p>
              <p className="card-text text-success">Gender: {gender} </p>
              <p className="card-text text-success"> Age: {age} </p>
              <span className="text-danger"> Date of Birth: </span>
              <br />
              {date}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
