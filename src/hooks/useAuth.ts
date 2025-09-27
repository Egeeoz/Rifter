'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { UserType } from '../../types/types';

// Create client outside component to avoid recreation
const supabase = createClient();

export function useAuth() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [customUser, setCustomUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchUserData = async (userId: string) => {
      const { data } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();
      return data;
    };

    // This is the key fix - wait for session to be ready
    const initAuth = async () => {
      // Wait a tick to ensure client is ready
      await new Promise((resolve) => setTimeout(resolve, 0));

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      if (session?.user) {
        setAuthUser(session.user);
        const userData = await fetchUserData(session.user.id);
        setCustomUser(userData);
      }

      setLoading(false);
    };

    initAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;

      if (event === 'SIGNED_OUT' || !session?.user) {
        setAuthUser(null);
        setCustomUser(null);
        setLoading(false);
        return;
      }

      if (session?.user) {
        setAuthUser(session.user);
        const userData = await fetchUserData(session.user.id);
        setCustomUser(userData);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return { authUser, customUser, user: customUser, loading };
}
