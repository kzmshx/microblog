export default function Home() {
  const contents = [
    {
      title: "Email Subscribe Card",
      href: "/email-subscribe",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl">Learn Tailwind</h1>
      <ul className="my-10 ">
        {contents.map((content) => (
          <li key={content.href} className="transform duration-200 hover:text-zinc-400">
            <a href={content.href}>{content.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
