const SectionHeader = ({ kicker, title, sub }) => {
  return (
    <div className="mb-6">
      <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
        {kicker}
      </div>

      <h2 className="mt-1 text-2xl font-bold md:text-3xl font-display">
        {title}
      </h2>

      {sub && (
        <p className="max-w-2xl mt-2 text-sm text-muted-foreground">{sub}</p>
      )}
    </div>
  );
};

export default SectionHeader;
