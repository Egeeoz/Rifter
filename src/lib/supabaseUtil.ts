'use server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function createUser(
  userId: string,
  email: string,
  username: string
) {
  const supabase = await createAdminClient();

  try {
    const { data, error } = await supabase
      .from('users')
      .insert({
        id: userId,
        username: username,
        email: email,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating user profile:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Internal server error:', error);
    return { success: false, error: 'Failed to create user profile' };
  }
}
