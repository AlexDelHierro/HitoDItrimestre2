import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineBug } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import { Form } from "../../components/common/Form/Form";
import { FormInput } from "../../components/common/FormInput/FormInput";
import { Error } from "../../components/ui/Error";
import { useUserRegisterMutation } from "../../features/auth/userAuthApi";
import { setTitle } from "../../utils/setTitle";

export const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [userRegister, { isLoading, isSuccess, error: resError }] =
    useUserRegisterMutation();

  useEffect(() => {
    if (isLoading && !isSuccess) {
      toast.success("Register Successfull Please Login");
      navigate("/login");
    }
    if (!isLoading && !isSuccess && resError) {
      setError(resError.status);
    }
  }, [isLoading, isSuccess, navigate, resError]);

  //register handler
  const registerHandler = (e) => {
    e.preventDefault();
    setError("");

    //check confirm password
    if (password !== confirmPassword) {
      return setError("Password & Confirm Password Dosen't Match");
    }
    userRegister({
      name,
      email,
      password,
    });
  };

  //set page title
  setTitle("Register User");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="mx-2 sm:mx-0 sm:w-[350px] bg-slate-100 px-2 py-4 rounded-md">
        <div className="flex flex-col items-center justify-center pb-4">
          <span className="text-green-600 text-5xl pb-1">
            <AiOutlineBug />
          </span>
          <h3 className="text-2xl font-semibold">Create Your Account</h3>
        </div>
        <Form onSubmit={registerHandler}>
          <FormInput
            label="Nombre y apellidos"
            type="text"
            name="name"
            placeholder="Nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            label="Contraseña"
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            label="Confirmar contraseña"
            type="password"
            name="confirmPassword"
            placeholder="Confirma contraseña"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button name="Register" className="w-full" />
        </Form>
        {error !== "" && <Error error={error} />}
        <div className="mt-4 mb-3 text-center">
          <span>
            tienes una cuenta? porfavor{" "}
            <Link to="/login" className="text-[#28a745] font-normal">
              Inicia Sesion aqui.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
