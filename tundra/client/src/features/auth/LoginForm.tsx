import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@shared/store/userSlice";
import { useLogin } from "./model/useLogin";
import { LoginFormValues } from "./model/types";
import { Input } from "@shared/ui/Input";
import { Button } from "@shared/ui/Button";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();
  const { login, loading } = useLogin();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data);
      //записываем пользователя в стор
      dispatch(setUser({ name: data.username })); 
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed");
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="CLASS_NAME">
      <div>
        <Input
          placeholder="Username"
          className="CLASS_NAME"
          {...register("username", { required: "Username is required" })}
        />
      {errors.username && <p>{errors.username.message}</p>}
      </div>
      
      <div>
        <Input
          type="password"
          placeholder="Password"
          className="CLASS_NAME"
          {...register("password", {
            required: "Password is required", 
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters long",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
     
      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
};

