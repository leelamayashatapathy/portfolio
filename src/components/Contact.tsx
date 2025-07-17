const Contact = () => (
  <section id="contact" className="py-16 bg-accent/5">
    <div className="max-w-xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-dark mb-8 drop-shadow">Contact</h2>
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6 flex flex-col items-center">
        <p className="mb-6 text-gray-700 text-lg">Feel free to reach out for opportunities or collaboration!</p>
        <div className="flex justify-center gap-8 mb-4">
          <a href="mailto:leelamayashatapathy@gmail.com" className="text-accent hover:text-accent-dark text-2xl" title="Email">
            <span className="sr-only">Email</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 inline"><path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5 0v.638l8.25 5.775 8.25-5.775V6.75a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75zm0 2.362v8.138a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V9.112l-8.03 5.624a.75.75 0 0 1-.84 0L3.75 9.112z"/></svg>
          </a>
          <a href="https://github.com/leelamayashatapathy" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark text-2xl" title="GitHub">
            <span className="sr-only">GitHub</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 inline"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/leelamaya-shatapathy-39b3aa213/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark text-2xl" title="LinkedIn">
            <span className="sr-only">LinkedIn</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 inline"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
        </div>
        <div className="text-gray-600">leelamayashatapathy@gmail.com</div>
      </div>
    </div>
  </section>
);

export default Contact; 