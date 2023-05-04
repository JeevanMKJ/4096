<<<<<<< HEAD
<<<<<<< HEAD
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

=======
>>>>>>> 1904ba481641a46d2d679126cf152c7f8ad8a3ef
const features = [
  {
    name: "Game objective?",
    description:
      "Waist as much … I mean play for as long as you can and be the last man standing with the highest score. Relish in the feeling of accomplishment when you hit the TOP 10.",
  },
  {
    name: "How to move?",
    description: "Use your arrow keys to move the board.",
<<<<<<< HEAD

=======
>>>>>>> 1904ba481641a46d2d679126cf152c7f8ad8a3ef
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
<<<<<<< HEAD

=======
>>>>>>> 1904ba481641a46d2d679126cf152c7f8ad8a3ef
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:px-8 lg:pt-32">
          <div className="text-center">
            <h2 id="features-heading" className="font-medium text-gray-500">
              How to play 4096?
            </h2>
            <p className="mt-4 text-gray-500">
              This game is not for the faint of heart. Read and learn.
<<<<<<< HEAD

=======
>>>>>>> 1904ba481641a46d2d679126cf152c7f8ad8a3ef
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
              {features.map((feature) => (
<<<<<<< HEAD

                <div key={feature.name} className="text-center">

=======
                <div key={feature.name} className="text-center">
>>>>>>> 1904ba481641a46d2d679126cf152c7f8ad8a3ef
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
