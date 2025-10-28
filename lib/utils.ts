export const formatPrice = (v: number | string, unit?: 'chuyen'|'ngay'|'km'|'goi') => {
  const unitMap: Record<string,string> = { chuyen: '/chuyến', ngay: '/ngày', km: '/km', goi: '/gói' };
  if (typeof v === 'string') return unit ? `${v} ${unitMap[unit] ?? ''}` : v;
  try {
    const s = v.toLocaleString('vi-VN');
    return unit ? `${s} ${unitMap[unit]}` : s;
  } catch {
    return unit ? `${v} ${unitMap[unit] ?? ''}` : String(v);
  }
};

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

