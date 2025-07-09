import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Secure SPA</h1>
      <p>This is the public home page.</p>
      <div className="mt-4 space-x-4">
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
