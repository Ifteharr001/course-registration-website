
// eslint-disable-next-line react/prop-types
const Card = ({ selectedCourse }) => {
    let count = 1;
  return (
    <div className="p-3 w-[300px] bg-base-100 shadow-inner bg-gray-100 rounded-xl p-4">
      <h1 className="text-2xl font-bold my-3">Course Name</h1>
      {
        // eslint-disable-next-line react/prop-types
        selectedCourse.map((course) => (
            // eslint-disable-next-line react/jsx-key
            <p className="text-sm gap-3">{count++} {course.title}</p>

        ))
      }
    </div>
  );
};

export default Card;