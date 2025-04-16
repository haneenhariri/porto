
const UserData = ({ user , username , specialization }: { user: string , username: string , specialization: string }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={user} alt="user" className="w-10 h-10 rounded-full" />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-job">@{username}</p>
        <p className="text-xs text-link">{specialization}</p>
      </div>
    </div>
  );
}

export default UserData