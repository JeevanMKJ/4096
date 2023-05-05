import React from "react";
import HighScores from "./HighScoresComponent";


const people = [
    {
        name: 'Leslie Alexander',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]


export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32 font-serif text-emerald">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {people.map((person) => (
                            <h2 key={person.name}>
                                {person.name}
                            </h2>
                        ))}
                    </div>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Tell us a little a bit about yourself and see your high scores here!
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-30 w-30 rounded-lg" src={person.imageUrl} alt="" />
                                <div>
                                    <p><HighScores /></p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
