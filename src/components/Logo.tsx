import { site } from "../content/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <img
      src={light ? "/images/logo-light.png" : "/images/logo.png"}
      alt={site.legalName}
      width={1375}
      height={317}
      className={`block w-auto object-contain ${light ? "h-12" : "h-10 md:h-11"}`}
    />
  );
}
