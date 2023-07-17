/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import Footer from "../component/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logInUser } from "../redux/features/user/userSlice";
import { useEffect } from "react";

interface FormValues {
  email: string;
  password: string;
}

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.user);
  const location = useLocation();
  const from = location?.state?.path || "/";
  console.log(location?.state?.path);

  const navigate = useNavigate();

  const onSubmit = (data: { email: string; password: string }) => {
    const email = data.email;
    const password = data.password;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dispatch(logInUser({ email: email, password: password }));
  };
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
    }
  }, [user.email, isLoading, from, navigate]);
  return (
    <div>
      <div>
        <div className='flex h-screen justify-center items-center'>
          <div className='card w-96 bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='text-center text-2xl font-semibold'>Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                        {/* {errors.email.message} */}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className='label-text-alt text-red-500'>
                        {/* {errors.email.message} */}
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
                  <label className='label'>
                    {errors.password?.type === "required" && (
                      <span className='label-text-alt text-red-500'>
                        {/* {errors.password.message} */}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className='label-text-alt text-red-500'>
                        {/* {errors.password.message} */}
                      </span>
                    )}
                  </label>
                </div>

                {/* error message  */}
                {/* {singError} */}
                <input
                  className='btn w-full max-w-xs text-white bg-indigo-600'
                  type='submit'
                  value='Login'
                />
              </form>

              <p>
                <small>
                  New to Doctors Portal{" "}
                  <Link className='text-primary' to='/signup'>
                    Create New Account
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
      </div>
      <Footer></Footer>
    </div>
  );
}
