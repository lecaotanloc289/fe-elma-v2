import { useEffect, useState } from 'react';

type Props = {
  productId: string;
  quantity: number;
  updateQuantity: ({
    id,
    quantity,
  }: {
    id: string;
    quantity: number;
  }) => Promise<void>;
};

export function QuantityInput({ productId, quantity, updateQuantity }: Props) {
  // Local state for free-form input (string to temporarily hold '', '0', '01', etc.)
  const [local, setLocal] = useState(String(quantity ?? 0));

  // If prop quantity changes from outside (due to cart sync), re-sync input
  useEffect(() => setLocal(String(quantity ?? 0)), [quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    // Allow null for user delete and re-input
    if (v === '') return setLocal('');

    // Accept only (1-9).
    if (/^(?:[1-9]\d*)?$/.test(v)) setLocal(v);
  };

  const commit = async () => {
    // Standardlization: empty -> keep origin quantity; min=1, max=999
    const parsed = parseInt(local, 10);
    const normalized = Number.isFinite(parsed)
      ? Math.min(Math.max(parsed, 1), 999)
      : quantity;

    // Update UI equal number standardlization
    setLocal(String(normalized));

    // Just call API while new value different from origin quantity value
    if (normalized !== quantity && normalized > 0) {
      try {
        // call API update quantity
        await updateQuantity({
          id: productId,
          quantity: normalized,
        });
      } catch (err) {
        // rollback if error
        setLocal(String(quantity));
        console.error(err);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // trigger onBlur
      (e.target as HTMLInputElement).blur();
    } else if (e.key === 'Escape') {
      setLocal(String(quantity));
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <input
      className="input-quantity"
      // loại bỏ nút tăng giảm
      type="text"
      // mở bàn phím số trên mobile
      inputMode="numeric"
      value={local}
      onChange={handleChange}
      // “thả ra”/rời input thì gọi API
      onBlur={commit}
      // Enter để commit nhanh
      onKeyDown={handleKeyDown}
      // optional: chặn scroll thay đổi số khi hover (nếu dùng type="number")
      onWheel={e => (e.target as HTMLElement).blur()}
    />
  );
}
