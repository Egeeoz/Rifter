'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createUser } from '@/lib/supabaseUtil';

export async function signUp(prevstate: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const username = formData.get('username') as string;

  if (!email || !password || !username) {
    return { error: 'Email and password are required' };
  }

  if (password.length < 6) {
    return { error: 'Password must be atleast 6 characters' };
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return {
      error: 'Username can only contain letters, numbers, and underscores',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: 'Please enter a valid email address' };
  }

  const { data: existingUser } = await supabase
    .from('users')
    .select('username')
    .eq('username', username)
    .single();

  if (existingUser) {
    return { error: 'Username is already taken' };
  }

  // ADD THIS UNDER PASSWORD IN FUTURE FOR EMAIL VERIFICATION
  //   options {
  //         Optional: Add email confirmation requirement
  //       emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
  //     }

  console.log('Attempting signup for:', { email, username });
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  console.log('Signup response:', { data, error });

  if (error) {
    console.error('Auth signup error:', error);
    return { error: error.message };
  }

  if (data?.user) {
    console.log('User created in auth:', data.user.id);
    const profileResult = await createUser(data.user.id, email, username);
    console.log('Profile creation result:', profileResult);
    if (profileResult.success) {
      await supabase.auth.signOut();
      revalidatePath('/', 'layout');
      redirect('/login');
    } else {
      return {
        error: `Account created but profile setup failed: ${profileResult.error}`,
      };
    }
  }
  return { error: 'Something went wrong. Please try again.' };
}

export async function login(prevstate: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Logout error:', error);
  }

  revalidatePath('/', 'layout');
  redirect('/login');
}

export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  return user;
}
