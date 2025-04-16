import { FaStar } from "react-icons/fa6";
import { TbMessage2Question } from "react-icons/tb";

const UserRating = ({ stars }: { stars: number }) => {
  return (
    <div className="flex items-center gap-4 text-link">
      <div className="details flex items-center gap-2">
        <TbMessage2Question />
        <p className="text-sm font-medium">details</p>
      </div>
      <div className="stars flex items-center gap-2">
        <FaStar />
        {stars}
        <p className="text-sm font-medium">stars</p>
      </div>
    </div>
  );
};

export default UserRating;
