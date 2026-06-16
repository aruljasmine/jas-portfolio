function GitHubStats() {
  return (
    <section className="py-24 px-8">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
        GitHub Stats
      </h2>

      <div className="flex flex-col items-center gap-8">

        <img
          src="https://github-readme-stats.vercel.app/api?username=aruljasmine&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=aruljasmine&theme=tokyonight"
          alt="GitHub Streak"
        />

      </div>
    </section>
  );
}

export default GitHubStats;