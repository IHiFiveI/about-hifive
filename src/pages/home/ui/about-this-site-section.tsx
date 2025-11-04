import { Anchor } from '@/ui/anchor';
import { SiteReasoningCollapse } from './site-reasoning-collapse';

export const AboutThisSiteSection = () => {
  return (
    <section>
      <h2 className="my-4 text-4xl">About this site</h2>
      <aside className="my-8 w-[min(100%,_32rem)] border-l-2 pl-4">
        <blockquote cite="https://en.wikipedia.org/wiki/Hagakure">
          <p>“A samurai has no goal — only a path”</p>
        </blockquote>
        and my path is to use the resources of a multi-million dollar
        corporation to host something{' '}
        <Anchor
          target="_blank"
          href="https://bogdanthegeek.github.io/blog/projects/vapeserver/"
        >
          a disposable vape could handle
        </Anchor>
        .
      </aside>
      <SiteReasoningCollapse />
      <h3 className="my-4 text-3xl">Used technologies</h3>
      <ul className="[&_li]:list-inside [&_li]:list-disc">
        <li>React</li>
        <li>Typescript</li>
        <li>tailwindcss</li>
        <li>
          The theme was taken from:{' '}
          <Anchor target="_blank" href="https://tweakcn.com/">
            https://tweakcn.com/
          </Anchor>
        </li>
      </ul>
      {/* TODO: State what am I planning to do with this site (maybe turn it into a blog) */}
      <h3 className="my-4 text-3xl">Future plans</h3>
      <p>
        while right now the site is just a demo, i plan to turn it into a blog
      </p>
    </section>
  );
};
