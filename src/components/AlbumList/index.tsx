import React from "react";
import { IUserdata } from "../../store/slices/usersSlice";

interface IAlbumListProps {
  user: IUserdata;
}
function AlbumList({ user }: IAlbumListProps) {
  return <div className="text-white">Album for {user.name}</div>;
}

export default AlbumList;
