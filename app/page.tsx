import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase
    .from("movies_and_tv_20250911_stage")
    .select("title")
    .limit(5);

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Supabase Test</h1>
      <ul>
        {data?.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}