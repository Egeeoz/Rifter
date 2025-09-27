'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { UserType } from '../../types/types';

export function useAuth() {
  console.log('useAuth hook mounted');
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [customUser, setCustomUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchUserData = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();
      console.log('Supabase response:', { data, error });
      if (error) return null;
      return data;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const getSessionAndUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setAuthUser(session.user);
        console.log(session.user);
        const userData = await fetchUserData(session.user.id);
        setCustomUser(userData);
      } else {
        setAuthUser(null);
        setCustomUser(null);
      }
      setLoading(false);
    };

    getSessionAndUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setAuthUser(session.user);
        const userData = await fetchUserData(session.user.id);
        setCustomUser(userData);
      } else {
        setAuthUser(null);
        setCustomUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { authUser, customUser, user: customUser, loading };
}
