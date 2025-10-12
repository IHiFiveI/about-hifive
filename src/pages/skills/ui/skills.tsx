import { Anchor } from '@/ui/anchor';

export const Skills = () => {
  return (
    <div className="flex flex-col p-8 pt-4">
      <h3>coming soon!</h3>
      <p>
        in the meantime you can check the resume:{' '}
        <Anchor
          target="_blank"
          className="text-primary underline"
          href="https://novosibirsk.hh.ru/resume/79eb7b49ff0f8343700039ed1f507759633542"
        >
          hh
        </Anchor>
      </p>
    </div>
  );
};
