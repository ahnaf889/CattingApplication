import React from "react";
import Search from "../../CommonCoponents/Search/Search";
import Friends from "../HomeRightComponent/Friends/Friends";
import GroupList from "../HomeRightComponent/GroupList/GroupList";
import UserList from "../HomeRightComponent/UserList/UserList";
import RequestList from "../HomeRightComponent/RequestList/RequestList";
import MyGroupsList from "../HomeRightComponent/MyGroupsList/MyGroups.jsx";
import AddBlockUser from "../HomeRightComponent/AddBlockList/AddblockList.jsx";
import UnblockList from "../HomeRightComponent/UnblockList/UnblockList.jsx";
const HomeRight = () => {
  return  ( 
  <div className="w-full">
    <Search classname={'w-full py-3 rounded-full pl-14'}/>
    <div className="flex justify-between flex-wrap">
    <GroupList/>
    <Friends/>
    <UserList/>
    <RequestList/>
    <MyGroupsList/>
    <AddBlockUser/>
    <AddBlockUser/>
    <UnblockList/>
    </div>
  </div>)
 
};

export default HomeRight;
