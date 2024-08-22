"use client";
import userSchema from "@/schemas";
import { useFormik } from "formik";

const HeroLeft = () => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      // this is useState
      name: "",
      age: 0,
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      console.log("submitted");
      resetForm();
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full px-1 max-w-96"
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          value={values.name}
          onChange={handleChange}
          id="name"
          type="text"
          placeholder="Enter desired name"
          onBlur={handleBlur}
          className={errors.name && touched.name ? "border-red-500" : ""}
        />
        {errors.name && touched.name && (
          <p className="text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="age">Age</label>
        <input
          value={values.age}
          onChange={handleChange}
          id="age"
          type="number"
          placeholder="Enter age"
          onBlur={handleBlur}
          className={errors.age && touched.age ? "border-red-500" : ""}
        />
        {errors.age && touched.age && (
          <p className="text-red-500 text-sm">{errors.age}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "border-red-500" : ""}
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          onChange={handleChange}
          id="password"
          type="password"
          placeholder="Enter your password"
          onBlur={handleBlur}
          className={
            errors.password && touched.password ? "border-red-500" : ""
          }
        />
        {errors.password && touched.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          onBlur={handleBlur}
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "border-red-500"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-[#523db7] text-white py-2 rounded-lg my-4"
      >
        Register
      </button>
    </form>
  );
};

export default HeroLeft;
