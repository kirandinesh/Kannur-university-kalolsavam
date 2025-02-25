import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });

  const [loading, setLoading] = useState(true);

  async function handleRegisterUser(event) {
    event.preventDefault();
    const toastId = toast.loading("Registering...");

    try {
      const data = await registerService(signUpFormData);
      console.log(data.message);

      if (data.success) {
        toast.success("Registered successfully! 🎉", { id: toastId });
      } else {
        toast.error(data?.data?.message, { id: toastId });
      }
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message, { id: toastId });
    }
  }

  //login
  async function handleLoginUser(event) {
    event.preventDefault();
    const toastId = toast.loading("Logging in..."); // Show loading toast

    try {
      const data = await loginService(signInFormData);
      if (data.success) {
        toast.success("Logged in successfully! 🎉", { id: toastId });

        sessionStorage.setItem(
          "accessToken",
          JSON.stringify(data.data.accessToken)
        );

        setAuth({
          authenticate: true,
          user: data.data.user,
        });
      } else {
        toast.error("Login failed! Invalid credentials.", { id: toastId });
        setAuth({
          authenticate: false,
          user: null,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: toastId });
    }
  }

  //logout

  //check user
  async function checkAuthUser() {
    try {
      const data = await checkAuthService();
      if (data.success) {
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
      }
    } catch (error) {

      setAuth({
        authenticate: false,
        user: null,
      });
    } finally {
      setLoading(false);
    }
  }

  function resetCredentials() {
    toast.success("Logged out successfully");
    setAuth({
      authenticate: false,
      user: null,
    });
  }

  useEffect(() => {
    checkAuthUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        resetCredentials,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
