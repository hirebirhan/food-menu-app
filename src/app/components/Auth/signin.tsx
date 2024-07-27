// components/Auth.js
import { useState } from 'react';
import { supabase } from '../supabaseClient';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) console.error('Error signing up:', error);
    else console.log('User signed up:', user);
  };

  const signIn = async () => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) console.error('Error signing in:', error);
    else console.log('User signed in:', user);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2"
      />
      <button onClick={signUp} className="bg-blue-500 text-white p-2 mb-2">Sign Up</button>
      <button onClick={signIn} className="bg-green-500 text-white p-2">Sign In</button>
    </div>
  );
};

export default Auth;
