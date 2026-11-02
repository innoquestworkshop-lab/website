/** Public URL of a workshop's LINE group QR image, stored in the workshop-posters bucket. */
export const lineQrUrl = (path: string | null | undefined): string | null =>
  path ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/workshop-posters/${path}` : null;
