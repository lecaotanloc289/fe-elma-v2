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
  // local state để gõ tự do (string để giữ tạm '', '0', '01', ...)
  const [local, setLocal] = useState(String(quantity ?? 0));

  // nếu prop quantity đổi từ bên ngoài (do đồng bộ giỏ hàng), sync lại input
  useEffect(() => setLocal(String(quantity ?? 0)), [quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    // Cho phép rỗng để người dùng xóa rồi gõ lại
    if (v === '') return setLocal('');

    // Chỉ nhận số (1-9). Nếu muốn chặn số 0 đầu
    if (/^(?:[1-9]\d*)?$/.test(v)) setLocal(v);
  };

  const commit = async () => {
    // chuẩn hóa: rỗng -> giữ nguyên quantity cũ; min=1, max=999 (tùy bạn)
    const parsed = parseInt(local, 10);
    const normalized = Number.isFinite(parsed)
      ? Math.min(Math.max(parsed, 1), 999)
      : quantity;

    // cập nhật UI về số đã chuẩn hóa
    setLocal(String(normalized));

    // chỉ gọi API khi khác giá trị cũ và giá trị lớn hơn 0, mặc dù đã chặn không
    if (normalized !== quantity && normalized > 0) {
      try {
        await updateQuantity({
          id: productId,
          quantity: normalized,
        }); // call API
        // có thể toast "Đã cập nhật số lượng"
      } catch (err) {
        // rollback nếu lỗi
        setLocal(String(quantity));
        // toast lỗi ở đây
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
