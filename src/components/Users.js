import React, { useEffect } from "react";
import { UsersList } from "./reactRedux/actions/userAction";
import { connect } from "react-redux";
import { userReducer } from "./reactRedux/reducer/userReducer";
function Users({ UsersList, loading, users, error }) {
  useEffect(() => {
    UsersList();
  }, []);
  return (
    <div>
      {users.map((user)=>{
          return user.title
          
      })}
    </div>
  );
}
const mapStateToProps = (state) => ({
  loading: state.userReducer.loading,
  users: state.userReducer.users,
  error: state.userReducer.error,
});
export default connect(mapStateToProps, { UsersList })(Users);
