export default function Home() {
  const contents = [
    {
      title: "Email Subscribe Card",
      href: "/email-subscribe",
    },
    {
      title: "Pricing Cards",
      href: "/pricing-cards",
    },
    {
      title: "Product Modal",
      href: "/product-modal",
    },
    {
      title: "Image Gallery",
      href: "/image-gallery",
    },
    {
      title: "Login Modal",
      href: "/login-modal",
    },
    {
      title: "Navigation Menu 1",
      href: "/navigation-menu-1",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl">Learn Tailwind</h1>
      <ul className="my-10 flex flex-col space-y-5">
        {contents.map((content, index) => (
          <li key={content.href} className="transform duration-200 hover:text-zinc-400">
            <a className="text-lg" href={content.href}>
              {index + 1}. {content.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
