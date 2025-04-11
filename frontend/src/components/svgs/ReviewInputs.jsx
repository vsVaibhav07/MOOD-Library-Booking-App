import React from 'react';

function ReviewInputs() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 p-6 border border-gray-300 rounded-md w-[550px]">
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="text-center text-2xl font-semibold text-black">
            Thank You For Your Review
          </div>
          <div className="flex justify-center items-center gap-5">
            {[1, 2, 3, 4, 5].map(() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="43"
                viewBox="0 0 42 43"
                fill="none"
              >
                <path
                  d="M33.7657 42.3804C32.2715 43.4979 22.6839 36.4143 20.8477 36.3988C19.0114 36.3833 9.31588 43.304 7.83909 42.1614C6.3623 41.0188 9.83416 29.2833 9.28088 27.4501C8.7276 25.617 -0.55528 18.1014 0.0262052 16.2779C0.607819 14.4543 12.3411 14.2849 13.8353 13.1674C15.3296 12.0501 19.2881 0.484581 21.1244 0.500015C22.9605 0.515584 26.7402 12.1465 28.217 13.289C29.6938 14.4315 41.4231 14.7992 41.9765 16.6323C42.5298 18.4654 33.1324 25.8232 32.5508 27.6468C31.9693 29.4703 35.2599 41.263 33.7657 42.3804Z"
                  fill="#FABC3F"
                />
              </svg>
            ))}
          </div>
          <div className="text-lg font-medium text-green-600">Excellent</div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <input
            type="text"
            placeholder="Review Title"
            className="h-12 px-4 border border-gray-300 rounded-md w-full bg-gray-100 outline-none"
          />
          <textarea
            placeholder="Review Description"
            className="h-48 px-4 py-2 border border-gray-300 rounded-md w-full bg-gray-100 outline-none resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="h-12 w-full bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
        >
          Submit Review
        </button>
      </div>
    </>
  );
}

export default ReviewInputs