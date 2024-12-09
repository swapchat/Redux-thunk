import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/userActions";
import Users from "./components/Users";

const App = () => {
  const {
    data: users,
    isLoading,
    errorMsg,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      {isLoading && (
        <p className="text-3xl tracking-wide text-center">Loading...</p>
      )}
      {errorMsg && (
        <p className="text-xl tracking-wide text-center text-red-500">
          {errorMsg}
        </p>
      )}
      <Users users={users} />
    </>
  );
};

export default App;
