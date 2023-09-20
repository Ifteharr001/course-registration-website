import { useState } from "react";
import { useEffect } from "react";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import Card from "../Card/Card";

const Course = () => {

    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        fetch("./data.json")
          .then((res) => res.json())
          .then((data) => setAllCourse(data));
    }, []);

    const handleSelectCourse = (course) => {
        const isHave = selectedCourse.find((item) => item.id == course.id);
        // eslint-disable-next-line no-unused-vars
        let remaining = course.credit;
         let price = course.price;
        if (isHave) {
           return alert ('already anrolled')
        }
        else{
            selectedCourse.forEach((item) => {
                remaining = remaining + item.credit;
                price = price + item.price;
            });
           
            setTotalCredit(remaining)
            const totalRemaining = 20 - remaining;
            setRemaining(totalRemaining)
            setTotalPrice(price);


           

            

            setSelectedCourse([...selectedCourse, course]);
        }
        
    }

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center my-5">
          Course Registration
        </h1>
      </div>
      <div className="flex my-5">
        <div className="w-[75%] mx-auto flex flex-wrap gap-3 justify-center">
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
