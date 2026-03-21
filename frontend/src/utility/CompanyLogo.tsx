
export function CompanyLogo({ domain, alt }: { domain: string; alt: string }) {
  return (
    <img
      src={`https://logos-api.apistemic.com/domain:${domain}`}
      alt={alt}
      className="h-8 w-8"
      loading="lazy"
    />
  );
}