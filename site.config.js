const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Nguyễn Việt Dũng",
    image: "/avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Senior Product Manager at Viettel Group | DASCA Principal Data Scientist",
    bio: "A computer scientist turned to full-stack machine learning (ML) engineer with 5+ years experience in building data-intensive applications, overcoming complex architecture, and scalable issues. Experienced in building data processing pipeline, predictive modeling and business intelligene. Proficient in exploring data analysis in different domain knowledges such as telco, digital finance, etc. Capable of applying MLOps practices in Machine Learning lifecycle such as experiments tracking and versioning, model interpreting and AutoML",
    email: "dungnv0696@gmail.com",
    linkedin: "dungnv98",
    github: "",
    instagram: "",
  },
  projects: [
    // {
      // name: `nhathermongmer`,
      // href: "https://github.com/dungnv0696/nhathermongmer",
    // },
  ],
  // blog setting (required)
  blog: {
    title: "From Zero to Hero",
    description: "Welcome to my blog",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://nhathermongmer.vercel.app",
  since: "", // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
