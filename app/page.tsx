export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-20 text-zinc-900">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-sm">
        <p className="mb-4 text-sm font-medium text-zinc-500">
          Orthodontic AI System
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          🦷 正畸 AI 工作台
        </h1>

        <p className="mb-8 text-lg leading-8 text-zinc-600">
          欢迎来到 Sean 的第一个 Next.js + Vercel 网站。
          从今天开始，用 Codex 学习开发真正的 AI 项目。
        </p>

        <ul className="mb-10 space-y-3 text-lg">
          <li>✅ 小红书病例生成</li>
          <li>✅ AI 文案助手</li>
          <li>✅ 图片模板生成</li>
          <li>✅ 正畸病例管理</li>
        </ul>

        <button className="rounded-full bg-black px-6 py-3 text-white">
          开始使用
        </button>
      </section>
    </main>
  );
}