import { useState } from "react";
import { Tags, Plus, Trash2 } from "lucide-react";

function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "خوراک", type: "هزینه" },
    { id: 2, name: "حمل‌ونقل", type: "هزینه" },
    { id: 3, name: "حقوق", type: "درآمد" },
    { id: 4, name: "خرید", type: "هزینه" },
  ]);

  const [name, setName] = useState("");
  const [type, setType] = useState("هزینه");

  function handleAddCategory(e) {
    e.preventDefault();

    if (!name.trim()) return;

    const newCategory = {
      id: Date.now(),
      name: name.trim(),
      type,
    };

    setCategories((prev) => [...prev, newCategory]);
    setName("");
  }

  function handleDeleteCategory(id) {
    setCategories((prev) =>
      prev.filter((category) => category.id !== id)
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-8" dir="rtl">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Tags size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                دسته‌بندی‌ها
              </h1>

              <p className="text-sm text-slate-500 mt-1">
                مدیریت دسته‌بندی‌های درآمد و هزینه
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleAddCategory}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6"
        >
          <h2 className="font-bold text-slate-800 mb-5">
            افزودن دسته‌بندی جدید
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="نام دسته‌بندی"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="هزینه">هزینه</option>
              <option value="درآمد">درآمد</option>
            </select>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl px-4 py-3 hover:bg-blue-700 transition"
            >
              <Plus size={20} />
              افزودن دسته‌بندی
            </button>

          </div>
        </form>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

          <div className="p-6 border-b border-slate-200">
            <h2 className="font-bold text-slate-800">
              فهرست دسته‌بندی‌ها
            </h2>
          </div>

          {categories.length === 0 ? (
            <p className="p-8 text-center text-slate-400">
              هنوز دسته‌بندی‌ای اضافه نشده است.
            </p>
          ) : (
            categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between gap-4 p-5 border-b border-slate-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                    <Tags size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {category.name}
                    </h3>

                    <span
                      className={`text-xs ${
                        category.type === "درآمد"
                          ? "text-blue-600"
                          : "text-slate-500"
                      }`}
                    >
                      {category.type}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteCategory(category.id)}
                  className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition"
                  aria-label={`حذف دسته‌بندی ${category.name}`}
                >
                  <Trash2 size={19} />
                </button>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default Categories;