
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
    });

    navigate("/");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-blue-500 via-indigo-200 to-blue-500"
      dir="rtl"
    >
      <div className="w-full max-w-md bg-white/50 backdrop-blur-xl rounded-3xl shadow-2xl p-5">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            {isSignUp ? "ساخت حساب" : "خوش آمدید"}
          </h1>

          <p className="text-sm text-slate-400 mt-2">
            {isSignUp
              ? "برای شروع حساب خود را بسازید"
              : "برای ورود اطلاعات خود را وارد کنید"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {isSignUp && (
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          )}

          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-2xl py-3.5 font-semibold hover:bg-blue-700 transition"
          >
            {isSignUp ? "ساخت حساب" : "ورود به داشبورد"}
          </button>

        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-xs text-slate-400">
            یا
          </span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <p className="text-center text-sm text-slate-500">
          {isSignUp
            ? "قبلاً حساب ساخته‌اید؟"
            : "هنوز حساب ندارید؟"}

          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="mr-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            {isSignUp ? "ورود" : "ثبت نام"}
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;
