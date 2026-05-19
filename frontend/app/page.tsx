export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-black px-8 py-4 text-white">
        <h1 className="text-3xl font-bold">
          Job Portal
        </h1>

        <div className="space-x-6 text-lg">
          <button>Home</button>
          <button>Jobs</button>
          <button>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="mb-4 text-5xl font-bold">
          Find Your Dream Job
        </h2>

        <p className="mb-6 text-xl text-gray-600">
          Search thousands of jobs easily
        </p>

        <button className="rounded-lg bg-black px-6 py-3 text-white">
          Browse Jobs
        </button>
      </section>

      {/* Job Cards */}
      <section className="grid grid-cols-1 gap-6 px-8 pb-10 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-bold">
            Frontend Developer
          </h3>

          <p className="mt-2 text-gray-600">
            Chennai, India
          </p>

          <button className="mt-4 rounded bg-black px-4 py-2 text-white">
            Apply
          </button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-bold">
            Backend Developer
          </h3>

          <p className="mt-2 text-gray-600">
            Bangalore, India
          </p>

          <button className="mt-4 rounded bg-black px-4 py-2 text-white">
            Apply
          </button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-bold">
            Full Stack Developer
          </h3>

          <p className="mt-2 text-gray-600">
            Hyderabad, India
          </p>

          <button className="mt-4 rounded bg-black px-4 py-2 text-white">
            Apply
          </button>
        </div>
      </section>
    </div>
  );
}