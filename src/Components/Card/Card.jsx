// eslint-disable-next-line react/prop-types
const Card = ({ selectedCourse, remaining, totalCredit, totalPrice }) => {
  let count = 1;
  return (
    <div className="p-4 w-[300px] bg-base-100 shadow-inner bg-gray-100 rounded-xl">
      <h1 className="text-xl font-bold text-[#2F80ED]">
        Credit Hour Remaining {remaining} hr
      </h1>
      <hr className="my-4 " />
      <h1 className="text-2xl font-bold my-3">Course Name</h1>
      {
        // eslint-disable-next-line react/prop-types
        selectedCourse.map((course) => (
          // eslint-disable-next-line react/jsx-key
          <p className="text-sm gap-3">
            {count++} {course.title}
          </p>
        ))
      }
      <hr className="my-4 " />
      <h1 className="text-xl font-bold">Total Credit Hour: {totalCredit} </h1>
      <hr className="my-4 " />
      <h1 className="text-xl font-bold">Total Price: {totalPrice}</h1>
    </div>
  );
};

export default Card;
