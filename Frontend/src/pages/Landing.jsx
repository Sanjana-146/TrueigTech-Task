import { Link } from "react-router-dom";

const Landing = () => (
  <div className="min-h-screen bg-linear-to-r from-emerald-100 to-emerald-300 flex items-center">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h1 className="text-5xl font-extrabold mb-6">
        Transform Your Fitness Journey
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Join expert trainers, follow plans, and achieve your goals.
      </p>

      <Link
        to="/signup"
        className="bg-primary text-white px-8 py-4 rounded-lg text-lg"
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default Landing;
