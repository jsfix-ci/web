/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import strings from "content/strings.json";

export interface SeoProps {
  description?: string;
  title?: string;
  coverUrl?: string;
}

export const Seo: React.FC<SeoProps> = ({
  description,
  title,
  coverUrl = "https://data.cesko.digital/web/metadata-cover.png",
}: SeoProps) => {
  return (
    <Head>
      <title>
        {title ? `${title} | Česko.Digital` : strings.metadata.title}
      </title>
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1, viewport-fit=cover"
      />
      <meta
        name="description"
        content={description || strings.metadata.description}
      />
      <meta property="og:image" content={coverUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={coverUrl} />
      <link rel="stylesheet" href="/fonts.css" />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
    </Head>
  );
};

export default Seo;
