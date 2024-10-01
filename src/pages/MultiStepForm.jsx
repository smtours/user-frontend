import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  
  const titles = ['Personal Information', 'Account Information', 'Review'];

  
  const validationSchemas = [
    Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    }),
    Yup.object({
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    Yup.object({
      terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
    }),
  ];

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  };

  const handleNext = () => {
    setStep((s) => Math.min(s + 1, titles.length - 1));
  };

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = (values) => {
    toast.success("Values Submitted")
    
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">{titles[step]}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[step]}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {step === 0 && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                    Username
                  </label>
                  <Field
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                  />
                  <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <Field
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <Field
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <Field
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                </div>
              </>
            )}

            {step === 2 && (
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <Field type="checkbox" name="terms" className="text-blue-600 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-700">I accept the terms and conditions</span>
                </label>
                <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />
              </div>
            )}

            <div className="flex justify-between mt-4">
              {step > 0 && (
                <button type="button" onClick={handleBack} className="bg-gray-300 text-gray-800 py-2 px-4 rounded">
                  Back
                </button>
              )}
              {step < titles.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Next
                </button>
              ) : (
                <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white py-2 px-4 rounded">
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
