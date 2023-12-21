"use client";
import { useGetPublicRandomSingleUserQuery } from "@/redux/features/publicApi/publicApi";
import styles from "@/app/components/common.module.css";

const page = ({ params }) => {
  const id = params.id;

  const { data, error, isLoading } = useGetPublicRandomSingleUserQuery(id);

  const apiData = data?.data;

  console.log(apiData);

  const email = apiData?.email;
  const firstName = apiData?.name.first;
  const lastName = apiData?.name.last;
  const title = apiData?.name.title;
  const phone = apiData?.phone;
  const age = apiData?.dob.age;
  const date = apiData?.dob.date;
  const gender = apiData?.gender;
  const picture = apiData?.picture.large;

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

  return (
    <>
      <div className="main_container">
        <div className="d-flex justify-content-center my-3">
          <h1 className="text-center"> Public Page. </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className={styles.single_user_card}>
            <div className={styles.single_user_card_image}>
              <div className="row">
                <div className="col-md-5">
                  <img src={picture} width={"auto"} height={450} alt="..." />
                </div>
                <div className="col-md-7">
                  <div className={styles.single_user_card_data}>
                    <div className="card-body ps-2">
                      <p className="card-text">
                        {" "}
                        <span className={styles.font_class}>
                          {" "}
                          Frist Name:
                        </span>{" "}
                        {firstName}{" "}
                      </p>
                      <p className="card-text">
                        {" "}
                        <span className={styles.font_class}>
                          {" "}
                          Last Name:
                        </span>{" "}
                        {lastName}{" "}
                      </p>
                      <p className="card-text">
                        {" "}
                        <span className={styles.font_class}>Gender:</span>{" "}
                        {gender}{" "}
                      </p>
                      <p className="card-text">
                        {" "}
                        <span className={styles.font_class}>Phone:</span>{" "}
                        {phone}{" "}
                      </p>
                      <p className="card-text d-inline">
                        {" "}
                        <span className={styles.font_class}>Title:</span>{" "}
                        {title}{" "}
                      </p>
                      <p className="card-text d-inline">
                        {" "}
                        <span className={styles.font_class}>Age:</span> {age}{" "}
                      </p>
                      <p className="card-text">
                        {" "}
                        <span className={styles.font_class}> Email: </span>{" "}
                        {email}{" "}
                      </p>
                      <span className="text-danger">
                        {" "}
                        <span className={styles.font_class}>
                          Date of Birth:
                        </span>
                        {date}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
