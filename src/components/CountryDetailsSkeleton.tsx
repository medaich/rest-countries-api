import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import Wrapper from "../components/Wrapper";

const CountryDetailsSkeleton = () => {
  const navigate = useNavigate();

  return (
    <Wrapper className="px-0 md:py-12">
      <button
        className="flex *:block gap-2 items-center bg-white dark:bg-dark-blue px-8 py-2 justify-center rounded shadow-md cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
        <span>Back</span>
      </button>
      <div className="mt-16 md:mt-20 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32">
        <div className="w-full md:w-1/2 xl:pr-8">
          {/* Flag skeleton */}
          <div className="w-full h-72 md:h-80 bg-gray-200 dark:bg-gray-700 animate-pulse shadow-md"></div>
        </div>
        <div className="w-full md:w-1/2 flex gap-8 lg:gap-12 flex-col justify-center">
          {/* Country name skeleton */}
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>

          <div className="capitalize flex gap-4 lg:gap-32 max-md:flex-col">
            <div className="w-full">
              {/* Left column info skeletons */}
              {[...Array(5)].map((_, index) => (
                <div key={`left-${index}`} className="mb-4">
                  <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
                </div>
              ))}
            </div>
            <div className="w-full">
              {/* Right column info skeletons */}
              {[...Array(3)].map((_, index) => (
                <div key={`right-${index}`} className="mb-4">
                  <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Border countries skeleton */}
          <div className="flex gap-4 max-xl:flex-col">
            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
            <div className="flex gap-2 flex-wrap">
              {[...Array(4)].map((_, index) => (
                <div
                  key={`border-${index}`}
                  className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded shadow-md"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CountryDetailsSkeleton;
