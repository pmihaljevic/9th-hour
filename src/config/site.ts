/**
 * Single place for every outbound destination on the site.
 * Anything marked TODO is a placeholder from the v3 design that has no
 * real target yet — swap it out and the whole page follows.
 */
export const SITE = {
  /** Web3Forms access key used by all three contact modals. */
  web3formsKey: "bcb9ab4c-1f93-4fcb-ab0f-ec7f30630642",
  email: "hello@9th-hour.studio", // TODO: confirm the address you want public
  links: {
    work: "#problem",
    products: "#symposia",
    about: "#founder",
    writing: "#founder", // TODO: point at a writing index once one exists
    symposia: "#symposia", // TODO: symposia product site
    linkedin: "#", // TODO
    github: "#", // TODO
    legal: "#", // TODO
    privacy: "#", // TODO
  },
} as const;
