import { getSession } from "../_lib/auth";

export default async function ServerComponent() {
  const session = await getSession();

  if (!session) {
    return <div>Not authenticated (Server Component)</div>;
  }

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Server Component</h2>
      <p>Welcome, {session.user?.name}!</p>
      <p className="text-sm text-gray-600">User ID: {session.user?.id}</p>
    </div>
  );
}
