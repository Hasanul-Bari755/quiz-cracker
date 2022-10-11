import React from 'react';

const Blog = () => {
    return (
        <div className='ml-16 mt-11 mb-5'>
            <div>
                <h1 className='text-3xl font-semibold'>What is the purpose of react router?</h1>
                <p className='mt-3'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
                <br />
                <p>An API is any place where a piece of code talks to another piece of code, but we often use it to mean somebody’s external resource that gives me values, or our own internal database resource.When not using React Router, App is often the highest parent component in React apps. With React Router, however, the Router component needs to be the highest parent. This just lets all of the component use the power of Router, because as a parent, it passes down all of its props to its children, and thus the entire application.</p>
            </div>
            <div>
                <h1 className='text-3xl font-semibold mt-3'>How does context API work?</h1>
                <p className='mt-3'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div>
                <h1 className='text-3xl font-semibold mt-3'>What is useRef hooks?</h1>
                <p className='mt-3'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                <br />
                <p className='mt-3'>An alternative to useState. Accepts a reducer of type (state, action) () newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

                useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.</p>
            </div>
        </div>
    );
};

export default Blog;