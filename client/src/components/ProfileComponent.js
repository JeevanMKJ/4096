import React, { useState } from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { REMOVE_USER } from '../utils/mutations';


import Auth from '../utils/auth';

const Profile = () => {
 const [removeUser, { error }] = useMutation(REMOVE_USER)
  const [showModal, setShowModal] = React.useState(false);
  const { userId } = useParams();

  const handleRemoveUser = async (userId) => {
     
    try {
      const { data } = await removeUser({
        variables: { userId },
      });
    Auth.logout()
    window.location.assign('/');
    } catch (err) {
      console.error(err);
    }
  };




  const { loading, data } = useQuery(
    userId ? QUERY_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );
 
  const profile = data?.me || data?.profile || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log(data.profile)
  
  if (!profile?.username) {
    return (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Whoops!
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    x
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  You need to be logged in to view your profile
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                <a href="/login"
                  className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Login

                </a>
                <a href="/"
                  className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Go back

                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      );
    }
    const sortedScores = [...profile.scores].sort((a, b) => b.points - a.points);
    return (
        <div className='bg-white mt-4 p-4'>
        <div className="px-4 font-serif sm:px-0 mt-2">
          <h3 className="text-base font-semibold leading-7 text-gray-900 uppercase">{profile.username}</h3>
          <p className="mt-1 max-w-2xl text-md leading-6 text-gray-500">Profile</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900 font-serif">Email</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 font-serif">{profile.email}</dd>
            </div>
            
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm leading-6 text-gray-900 font-serif">Your High Scores</dt>
              <dd className="text-[32px] text-clay leading-6 font-serif sm:col-span-2 sm:mt-0">
             {sortedScores.map((score) => (
              <p>{score.points}</p>
             ))}
              </dd>
            </div>
            <div>
        <button 
        className="bg-cran hover:bg-clay text-white font-bold mt-4 py-2 px-4 rounded-full font-serif"
        onClick={() => handleRemoveUser(profile._id)}
        >
  Delete Profile
</button>
        </div>
          </dl>        
        </div>
   
      </div>

  );
};

export default Profile;

