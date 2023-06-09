import React, { useState } from "react";
// import { Link } from 'react-router-dom';

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 font-serif">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center text-bold">
          <h1 className="mx-auto h-10 w-auto text-gray-600">
            Sign up for an account
          </h1>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"></h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>

                <div className="mt-2">
                  <input
                    id="username"
                    value={formState.username}
                    name="username"
                    type="text"
                    autoComplete="username"
                    placeholder="  username"
                    required
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>

                <div className="mt-2">
                  <input
                    id="email"
                    value={formState.email}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="  email@email.com"
                    required
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    // id="password"
                    name="password"
                    type="password"
                    value={formState.password}
                    placeholder="  password"
                    autoComplete="current-password"
                    required
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-burnt-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Sign up
                </button>
              </div>
            </form>
            {error && <div className="text-white">{error.message}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
