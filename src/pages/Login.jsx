import React, { useState } from 'react'
import { useAuthStore } from '../stores/auth.store.jsx';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuthStore();


    function handleFormSubmit(e) {
        e.preventDefault();
        login({ email, password });

    }
    return (
        <form action={'/'} onSubmit={handleFormSubmit} className='h-screen grid place-content-center' >
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>
                <label className="label">Email</label>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="input" placeholder="Email" autoComplete='username' name='email' />
                <label className="label">Password</label>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="input" placeholder="Password" autoComplete='current-password' name='password' />
                <button type='submit' className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </form>
    )
}
