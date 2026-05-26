import Reveal from './Reveal';

const Footer = () => (
  <footer className="mx-auto mt-10 max-w-6xl px-4 pb-10 md:px-6">
    <Reveal
      variant="up"
      className="rounded-[24px] border border-ink/10 bg-panel/80 px-6 py-5 text-center text-sm text-muted shadow-[0_12px_32px_rgba(31,41,51,0.05)]"
    >
      &copy; 2026 Leelamaya Shatapathy
    </Reveal>
  </footer>
);

export default Footer;
