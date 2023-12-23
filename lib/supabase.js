import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import Config from 'react-native-config';


// Now use supabaseKey in your Supabase client initialization
const supabaseUrl = 'https://gnljdhaoguwnzhmmvtfr.supabase.co';
const supabaseKey = Config.SUPABASE_KEY;

console.log(supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
