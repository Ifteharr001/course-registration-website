import { useState } from "react";
import { useEffect } from "react";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import Card from "../Card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Course = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isHave = selectedCourse.find((item) => item.id == course.id);
    // eslint-disable-next-line no-unused-vars
    let remainingCredit = course.credit;
    let price = course.price;
    if (isHave) {
      return toast("Already Exist");
    } else {
      selectedCourse.forEach((item) => {
        remainingCredit = remainingCredit + item.credit;
        price = price + item.price;
      });
      const totalRemaining = 20 - remainingCredit;
      if (totalRemaining < 0) {
        toast("No Available Credit");
      } else {
        setRemaining(totalRemaining);
        setTotalCredit(remainingCredit);
        setTotalPrice(price);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center my-5">
          Course Registration
        </h1>
      </div>
      <div className=" justify-between my-5 grid grid-cols-1 md:grid-cols-2 lg:flex">
        <div className="w-[75%] mx-auto  gap-3 justify-center grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
          {allCourse.map((course) => (
            <div
              key={course.id}
              className="p-3 w-[300px] bg-base-100 shadow-inner bg-gray-100 rounded-xl"
            >
              <figure>
                <img className="mx-auto" src={course.img} alt="Shoes" />
              </figure>
              <h1 className="text-xl font-bold text-center my-4">
                {course.title}
              </h1>
              <p className="my-2">{course.description}</p>
              <div className="flex justify-between my-4">
                <div className="flex items-center justify-center gap-3">
                  <FaDollarSign></FaDollarSign>
                  <span> price: {course.price}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <FaBookOpen></FaBookOpen>
                  <span>cradit: {course.credit}hr</span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleSelectCourse(course)}
                  className="btn bg-[#2F80ED] text-white font-bold w-full text-center py-2 rounded-md my-2"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
        <div className="text-xl font bold p-3 w-[25%] ">
          <Card
            selectedCourse={selectedCourse}
            remaining={remaining}
            totalCredit={totalCredit}
            totalPrice={totalPrice}
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Course;
