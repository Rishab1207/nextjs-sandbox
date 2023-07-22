import { fetchUsers, getUsers } from "@/utils/getUser";

export const revalidate = 2;

export default async function Home() {
  const users: any[] = await getUsers();
  const testUsers: any[] = await fetchUsers()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {users.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
      <div>
        {testUsers.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    </main>
  );
}
