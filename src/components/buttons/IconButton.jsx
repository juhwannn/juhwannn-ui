import BaseButton from '@/app/components/buttons/BaseButton';

export default function IconButton({ icon, ...props }) {
  return (
    <BaseButton {...props} size="small" ghost>
      {icon}
    </BaseButton>
  );
}
