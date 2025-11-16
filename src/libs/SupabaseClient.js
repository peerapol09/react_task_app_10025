
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_Supabase_project_URL 
const supabaseKey = import.meta.env.VITE_Supabase_API_KEY
// const supabaseUrl = "https:fgxsfyzjbhsajcrkhyus.supabase.co"
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZneHNmeXpqYmhzYWpjcmtoeXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwNDg1ODgsImV4cCI6MjA3NzYyNDU4OH0.Gvv4GGhnS5Dy05RdENy-jJVCtUxHeV51RaiZ4DLc-fM"
// // export เพิ่มเอาไปใช้ใน page ต่างๆ
export const supabase = createClient(supabaseUrl, supabaseKey)