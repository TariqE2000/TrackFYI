export function CompanyLogo({ domain, alt }: { domain: string; alt: string }) {
  return (
    <div className="flex items-end gap-2">
      <img
        src={`https://logos-api.apistemic.com/domain:${domain}`}
        alt={alt}
        className="h-8 w-8"
        loading="lazy"
      />
      <p className="mt-1">{alt}</p>
    </div>
  );
}