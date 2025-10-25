export const NotFound = () => {
  return (
    <section className="text-primary flex h-full flex-wrap-reverse items-center justify-center px-5">
      <p className="w-64">
        the page you trying to access is no longer there.
        <br />
        its either moved, or wasn't present at all
      </p>
      <span className="text-sideways rotate-180 overflow-hidden text-[16rem] leading-none">
        404
      </span>
    </section>
  );
};
