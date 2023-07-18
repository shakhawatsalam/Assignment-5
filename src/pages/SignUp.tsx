/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useCreateUserMutation } from "../redux/api/apiSlice";

interface FormValues {
  email: string;
  password: string;
  name: string;
}

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const { user, error, isError } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [createUserToDatabase] = useCreateUserMutation();
  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const userDB = {
      name: data.name,
      email: data.email,
      password: data.password,
      wishList: [],
      readingList: [],
    };
    const { email, password } = userDB;
    await dispatch(createUser({ email: email, password: password }));
    if (!isError && !error) {
      await createUserToDatabase(userDB);
      navigate("/");
    }
  };
  return (
    <div>
      <div className='flex min-h-[66.1vh] justify-center items-center'>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='text-center text-2xl font-semibold'>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Name'
                  className='input input-bordered w-full max-w-xs'
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                {/* <label className='label'>
                  {errors.name?.type === "required" && (
                    <span className='label-text-alt text-red-500'>
                      {errors.name.message}
                    </span>
                  )}
                </label> */}
              </div>
              {/* email  */}

              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='Email'
                  className='input input-bordered w-full max-w-xs'
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Privide a Valid Email",
                    },
                  })}
                />
                <label className='label'>
                  {errors.email?.type === "required" && (
                    <span className='label-text-alt text-red-500'>
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className='label-text-alt text-red-500'>
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password */}

              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered w-full max-w-xs'
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters",
                    },
                  })}
                />
                {/* <label className='label'>
                  {errors.password?.type === "required" && (
                    <span className='label-text-alt text-red-500'>
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className='label-text-alt text-red-500'>
                      {errors.password.message}
                    </span>
                  )}
                </label> */}
              </div>

              {/* error message  */}
              {/* {registerError} */}
              <input
                className='btn w-full max-w-xs text-white bg-indigo-600 mt-5'
                type='submit'
                value='Sign Up'
              />
            </form>

            <p>
              <small>
                Already Have An Account
                <Link className='text-primary' to='/signin'>
                  Please Login
                </Link>
              </small>
            </p>
            <div className='divider'>OR</div>
            <button
              // onClick={() => signInWithGoogle()}
              className='btn btn-outline'>
              Continue With Google
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
