import { createClient } from '@supabase/supabase-js';

const URL = 'https://yfrcfxotogkxcnbmpgfn.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmcmNmeG90b2dreGNuYm1wZ2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NjI2MTksImV4cCI6MjA0NjMzODYxOX0.I0BSxj-ypQHngJJnSfvvnuW61zaHEl1mlvZlOubK1Vs';

export const supabase = createClient(URL, API_KEY);
