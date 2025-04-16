import UserData from "./UserData/UserData";
import UserRating from "./UserRating/UserRating";

const UserInfo = ({ user , username , specialization , rating }: { user: string , username: string , specialization: string , rating: number }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <UserData user={user} username={username} specialization={specialization} />
      <UserRating stars={rating} />
    </div>
  );
};

export default UserInfo;
