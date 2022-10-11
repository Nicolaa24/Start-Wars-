import { useAppSelector } from "../../../redux/store/hooks";

export const useAuth = () => {
  const { email, token, id, userName } = useAppSelector(state => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    userName
  };
};