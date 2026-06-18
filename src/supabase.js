import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ntjmxwcpzexpuiwymwqm.supabase.co";
const supabaseAnonKey = "sb_publishable_FahxasXKjxaif1zfXK22pw_y6Q9Qp-B";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);